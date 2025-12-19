const express = require('express');
const ejs = require('ejs');
const app = express();
const PORT = 3000;

// //To set the custom views directory (your all ejs files are in template directory instead of views directory)
// app.set('views', path.join(__dirname, 'template'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: 'Hello from EJS Template!', firstname: 'John', lastname: 'Doe', usecase: 'Express with EJS' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});