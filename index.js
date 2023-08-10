// index.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
  
     // Use backticks (`) for template literals
     const emailMessage = `Email address from environment variable: ${process.env.EMAIL}`;
    
     // Sending the email message as the response
     res.end(emailMessage);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
