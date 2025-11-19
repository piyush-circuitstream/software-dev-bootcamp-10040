var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

const express = require("express");
const app = express();

// MIDDLEWARE 1
app.use((req, res, next) => {
  console.log("Step 1: Request received");
  next(); // Continue to the next middleware/route
});

// MIDDLEWARE 2
app.use((req, res, next) => {
  console.log("Step 2: Check authentication");
  next();
});

// FINAL ROUTE
app.get("/", (req, res) => {
  res.send("Hello! This is the home page");
});

//Step 1: 
//Step 2: 
// Hello!


module.exports = app;
