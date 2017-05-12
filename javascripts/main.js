var app = angular.module("CalApp", []);

app.controller("ItemCtrl", ($scope) => {
	$scope.dog = "Woof!";
	$scope.showListView = false;
	$scope.items = [
        {
          id: 0,
          food: "Tator Tots",
          image:"https://media.giphy.com/media/QkC7uMhqBjVi8/giphy.gif",
          isCompleted: true
        },
        {
          id: 1,
          food: "String Beans",
          image: "http://www.bathroomreader.com/wp-content/uploads/2014/03/Walken-Cowbell_DS.jpg",
          isCompleted: false
        },
        {
          id: 2,
          food: "Snickers",
          isCompleted: false
        }
      ];

	$scope.newItem = () => {
		$scope.showListView = false;
	};

	$scope.callBell = () => {
		$scope.showListView = !$scope.showListView;
	};
});
