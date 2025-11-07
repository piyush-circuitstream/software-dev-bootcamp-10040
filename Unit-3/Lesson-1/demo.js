// Import the HTTP module
const http = require('http');
const capitalize = require('capitalize');

// Create a server object
const server = http.createServer((req, res) => {
    let responseTextRaw = 'i am a smaller text!';

    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body as 'Hello, World!'
    res.end(capitalize.words(responseTextRaw)); // I Am A Smaller Text!
});

// Define the port to listen on const PORT = 3000;

// Start the server and listen on the specified port (http://localhost:8080/)
const PORT = 8080;
const HOSTNAME = 'localhost'; // localhost or 127.0.0.1 
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});