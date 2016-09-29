TodoApp.directive('todoItem', function () {
	return {
		templateUrl: "javascript/directive/todoItem.html",
		strict: "A",
		scope: {
			item: "=",
			deleteTask: "&",
		},
		link: function () {
			console.log(deleteTask);
		}
	}
});
