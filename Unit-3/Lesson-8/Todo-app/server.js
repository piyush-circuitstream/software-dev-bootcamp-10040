const express = require('express');
const mongoose = require('mongoose');
const { Todo } = require('./models/todo');

const app = express();
const PORT = 3000;

// MIDDLEWARES
app.use(express.json()); // NOT NEEDED for GET AND DELETE REQUESTS, BUT NEEDED for POST, PATCH AND PUT REQUESTS
app.use(express.static('public'));

// CONNECT TO MONGODB
mongoose.connect('mongodb://localhost:27017/todo-app')
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });

// Serve ther static content from backend when someone accesses the root route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/views/index.html');
});

// Fetch All Todos
app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong! Please try again later.', error: err.message });
    }
});

// Create a New Todo
app.post('/todos', async (req, res) => {
    try {
        const { title, description } = req.body;
        const newTodo = new Todo({ title, description });
        const result = await newTodo.save();
        res.status(201).json({ message: 'New todo item created successfully!', todo: result });
    } catch (err) {
        res.status(500).json({ message: 'Error while creating a new todo item. Please try again later.', error: err.message });
    }
});

// Update a Todo (Check or Uncheck)
app.put('/todos/:id', async (req, res) => {
    try {
        const todoId = req.params.id;
        const { title, description, completed } = req.body;
        const toBeUpdated = await Todo.findById(todoId);
        if (toBeUpdated) {
            if (title != undefined) {
                toBeUpdated.title = title;
            }
            if (description != undefined) {
                toBeUpdated.description = description;
            }
            if (completed != undefined) {
                toBeUpdated.completed = completed;
            }

            toBeUpdated.updatedAt = Date.now();

            await toBeUpdated.save();
            res.status(200).json({ message: 'Todo item updated successfully!', todo: toBeUpdated });
        } else {
            res.status(404).json({ message: 'Todo item not found. Please try again with other item.' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error while updating the todo item. Please try again later.', error: err.message });
    }
});

// Delete a Todo
app.delete('/todos/:id', async (req, res) => {
    try {
        const todoId = req.params.id;
        const toBeDeleted = await Todo.findById(todoId);
        if (toBeDeleted) {
            await Todo.deleteOne({ _id: todoId });
            res.status(200).json({ message: 'Todo item deleted successfully!' });
        } else {
            res.status(404).json({ message: 'Todo item not found. Please try again with other item.' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error while deleting the todo item. Please try again later.', error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});