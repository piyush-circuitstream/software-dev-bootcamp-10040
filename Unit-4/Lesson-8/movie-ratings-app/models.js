const mongoose = require('mongoose');

//Add schema and model for Movie
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        default: 0
    },
});

const Movie = mongoose.model('Movie', movieSchema);

//Add schema and model for Review
const reviewSchema = new mongoose.Schema({
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    reviewer: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
});

const Review = mongoose.model('Review', reviewSchema);

//Export the models for Movie and Review
module.exports = { Movie, Review };


