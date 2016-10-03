var tinApp = angular.module("tinApp", ["ngRoute"]);

tinApp.config(function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "templates/home.html",
			controller: "HomeController"
		})
		.when("/about", {
			templateUrl: "templates/about.html",
			controller: "AboutController"
		})
		.when("/contact", {
			templateUrl: "templates/contact.html",
			controller: "ContactController"
		})
		.when("/pricing", {
			templateUrl: "templates/pricing.html",
			controller: "PricingController"
		})
		.when("/upload", {
			templateUrl: "templates/upload.html",
			controller: "UploadController"
		})
		.otherwise({ redirectTo: "/" });
});