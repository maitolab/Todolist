angular.module('todoApp',[])
.controller('todoController', function($scope,$window) {
	$scope.todoList = [
	{text:'Shopping', selected:true},
	{text:'Practice', selected:false},
	{text:'Sleep', selected:false},
	{text:'Exercise', selected:false}];

	$scope.addTodo = function() {
		if($scope.newTodoText == null || $scope.newTodoText === ""){
			$window.alert("Please enter your todo");
			return;
		}
		$scope.todoList.push({text:$scope.newTodoText, selected:false});
	};
	$scope.selectAllTodo = function() {
		$scope.todoList.forEach(function(todo){
			todo.selected = true;
		});
	};

	$scope.deleteTodo = function() {
		var isConfirmed = confirm("Are you sure to delete selected item ?");
		if (!isConfirmed) {
			return;
		}
		var removedIndex = [];
		for(var i = 0; i < $scope.todoList.length; i++) {
			if($scope.todoList[i].selected === true){
				removedIndex.push(i);
			}
		}
		for (var i = removedIndex.length - 1; i >= 0; i--){
			$scope.todoList.splice(removedIndex[i],1);
		}
	};

});