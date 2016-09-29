TodoApp.filter('hideFilter', function () {
	return function (items, hideCompleted) {
		if (hideCompleted) {
			var collection = [];
			for (var i = 0; i < items.length; i++) {
				if (!items[i].complete) {
					collection.push(items[i]);
				};
			};
			return collection;
		} else {
			return items;
		};
	};
});
