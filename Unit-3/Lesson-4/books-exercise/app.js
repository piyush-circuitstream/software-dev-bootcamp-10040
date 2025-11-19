const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// In-memory store for books (mock database)
let books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }
];

// List all books
app.get('/books', (req, res) => {
    res.status(200).json(books);
});

// Get a specific book by ID
app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);

    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(book);
});

// Create a new book
app.post('/books', (req, res) => {
    const { title, author, year } = req.body;

    if (!title || !author || !year) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const newBook = {
        id: books.length + 1, // Simple ID generation (can be replaced with more sophisticated logic)
        title,
        author,
        year
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

// Update a book (PUT request)
app.put('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const { title, author, year } = req.body;

    const bookIndex = books.findIndex(b => b.id === bookId);
    if (bookIndex === -1) {
        return res.status(404).json({ message: 'Book not found' });
    }

    if (!title || !author || !year) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    books[bookIndex] = { id: bookId, title, author, year };
    res.status(200).json(books[bookIndex]);
});

// Delete a book by ID
app.delete('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id === bookId);

    if (bookIndex === -1) {
        return res.status(404).json({ message: 'Book not found' });
    }

    books.splice(bookIndex, 1);
    res.status(204).send(); // 204 No Content - successfully deleted
});

// Start the server
app.listen(port, () => {
    console.log(`Bookstore API listening at http://localhost:${port}`);
});
