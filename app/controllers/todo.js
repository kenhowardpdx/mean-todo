'use strict';

function TodoCtrl ($scope, dataService) {
  $scope.deleteTodo = function(todo, index) {
    $scope.todos.splice(index, 1);
    dataService.deleteTodo(todo);
  };
  
  $scope.saveTodos = function() {
    var filteredTodos = $scope.todos.filter(function(todo){
      if(todo.edited) {
        return todo
      };
    })
    dataService.saveTodos(filteredTodos).finally(resetTodoState);
  };
  
  function resetTodoState() {
      $scope.todos.forEach(function (todo) {
         todo.edited = false; 
      });
  }
};

module.exports = TodoCtrl;