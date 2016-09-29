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
		// var item = {
		// 	text: $scope.taskParams.text,
		// 	dueDate: $scope.taskParams.date,
		// 	complete: false
		// };
		// $scope.items.push(item);
		// console.log($scope.items);
		// $scope.taskParams = {};
		todoService.createItem($scope.taskParams)
		$scope.taskParams = {};
	};

	$scope.deleteTask = function (item) {
		// var index = $scope.items.indexOf(item);
		// $scope.items.splice(index, 1);
		console.log(item);
		todoService.deleteItem(item);
	};

	$scope.clearComplete = function () {
		// for (var i = 0; i < $scope.items.length; i++) {
		// 	if ($scope.items[i].complete === true) {
		// 		$scope.deleteTask($scope.items[i]);
		// 	};
		// };
		todoService.clearComplete();
	};

}]);
