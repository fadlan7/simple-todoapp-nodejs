const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/todo');

//Get all todos
router.get('/', TodoController.getTodos);

//Create a todo
router.post('/todo', TodoController.createTodo);

//Update a todo
router.put('/todos/:todoId', TodoController.updateTodo);

//Delete a todo
router.delete('/todos/:todoId', TodoController.deleteTodo);

module.exports = router;
