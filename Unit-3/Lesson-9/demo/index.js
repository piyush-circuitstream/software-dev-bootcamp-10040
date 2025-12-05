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

/////////////// Advanced Queries ///////////////
async function queryBreakfasts() {
    // //Query to include/exclude fields
    // const result = await Breakfast.find({}, 'eggs bacon -_id'); 
    // const result = await Breakfast.find({}, { _id: 0, eggs: 1, bacon: 1 });
    // const result = await Breakfast.find({}, { _id: false, eggs: true, bacon: true });
    // const result = await Breakfast.find().select('eggs bacon -_id');

    //Filtering 
    // const result = await Breakfast.find({ eggs: 11 });
    // const result = await Breakfast.find({ eggs: { $gt: 8 } }); //$gte, $lt, $lte, $ne

    // Sorting
    // const result = await Breakfast.find().sort({ eggs: 1, bacon: -1 }); // 1 for ascending, -1 for descending

    // Pagination
    // const result = await Breakfast.find().limit(4).skip(2);

    // Query Builders
    const result = await Breakfast.find()
        .where('eggs').gt(8)
        .where('bacon').lt(10)
        .sort('eggs')
        .select('eggs bacon -_id');

    console.log(result)
}
queryBreakfasts();