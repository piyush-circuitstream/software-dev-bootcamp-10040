const mongoose = require('mongoose');
const express = require('express');
const asyncHandler = require('express-async-handler');
const Pet = require('./models/pet');

const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Error while connecting to DB: ", err));

// Get all pets
app.get('/pets', asyncHandler(async (req, res) => {
    const pets = await Pet.find();
    res.status(200).json(pets);
}));

// Create a new pet
app.post('/pets', asyncHandler(async (req, res) => {
    const { name, breed, age, color, vaccinated } = req.body;

    // const newPet = new Pet(petData);
    // const savedPet = await newPet.save();

    const savedPet = await Pet.create({ name, breed, age, color, vaccinated });
    res.status(201).json({ message: "Pet created successfully", pet: savedPet });
}));

// Update a pet by ID
// Delete a pet by ID

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});