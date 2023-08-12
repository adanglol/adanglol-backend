// index.js - the main file of the application

const path = require('path');
const express = require('express');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const api_key = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(api_key);

const app = express();

app.use(cors({
  origin: 'https://adanglol-backend-b3a02bbea64a.herokuapp.com',
  methods: ['POST', 'GET'],
  optionsSuccessStatus: 204,
  credentials: true,
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

app.get('/send-email', (req, res) => {
    res.status(200).json({ message: 'Send email GET endpoint' });
  });
  
app.get('/test', (req, res) => {
    res.status(200).json({ message: 'Test GET endpoint' });
});

// implement the POST /send-email endpoint
app.post('/send-email', (req, res) => {
    // console.log('POST request to /send-email');
    const { to, subject, text } = req.body;
  
    const msg = {
      to,
      from: process.env.EMAIL, // Replace with your own email address
      subject,
      text,
    };
  
    sgMail
      .send(msg)
      .then(() => {
        res.status(200).json({ message: 'Email sent successfully' });
      })
      .catch((error) => {
        // console.error('Error sending email:', error);
        res.status(500).json({ message: 'An error occurred while sending the email' });
      });
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
