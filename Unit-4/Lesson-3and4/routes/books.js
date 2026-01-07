const express = require('express');

const router = express.Router();

// Get list of books
router.get('/', (req, res) => {
    // Static books data to be rendered, but later needs to be replaced with database data
    const books = [
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
        { title: '1984', author: 'George Orwell' },
        { title: 'Pride and Prejudice', author: 'Jane Austen' },
        { title: 'The Catcher in the Rye', author: 'J.D. Salinger' }
    ];

    res.render('books', { books }); // Render the books.ejs template with the books data
});


// Create a book
router.post('/add', (req, res) => {
});

// Update a book
router.put('/edit/:id', (req, res) => {
});

// Delete a book
router.delete('/delete/:id', (req, res) => {
});

module.exports = router;