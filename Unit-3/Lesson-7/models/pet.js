const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    breed: {
        type: String,
    },
    age: {
        type: Number,
        min: 0
    },
    color: {
        type: String,
    },
    vaccinated: {
        type: Boolean,
        default: false,
        // required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

//Create model
const Pet = mongoose.model('Pet', petSchema);

// Export the model for further use
module.exports = Pet;