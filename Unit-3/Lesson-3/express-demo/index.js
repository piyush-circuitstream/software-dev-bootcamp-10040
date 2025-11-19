const express = require('express');
const app = express();
const PORT = 3000; //Any available ports: 8000, 8080, 3000, 5000, etc.

const DB = [];
// A basic route
app.get('/', (req, res) => {
    res.send('Hello, welcome to the Express.js demo!');
});

// Another route for POST request demo
app.post('/', (req, res) => {
    let bookdata = req.body 
    DB.push(); 
    console.log(DB)
    res.status(201); //Created
    res.send('POST request received and processed!');
});

//Listening onm specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
