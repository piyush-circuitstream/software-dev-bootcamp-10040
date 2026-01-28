const express = require('express');
const path = require('path');
const mongoose = require('mongoose'); //ADDED CHNAGE
const { Movie, Review } = require('./models'); //ADDED CHANGE
const { resolveObjectURL } = require('buffer');
const { error } = require('console');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => { //ADDED CHANGE
    try {
        const movies = await Movie.find(); //ADDED CHANGE
        res.render('index', { movies: movies });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Error fetching movies! Please try again later.' });
    }

});

app.get('/movie/:id', async (req, res) => {

    try {
        const movie = await Movie.findOne({ _id: req.params.id });
        const movieReviews = await Review.find({ movie: req.params.id });

        if (movie) {
            res.render('movie-detail', { movie: movie, reviews: movieReviews });
        } else {
            res.status(404).send('Movie not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Error fetching a movie! Please try again later.' });
    }
});

app.get('/submit-review', (req, res) => {
    res.render('submit-review');
});

app.post('/submit-review', async (req, res) => {
    const { movieId, reviewer, rating, comment } = req.body;
    try {
        const newReview = await Review.create({
            movie: movieId,
            reviewer,
            rating: parseInt(rating, 10),
            comment
        });

        // Now calculate the new average rating for the movie
        const reviews = await Review.find({ movie: movieId });

        // Calculate the new average rating
        const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
        const averageRating = totalRating / reviews.length;

        // Update the movie's rating field with the new average
        await Movie.findByIdAndUpdate(movieId, { rating: averageRating });

        res.redirect(`/movie/${movieId}`);
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Error submitting a review! Please try again later.' });
    }
});

//ADD DB CONNECTION HERE
mongoose.connect('mongodb://localhost:27017/movieRatingsApp')
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('Error connecting to MongoDB', err);
    });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});