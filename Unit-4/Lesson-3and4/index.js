const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.json());

async function startServer() {
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

startServer();