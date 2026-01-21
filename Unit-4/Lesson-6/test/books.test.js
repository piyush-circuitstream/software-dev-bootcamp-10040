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

    it('should fail to create a book without required fields', async () => {
        const bookWithoutRequiredField = new Book({ title: 'Incomplete Book' });
        let err;
        try {
            await Book.create(bookWithoutRequiredField);
        } catch (error) {
            err = error;
        }
        expect(err).to.exist;
        expect(err.errors.isbn).to.exist;
        expect(err.errors.publisher).to.exist;
        expect(err.errors.inventory).to.exist;
        expect(err.errors.unitsSold).to.exist;
    });
});