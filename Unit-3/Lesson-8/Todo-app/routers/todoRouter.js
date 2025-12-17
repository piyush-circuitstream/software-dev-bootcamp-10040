const express = require('express');
const router = express.Router();
const { Todo } = require('../models/models');

// Fetch All Todos
router.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find({
            user: req.user.id
        });
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong! Please try again later.', error: err.message });
    }
});

// Create a New Todo
router.post('/todos', async (req, res) => {
    try {
        const { title, description } = req.body;
        const newTodo = new Todo({ title, description, user: req.user.id });
        const result = await newTodo.save();
        res.status(201).json({ message: 'New todo item created successfully!', todo: result });
    } catch (err) {
        res.status(500).json({ message: 'Error while creating a new todo item. Please try again later.', error: err.message });
    }
});

// Update a Todo (Check or Uncheck)
router.put('/todos/:id', async (req, res) => {
    try {
        const todoId = req.params.id;
        const { title, description, completed } = req.body;
        const toBeUpdated = await Todo.findById({ _id: todoId, user: req.user.id });
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
router.delete('/todos/:id', async (req, res) => {
    try {
        const todoId = req.params.id;
        const toBeDeleted = await Todo.findById(todoId);
        if (toBeDeleted) {
            await Todo.deleteOne({ _id: todoId, user: req.user.id });
            res.status(200).json({ message: 'Todo item deleted successfully!' });
        } else {
            res.status(404).json({ message: 'Todo item not found. Please try again with other item.' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error while deleting the todo item. Please try again later.', error: err.message });
    }
});

module.exports = router;