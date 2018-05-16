var km = angular.module("km", ["ngRoute", "ngAnimate"]);

km.config(["$routeProvider", "$locationProvider",
	function ($routeProvider, $locationProvider) {
		var getTemplate = function (src) {
			var url = src + "?v=" + settings.version;
			return url;
		};

		$routeProvider.when("/",
			{
				templateUrl: getTemplate("/templates/home.html"),
				controller: "HomeController",
			});

		$routeProvider.when("/addition/",
			{
				templateUrl: getTemplate("/templates/addition.html"),
				controller: "AdditionController",
			});

		$routeProvider.otherwise({
			controller: function () {
				window.location.replace(location.href);
			},
			template: "<div></div>"
		});
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});

	}
]);

km.run(["$rootScope", "$location", "homeService", function ($rootScope, $location, homeService) {
	
	$rootScope.getTemplate = function (src) {
		var url = src + "?v=" + settings.version;
		return url;
	};
}]);

km.factory("homeService", ["$http", "$q", "$window", "$location", "$interval", "$rootScope", "$templateCache", function ($http, $q, $window, $location, $interval, $rootScope, $templateCache) {


	var resolve = function (requestPromise) {
		return requestPromise
			.then(function (response) {
				return response.data;
			});
	};

	return {
		get : function (route, params) {
			return resolve($http({
				method: 'GET',
				url: '/api/' + route,
				params: params,
			}));
		},
		post : function (route, data) {
			return resolve($http({
				method: 'POST',
				url: '/api/' + route,
				data: JSON.stringify(data)
			}));
		}
	};
}]);

km.controller("HomeController", ["$scope", "homeService", function ($scope, homeService) {


}]);

km.controller("AdditionController", ["$scope", "homeService", function ($scope, homeService) {

	$scope.equation = null;
	$scope.busy = false;
	$scope.get = function () {
		if ($scope.busy) {
			return;
		};
		$scope.busy = true;
		homeService.get('Addition').then(function (response) {
			$scope.busy = false;
			$scope.checked = false;
			$scope.equation = response;
			$scope.equation.guess = null;

		}, function () {
			$scope.busy = false;
		});
	};

	$scope.check = function () {
		$scope.checked = true;
	};

	$scope.get();
}]);