TodoApp.controller('TodoCtrl', ['$scope', function ($scope) {

	$scope.items = [];

	$scope.createTodo = function () {
		var item = {
			text: $scope.taskParams.text,
			dueDate: $scope.taskParams.date
		};
		$scope.items.push(item);
		console.log($scope.items);
		$scope.taskParams = {};
	};

	$scope.deleteTask = function (item) {
		var index = $scope.items.indexOf(item);
		$scope.items.splice(index, 1);
	};

	$scope.clearComplete = function () {
		for (var i = 0; i < $scope.items.length; i++) {
			if ($scope.items[i].complete === true) {
				$scope.deleteTask($scope.items[i]);
			};
		};
	};

}]);
