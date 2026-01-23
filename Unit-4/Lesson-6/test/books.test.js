import { expect } from 'chai';
import { Book } from '../books.js';
import mongoose from 'mongoose';

const mongoURI = 'mongodb://localhost:27017/booksInventoryTest';

before(() => {
    mongoose.connect(mongoURI);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('Connected to MongoDB for testing');
        return mongoose.connection.db.dropDatabase();
    });
});

after(async () => {
    await mongoose.disconnect();
});

describe('Book Model Test Suite', () => {
    it('should create & save a book successfully', async () => {
        const validBook = new Book({
            title: 'Test Book',
            isbn: '123-4567890123',
            tags: ['test', 'book'],
            publisher: 'Test Publisher',
            inventory: 10,
            unitsSold: 5
        });

        const savedBook = await validBook.save();

        expect(savedBook._id).to.exist;
        expect(savedBook.title).to.equal('Test Book');
        expect(savedBook.isbn).to.equal('123-4567890123');
        expect(savedBook.tags).to.include.members(['test', 'book']);
        expect(savedBook.publisher).to.equal('Test Publisher');
        expect(savedBook.inventory).to.equal(10);
        expect(savedBook.unitsSold).to.equal(5);
    });

    // Test validation for missing required fields
    it('should not create a book without required fields', async () => {
        const bookData = {
            isbn: '1234567890',
            publisher: 'Test Publisher',
        };

        try {
            await Book.create(bookData);
        } catch (error) {
            expect(error.errors).to.have.property('title');
        }
    });

    // Test default values (inventory and unitsSold should default to 0)
    it('should set default values for inventory and unitsSold', async () => {
        const bookData = {
            title: 'Default Book',
            isbn: '0987654321',
            publisher: 'Default Publisher',
        };

        const book = await Book.create(bookData);

        expect(book.inventory).to.equal(0);
        expect(book.unitsSold).to.equal(0);
    });

    // Test book retrieval by ISBN
    it('should retrieve a book by ISBN', async () => {
        const bookData = {
            title: 'Find Me',
            isbn: '1122334455',
            publisher: 'Find Publisher',
        };

        const book = await Book.create(bookData);

        const foundBook = await Book.findOne({ isbn: '1122334455' });
        expect(foundBook).to.not.be.null;
        expect(foundBook).to.have.property('isbn').that.equals('1122334455');
    });
});