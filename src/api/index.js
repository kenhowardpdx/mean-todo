'use strict';

var express = require('express');
var Todo = require('../models/todo');

var apiRouter = express.Router();

apiRouter.get('/todos', function(req, res) {
	Todo.find({}, function(err, todos) {
		if (err) {
			res.status(500).json({ message: err.message });
		} else {
			res.json({ todos: todos });
		}
	});
});

apiRouter.post('/todos', function(req, res) {
	var todo = req.body;
	if (!todo) {
		res.status(422).json({ code: 422, message: 'Unprocessable Entity' });
	} else {
		Todo.create(todo, function (err, todo) {
			if (err) {
				res.status(500).json({ message: err.message });
			} else {
				res.json({ todo: todo, message: 'Created Todo' });
			}
		});
	}
});

apiRouter.put('/todos/:id', function(req, res) {
	var todo = req.body;
    var todoId = req.params.id;
	if (!todo || (todo && todo._id !== todoId)) {
		res.status(422).json({ code: 422, message: 'Unprocessable Entity' });
	} else {
		Todo.findByIdAndUpdate(todoId, todo, {new: true}, function (err, todo) {
			if (err) {
				res.status(500).json({ message: err.message });
			} else {
				res.json({ todo: todo, message: 'Updated Todo' });
			}
		});
	}
});

apiRouter.delete('/todos/:id', function (req, res) {
    var todoId = req.params.id;
    Todo.findByIdAndRemove(todoId, function (err, result) {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.json({ message: 'Deleted Todo' });
        }
    });
});

module.exports = apiRouter;