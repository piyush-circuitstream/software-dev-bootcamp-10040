const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

const todoRouter = require('./routers/todoRouter');
const authRouter = require('./routers/authRouter');

const session = require('express-session');
const passport = require('passport');

// MIDDLEWARES
app.use(express.json()); // NOT NEEDED for GET AND DELETE REQUESTS, BUT NEEDED for POST, PATCH AND PUT REQUESTS

const loggedInMiddleware = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.redirect('/app/login.html');
    }
}

// SESSION MIDDLEWARE SETUP
app.use(session({
    secret: 'xXdxlJCnlYt0P4g0',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    }
}));

app.use(passport.session());



// CONNECT TO MONGODB
mongoose.connect('mongodb://localhost:27017/todo-app')
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });

app.use('/app', express.static('public')); //localhost:3000/app will serve static files from public folder

// Route reuests to authRouter for handling authentication endpoints(register, login, logout)
app.use('/auth', authRouter);
// Route requests to todoRouter for handling /todos endpoints
app.use('/', loggedInMiddleware, todoRouter); // all routes in todoRouter will be prefixed with /

app.use((err, req, res, next) => {
    console.error(err);
    res.status(res.status ?? 500).send(err.message || 'Internal server error occurred.');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});