const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });

const breakfastSchema = mongoose.Schema({
    eggs: {
        type: Number,
        // required: true,
        // default: 6,
        min: [6, 'Too few eggs'],
        max: 12
    },
    bacon: {
        type: Number,
        required: [true, 'Why no bacon?']
    },
    drink: {
        type: String,
        enum: ['Coffee', 'Tea'],
        required: function () {
            return this.bacon > 3;
        }
    }
});
const Breakfast = mongoose.model('Breakfast', breakfastSchema);

async function createBreakfast() {
    const breakfast = new Breakfast({
        eggs: 7,
        bacon: 2,
        drink: 'Coffee'
    });
    breakfast.save()
        .then(doc => {
            console.log('Breakfast saved:', doc);
        })
        .catch(err => {
            console.error('Error saving breakfast:', err.message);
        });
}
// createBreakfast();