tinApp.controller("HomeController", function($scope) {
	$scope.title = "Type It Now";
	$scope.subTitle = "Accurate and Speedy Transcription, Direct To You"

	$scope.hoverIn = function() {
		this.hoverComputer = true;
	};
	$scope.hoverOut = function() {
		this.hoverComputer = false;
	};
});

tinApp.controller("AboutController", function($scope) {

});

tinApp.controller("ContactController", function($scope) {

});

tinApp.controller("PricingController", function($scope) {

});

tinApp.controller("UploadController", function($scope) {

});