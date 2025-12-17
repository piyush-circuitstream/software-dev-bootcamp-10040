const express = require('express');
const router = express.Router();
const { User } = require('../models/models');

const passport = require('passport');
const LocalStrategy = require('passport-local');

const crypto = require('crypto');

passport.use(new LocalStrategy(async function verify(username, password, callback) {
    try {
        const user = await User.findOne({ username });
        if (!user) { return callback(null, false, { message: 'Incorrect username or password.' }); }

        crypto.pbkdf2(password, Buffer.from(user.passwordSalt, 'base64'), 310000, 32, 'sha256', function (err, hashedPassword) {
            if (err) { return callback(err); }
            if (!crypto.timingSafeEqual(Buffer.from(user.hashedPassword, 'base64'), hashedPassword)) {
                return callback(null, false, { message: 'Incorrect username or password.' });
            }
            return callback(null, user);
        });
    } catch (err) {
        return callback(err);
    }
}));

// Register a New User
router.post('/register', async (req, res, next) => {
    if (!req.body.username || !req.body.password) {
        // return res.status(400).json({ message: 'Username and password are required.' });
        return next({ message: 'Username and password are required.' });
    }

    const user = await User.findOne({ username: req.body.username });
    if (user) {
        return next({ message: 'Username already exists. Please choose another username.' });
    }

    const salt = crypto.randomBytes(12);

    crypto.pbkdf2(req.body.password, salt, 310000, 32, 'sha256', async function (err, hashedPassword) {
        if (err) {
            return next('Error while encrypting password');
        }

        try {
            const newUser = await User.create({
                username: req.body.username,
                hashedPassword: hashedPassword.toString('base64'),
                passwordSalt: salt.toString('base64'),
            });

            if (!newUser) {
                return next({ message: 'Error while creating user. Please try again later.' });
            }

            // This is until the session is implemented
            res.status(201).json({ message: 'User registered successfully! Please login to continue.' });

            // This would work after implementing sessions
            // req.login(user, function (err) {
            //     if (err) { return next(err); }
            //     res.redirect('/app');
            // });

        } catch (error) {
            return next(error);
        }

    });
});

// Login User
router.post('/login', passport.authenticate('local', {
    successRedirect: '/app',
    failureRedirect: '/app/login.html'
}));

// Logout User
router.post('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/app/login.html'); //res.send()
    });
});

module.exports = router;