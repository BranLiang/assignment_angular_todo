TodoApp.controller('TodoCtrl', ['$scope', 'todoService', function ($scope, todoService) {

	$scope.items = todoService.getItems();

	$scope.hide = false;

	$scope.HideText = function () {
		return $scope.hide ? "Show All" : "Hide complete"
	};

	$scope.toggleHide = function () {
		$scope.hide = !$scope.hide;
	};

	$scope.createTodo = function () {
		todoService.createItem($scope.taskParams)
		$scope.taskParams = {};
	};

	$scope.deleteTask = function (item) {
		console.log(item);
		todoService.deleteItem(item);
	};

	$scope.clearComplete = function () {
		todoService.clearComplete();
	};

}]);
