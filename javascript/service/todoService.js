TodoApp.factory('todoService', function () {
	var stub = {};

	var items = [];

	stub.getItems = function () {
		return items;
	};

	stub.createItem = function (params) {
		var item = {
			text: params.text,
			dueDate: params.date,
			complete: false,
		};
		items.push(item);
	};

	stub.deleteItem = function (item) {
		var index = items.indexOf(item);
		items.splice(index, 1);
	};

	stub.clearComplete = function () {
		for (var i = 0; i < items.length; i++) {
			if (items[i].complete === true) {
				stub.deleteItem(items[i]);
			};
		};
	};

	return stub;
});
