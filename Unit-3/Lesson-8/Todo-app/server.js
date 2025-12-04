const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/todo-app')
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });

// Fetch All Todos

// Create a New Todo

// Update a Todo

// Delete a Todo

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});