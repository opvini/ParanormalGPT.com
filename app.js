
// execute with
// $ node app.js

const express    = require('express');
const nodemailer = require('nodemailer');
const app        = express();
const os         = require('os');
const path       = require('path');
const axios      = require('axios');

// dotev to handle secrets
require('dotenv').config();

// local configuration variables
const config = require('./config');

const { MongoClient, ObjectId } = require("mongodb");

const EXPIRING_EMAIL_TIME_HOURS = 24;
const MESSAGE_ENCRYPT_KEY       = 17;
const MAIL_FLAG_PRODUCTION      = process.env.PGPT_PROD_ENV;

// serve static files in public folder
app.use(express.static('public'));

// Middleware to parse incoming request bodies
app.use(express.json());


//////////////////////////////////////////////////////////////  function to decrypt the received data
function decrypt_text(text, shift) 
{
  var result = "";
  var number = "";

  for (var i=0; i<text.length; i++) 
  {
    // if the char is a number concat
    if (!isNaN(parseInt(text[i]))){
      number += ""+text[i];
    }
    // shift it back
    else{
      number = parseInt(number)-shift;
      result += String.fromCharCode(number);
      number = "";
    }
  }

  return result;
}


//////////////////////////////////////////////////////////////  Function to Send E-mail

function send_email(str_email, code)
{
  
  var transporter;
  var str_log = "";
  
  // send emails from local server if in production - no limits
  if(MAIL_FLAG_PRODUCTION)
  {
    transporter = nodemailer.createTransport({
      sendmail: true,
      newline: 'unix',
      path: '/usr/sbin/sendmail',
    });

    str_log = "(in production)";
  }

  // if not in production send email via authenticated SMTP
  else{
    transporter = nodemailer.createTransport({
      host: process.env.PGPT_SMTP_HOST, 
      port: process.env.PGPT_SMTP_PORT, 
      secure: false, 
      auth: {
        user: process.env.PGPT_SMTP_USER,
        pass: process.env.PGPT_MAIL_PASS
      }
    });

    str_log = "(in development)";
  }

  // mail message
  const mailOptions = {
    from:    '"ParanormalGPT" <no-reply@paranormalgpt.com>',
    to:      str_email,
    subject: 'Email verification code: '+code,
    text:    'Welcome to ParanormalGPT.com - beta version! Your code is '+code+'.',
    html:    'Welcome to ParanormalGPT.com - beta version! <br /> \
              Your confirmation code is <b>'+code+'</b>.'
  };
 
  // Send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return false;
    }
    console.log('Email sent '+str_log+' to <'+str_email+'>: ' + info.response);
    return true;
  });

};

// check if email is valid
function is_valid_email(email) 
{
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function date_time()
{
  const currentDate = new Date();  
  return currentDate;
}

function gen_random_confirm_code(){
	return Math.floor(Math.random() * (999 - 100 + 1) + 100);
}

var client;
var dbName;

async function mongodb_connect(database)
{
  // Connect and insert the data in MongoDB
  // send the email if the data is correctly stored
  const uri = process.env.PGPT_MDB_URI;

  client = new MongoClient(uri);
  await client.connect();

  dbName = database;
}

async function mongodb_disconnect(){
  await client.close();
}


async function mongodb_is_email_used_recently(email, collection)
{
  // Calculate the date 24 hours ago from the current time
  const twentyFourHoursAgo = new Date();
  twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - EXPIRING_EMAIL_TIME_HOURS); 
  
  // query: same email registered in the past 24h and already confirmed
  const query = {
    email: email, 
    email_confirmed: true, 
    date: {
      $gt: twentyFourHoursAgo
    }
  } 

  // try to find a register of the same email in the past 24h
  const docResult = await collection.findOne(query);

  // there is an email already confirmed in the last 24h
  // user already used the app and confirmed email
  if(docResult != null){
    return docResult._id;
  }

  // email not used or not confirmed yet
  else{
    return false;
  }
}

// check if a session id exists
async function mongodb_is_id_valid(session, collection)
{
  const docResult = await collection.findOne({_id: new ObjectId(session)});

  if(docResult != null)
  {
    return {success: true, data: docResult}
  }
  else
    return {success: false};

}

// register new user if it does not exist, and returns the id
// or it returns the id of the existed one
async function mongodb_new_session(email, visitor_ip, referral="")
{
  var isReferralValid = {success: false};

  // generate random code
  const code = gen_random_confirm_code();
  const collectionName = "sessions";

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  func_return = {
    document_id: 0,
    email_sent: false
  } 

  // data to be inserted in MongoDB
  var newUser = {
    email: email,
    code: code,
    email_confirmed: false,
    email_sent: false,
//  invited_by: referral,
    ip: visitor_ip,
    date: date_time()
  };

  if(referral != ""){
    isReferralValid = await mongodb_is_id_valid(referral, collection);
    console.log("Start with referral");
  }
  else
  console.log("No referral");

  // include the field invited_by if it has a referral
  if(isReferralValid.success == true)
    newUser.invited_by = new ObjectId(referral);

  // check if the email was recently used
  isEmailThere = await mongodb_is_email_used_recently(email, collection);

  if( false == isEmailThere )
  {
    // create a new document and send an email
    try {

      // send the email with confirmation code
      console.log("Email sent: "+email);
      send_email(email, code);
      func_return.email_sent = true;
      newUser.email_sent     = true;
   
      // create a new document in Mongodb
      const insertResult = await collection.insertOne(newUser);
      console.log("New document created (session): "+insertResult.insertedId);

      // return the ID of the inserted document
      func_return.document_id = insertResult.insertedId;

      // include the new id in the referral document, if it is the case
      if(isReferralValid.success == true){
        await collection.updateOne(
          {_id: newUser.invited_by }, // query
          { $addToSet: { referrals: new ObjectId(insertResult.insertedId) }}); // add as array if it does not exist

          console.log("Referral updated: "+newUser.invited_by);
      }

      return func_return;

    } catch (err) {
      throw new Error('Something went wrong storing and sending the email: '+err);
    }
  }

  // return the ID of the already existed document
  else{
    console.log("Reuse existing session: "+isEmailThere);
    func_return.document_id = isEmailThere;
    return func_return;
  }
}

// function to find a document with the id and the code
// TBD: decide if expiring time shall be checked
async function mongodb_check_code(id, code)
{
  const database   = client.db(dbName);
  const collection = database.collection("sessions");

  // try to find the document with id
  try {
    const docResult = await collection.findOne({_id: new ObjectId(id)});
    if(docResult.code == code){
      return true;
    }
    else{
      return false;
    }

  } catch (err) {
    throw new Error('Something went wrong checking the code: '+err);
    return false;
  }
}

// function to find a document with the id and the code
// TDB: decide if date field shall also be updated
async function mongodb_set_email_confirmed(id)
{
  const database   = client.db(dbName);
  const collection = database.collection("sessions");

  // try to find the document with id
  try {

    const docResult = await collection.updateOne(
      { _id:  new ObjectId(id) }, 
      { $set: {email_confirmed: true}}
    );

    if(docResult.matchedCount === 1){
      return true;
    }
    else{
      return false;
    }

  } catch (err) {
    throw new Error('Something went wrong updating a email_confirmed: '+err);
    return false;
  }
}

// open dialog if:
//  session id exists AND
//  confirmation email was sent AND
//  email is not confirmed
async function mongodb_check_open_dialog(session)
{
  const database   = client.db(dbName);
  const collection = database.collection("sessions");

  // Calculate the date 24 hours ago from the current time
  const twentyFourHoursAgo = new Date();
  twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - EXPIRING_EMAIL_TIME_HOURS); 
  
  // check if the session id has confirmed its email in the past 24h
  const docResult = await collection.findOne({_id: new ObjectId(session)});

  // session not found
  if(docResult == null){
    console.log("Session does not exist");
    return true;
  }

  // first time start session
  else if( docResult.email_sent == true && docResult.email_confirmed == false ){
    console.log("Open dialog: true for "+session);
    return true;
  }

  // it is not the first time using session
  // expiring time is checked
  else if(docResult.email_sent == true && docResult.email_confirmed == true && docResult.date < twentyFourHoursAgo){
    console.log("Open dialog: true (expired session) for "+session);
    console.log
    return true;
  }

  // do not open dialog 
  else{
    console.log("Open dialog: false for "+session);
    return false;
  }
  
}

async function mongodb_store_message(id, question, answer, visitor_ip)
{
  const database = client.db(dbName);
  const collection = database.collection("messages");

  // data to be inserted in MongoDB
  const newMessage = {
    session_id: new ObjectId(id),
    question: question,
    answer: answer,
    ip: visitor_ip,
    date: date_time()
  };

  // create a new document in Mongodb
  const insertResult = await collection.insertOne(newMessage);
  console.log("New document created (message): "+insertResult.insertedId);

  return true;
}

// returns the ammount of referrals of a session
async function mongodb_count_referrals(session)
{
  const collectionName = "sessions";
  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  const result = await mongodb_is_id_valid(session, collection);

  if(result.success == true){
    return result.data.referrals.length;
  }
  else
    return 0;
}



///////////////////////////////////////////////////////////////////////////// ROUTES

// redirect to welcome.html?lang=EN
app.get('/', (req, res) => {

  // referral, if there is
  const referral  = req.query.ref != null ? req.query.ref : "";
  const concatStr = referral != "" ? ("?ref="+referral) : "";

  res.redirect('/welcome.html'+concatStr);
});


// check what what country the user is
app.post('/whatcountry', (req, res) => {

  // TBD: the country should use the user IP, not the server IP
  const userIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const apiUrl = 'https://api.country.is/' + userIP;

  console.log(userIP);

  axios.get(apiUrl)
    .then(response => {
      const countryResp = response.data.country;
      const countryIp   = response.data.ip;
      console.log('Response:', response.data);
      res.json({ success: true, country: countryResp});
    })
    .catch(error => {
      console.error('Error getting the country <'+apiUrl+'>: ');
      res.json({success: false});
    });
});

// Referrals
app.get('/ref/:session', (req, res) => {
  const referral = req.params.session;
  res.redirect("/?ref="+referral);
});


// Referrals
app.post('/countreferrals/', (req, res) => {
  
  const postData = req.body;
  
  mongodb_count_referrals(postData.session)
  .then(result => {
    res.json({ success: true, count: result });
  })
  .catch(result => {
    res.json({ success: false });
  });

});


app.post('/newsession/',(req, res) => {

  const postData = req.body;

  // Validate the email format
  if (!is_valid_email(postData.email)) {
    return res.json({ success: false, message: 'Invalid email: '+postData.email });
  }

  referral = postData.ref != null ? postData.ref : "";

  // start a session (new one or reuse last one if recent)
  mongodb_new_session(postData.email, req.socket.remoteAddress, referral)
  .then( result => {
    res.json({ success: true, session: result.document_id, open_dialog: result.email_sent});
  })
  .catch(err => {
    console.log(err); 
    res.json({ success: false});
  });

});



app.post('/check_open_dialog/',(req, res) => {
  const postData = req.body;

  mongodb_check_open_dialog(postData.session)
  .then(result => {
    if(result) 
      res.json({ success: true});
    else       
      res.json({ success: false});
  })
  .catch(err =>{
    res.json({ success: false});
  });
  
});


app.post('/checkcode/',(req, res) => {
  const postData   = req.body;
  var   funcReturn = false;

  mongodb_check_code(postData.session, postData.code)
  .then(result => {
    if(result) 
    {
      // update the email_confirmed field to true
      mongodb_set_email_confirmed(postData.session)
      .then(result => {
        if(result) {
          res.json({ success: true });
        }
        else{
          res.json({ success: false });
        }
      })
      .catch(err => {
        res.json({ success: false });
      });
    }
    else {     
      res.json({ success: false });
    }
  })
  .catch(err =>{
    res.json({ success: false });
  });
  

});


app.post('/message/', (req, res) => {
  const postData = req.body;
  const decryptAnswer = decrypt_text(postData.SSID, MESSAGE_ENCRYPT_KEY);

  mongodb_store_message(postData.session, postData.question, decryptAnswer, req.socket.remoteAddress)
  .then(result => {
    res.json({success: true, answer: decryptAnswer})
  })
  .catch(err => {
    res.json({success: false})
  });

  
})


///////////////////////////////////////////////////////////////////////////// Listen port

mongodb_connect(process.env.PGPT_MDB_DB);

// listens port 8054
const port = 8054;

app.listen(port, () => {
  console.log(`ParanormalGPT.com: listening on port ${port}`)
})

mongodb_disconnect();
