# ParanormalGPT.com
- For the users:
- Unveiling ParanormalGPT, the solitary chat-bot that thrives on unraveling questions no other dares to attempt!
- Questions such as "what is the colour of my t-shirt" or "what did I eat today for breakfast"...
- Tapping into the ethereal, it crafts answers never before stored.
- if the answers resides in the master's mind, ParanormalGPT impressively extracts and unveils the concealed knowledge, leaving all in awe!
- Impressive, no? XD

## Why I Developed It
- I wanted to learn and practice new technologies that I didn't have experience such as Node.js, multi-language app and cloud.
- Also I wanted to understand better about how to scale applications, so it was a great opportunity to learn about:
 - distributed databases with MongoDB
 - distributes apps with microservices using Kubernetes and Docker.

## Development
- ParanormalGPT is a chat-bot (web-app) developed in Node.js and MongoDB.
- For its front end, it uses Semantic-UI and javascript with jQuery.
- The web-app is responsive, so it works well in a PC or in mobile devices.
- The web-app supports currently 9 languages.

## Storing Data
- To store data persistently, the web-app uses MongoDB Atlas, a cloud solution provided by MongoDB.

## Sending Emails
- In order to send emails, the web-app can use authenticated SMTP or a local provider via nodemailer package.

## Geolocation by User's IP
- To get the user's geolocation and automatically set the language, axios package is used to perform a GET request in api.country.is

## Environment Variables Needs to be Set
 The following environment variables needs to be set in order to allow the web-app to send emails and to store data in MongoDB clusters.
 For handling environment variables in Node.js, the package "dotenv" is used - an ".env" file can be used to define the env variables.

- PGPT_PROD_ENV  = true
- PGPT_MDB_URI   = 
- PGPT_MDB_DB    = 
- PGPT_MAIL_PASS = 
- PGPT_SMTP_USER = 
- PGPT_SMTP_HOST = 
- PGPT_SMTP_PORT = 
