'use strict';

var Todo = require('./models/todo');

var todos = [
	'Feed Dog',
	'Walk Dog',
	'Pet Dog'
];

todos.forEach(function (t, index) {
  Todo.find({ 'name': t }, function(err, todos) {
  	if (!err && !todos.length) {
      Todo.create({ completed: false, name: t });
  	}
  });
});