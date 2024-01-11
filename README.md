# ParanormalGPT.com
ParanormalGPT is a chat-bot developed in Node.js and MongoDB.
For its front end, it uses Semantic-UI and javascript with jQuery.
The web-app is responsive, so it works well in a PC or in mobile devices.

## Storing Data
To store data persistently, the web-app uses MongoDB Atlas, a cloud solution provided by MongoDB.

## Sending Emails
In order to send emails, the web-app can use authenticated SMTP or a local provider.

## Environment Variables Needs to be Set
The following environment variables needs to be set in order to allow the web-app to send emails and to store data in MongoDB clusters.
For handling environment variables in Node.js, the package "dotenv" is used - an ".env" file can be used to define the env variables.

PGPT_PROD_ENV  = true
PGPT_MDB_URI   = 
PGPT_MDB_DB    = 
PGPT_MAIL_PASS = 
PGPT_SMTP_USER = 
PGPT_SMTP_HOST = 
PGPT_SMTP_PORT = 
