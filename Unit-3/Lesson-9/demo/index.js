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
// queryBreakfasts();

// Embedding Document
async function createOrder() {
    const orderOne = new Order({
        orderId: 'ORD12347',
        customer: {
            name: 'John Doe 3',
            email: 'john.doe3@gmail.com',
            phone: '1234567890'
        },
        items: [
            {
                itemId: 'ITEM001',
                name: 'White Sauce Pasta',
                quantity: 1,
                price: 12.99
            },
            {
                itemId: 'ITEM002',
                name: 'Garlic Bread',
                quantity: 4,
                price: 5.99
            }
        ],
        paymentMethod: 'cash',
        totalPrice: 35.95,
        orderStatus: 'delivered'
    });

    await orderOne.save();
}

//Referening (populated) Document
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true }
});

// Define the schema for an 'Order' document, referencing the 'User' model
const orderSchema = new mongoose.Schema({
    totalPrice: { type: Number, required: true },
    status: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Reference to User
});

// Create the 'User' and 'Order' models
const User = mongoose.model('User', userSchema);
const Order = mongoose.model('Order', orderSchema);

// Example of creating a user and an order that references the user
async function createOrder() {
    const user = new User({
        name: 'John Doe',
        email: 'john.doe@example.com'
    });

    await user.save();

    const order = new Order({
        totalPrice: 200,
        status: 'completed',
        user: user._id // Referencing the User by its ObjectId
    });

    await order.save();

    // Populate the 'user' field in the order to get the full user document
    const populatedOrder = await Order.findOne({ _id: order._id }).populate('user');
    console.log('Populated Order:', populatedOrder);
}

