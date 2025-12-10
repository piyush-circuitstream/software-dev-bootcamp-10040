const express = require('express');
const app = express();
const morgan = require('morgan');

// SETUP of SERVER
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// MIDDLEWARES
const requestTime = (req, res, next) => {
    req.requestTime = Date.now();
    console.log('Request Time:', req.requestTime);
    next();
}

const logger = (req, res, next) => {
    console.log(`Got new request: ${req.method} ${req.originalUrl}`);
    next();
}

// APPLICATION LEVEL MIDDLEWARES
// app.use(requestTime); // ALL ENDPOINTS will use this middleware
// app.get('/contacts', requestTime); // ONLY GET ENDPOINT for given endpoint
// app.use('/contacts', requestTime); // ALL HTTP METHODS of given endpoint
// app.use([logger, requestTime]); // MULTIPLE MIDDLEWARES for ALL ENDPOINTS & ALL HTTP METHODS
// app.use('/contacts', logger);
// app.use(requestTime);

// MULTIPLE MIDDLEWARES for SPECIFIC ENDPOINT - series of middleware functions
// app.get('/', requestTime, logger, (req, res) => {
//     res.send('Welcome to the Home Page!');
// });

// ROUTER LEVEL MIDDLEWARES
// const router = express.Router();
// router.use(logger);

app.use(morgan("combined")); // USING THIRD PARTY MIDDLEWARE

// SOME APIS
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.get('/about', (req, res) => {
    res.send('This is the About Page.');
});

app.get('/contacts', (req, res) => {
    throw new Error('Simulated error in /contacts route');
    // res.send('This is the Contact Page.');
});

app.post('/contacts', (req, res) => {
    res.send('This is writing the new Contact.');
});

app.delete('/contacts', (req, res) => {
    res.send('This is deleting the Contact.');
});

app.get('/user', (req, res) => {
    res.send('This is the User Page.');
});

// ERROR HANDLING MIDDLEWARE
app.use((error, req, res, next) => {
    // console.error(err.stack);
    res.status(500).send({ message: 'Something broke! Please try again later.', error: error.message });
});