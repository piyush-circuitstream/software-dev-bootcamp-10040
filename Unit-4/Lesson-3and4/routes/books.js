const express = require('express');

const router = express.Router();

// Get list of books
router.get('/', (req, res) => {
    // Static books data to be rendered, but later needs to be replaced with database data
    const books = [
        { title: "Book Title1", isbn: "1234567", publisher: "AGS", inventory: 5, unitsSold: 2, tags: "Drama,Fiction" },
        { title: "Book Title2", isbn: "2345671", publisher: "DPS", inventory: 7, unitsSold: 3, tags: "Thriller" },
        { title: "Book Title3", isbn: "3456712", publisher: "DRO", inventory: 10, unitsSold: 7, tags: "Action,Fiction" },
        { title: "Book Title4", isbn: "4567123", publisher: "CGS", inventory: 2, unitsSold: 1, tags: "Drama,Action,Sci-Fi" }
    ];

    res.render('books', { books }); // Render the books.ejs template with the books data
});

// Display form to add a new book
router.get('/add', (req, res) => {
    res.render('form', { title: 'Add a new Book', action: '/add' }); // Render the form.ejs template for adding a new book
});

// Create a book
router.post('/add', (req, res) => {
});

// Display form to edit a book
router.get('/edit/:id', (req, res) => {
    res.render('form', { title: 'Edit a Book', action: `/edit/${req.params.id}` }); // Render the form.ejs template for editing a book
});

// Update a book
router.put('/edit/:id', (req, res) => {
});

// Delete a book
router.delete('/delete/:id', (req, res) => {
});

module.exports = router;