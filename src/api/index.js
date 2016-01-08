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

// TODO: Add PUT Route to update existing entries

// TODO: Add DELETE Route to remove existing entries

module.exports = apiRouter;