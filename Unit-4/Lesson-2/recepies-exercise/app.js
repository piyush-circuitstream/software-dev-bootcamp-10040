const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');

const recipes = [
    { name: 'Pasta Carbonara', ingredients: ['Spaghetti', 'Eggs', 'Parmesan', 'Bacon'] },
    { name: 'Vegetarian Stir Fry', ingredients: ['Tofu', 'Broccoli', 'Carrots', 'Soy Sauce'] },
    { name: 'Chicken Alfredo', ingredients: ['Chicken', 'Fettuccine', 'Cream', 'Garlic'] },
    { name: 'Caprese Salad', ingredients: ['Tomatoes', 'Mozzarella', 'Basil', 'Balsamic'] },
    { name: 'Chocolate Chip Cookies', ingredients: ['Flour', 'Butter', 'Sugar', 'Chocolate Chips'] }
];

app.get('/', (req, res) => {
    res.render('recipes', { recipes }); // recepes in first argument is ejs filename
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
