//Objective: I want to serve the request coming to my server(localhost/127.0.0.1) with differeent HTML files 
// for different seasons(Winter/Summer) depending on the value provided in query parameter.

const http = require('http');
const fs = require('fs');
const qs = require('querystring');

const server = http.createServer((req, res) => {

    //Read the query parameter from the URL (http://localhost:8080/?month=5)
    const queryString = req.url.split('?')[1]; //month=5
    const query = qs.parse(queryString); //month 5
    const monthNumber = query.month;

    const fileName = (monthNumber > 4 & monthNumber < 10) ? 'summer.html' : 'winter.html'; //Ternary Operator

    fs.readFile(fileName, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found');
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        console.log("Calling this API for this pagr");
        res.end(data);
    });
});

// Start the server and listen on the specified port (http://localhost:8080/)
const PORT = 8080;
const HOSTNAME = 'localhost'; // localhost or 127.0.0.1 
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});