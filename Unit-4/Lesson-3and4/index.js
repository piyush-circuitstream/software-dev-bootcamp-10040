const express = require('express');
const app = express();
const booksRouter = require('./routes/books');

app.set('view engine', 'ejs');

app.use(express.json());

app.use('/', booksRouter);

async function startServer() {
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

startServer();