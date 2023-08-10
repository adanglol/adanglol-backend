// index.js
// const http = require('http');

const path = require('path');
const express = require('express');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');


const PORT = process.env.PORT || 3000;
const api_key = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(api_key);
const app = express();
app.use(cors());


app.use(express.json());

app.get('/', (req, res) => {
    // console.log('GET request to /');
    res.status(200).json({ message: 'GET endpoint' });
  });

app.get('/send-email', (req, res) => {
    // console.log('GET request to /send-email');
    res.status(200).json({ message: 'Send email GET endpoint' });
  });
  
app.get('/test', (req, res) => {
// console.log('GET request to /test');
res.status(200).json({ message: 'Test GET endpoint' });
});

app.listen(PORT);






// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
  
//      // Use backticks (`) for template literals
//      const emailMessage = `Email address from environment variable: ${process.env.EMAIL}`;
    
//      // Sending the email message as the response
//      res.end(emailMessage);
// });

// const PORT = process.env.PORT || 3000;

// server.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
