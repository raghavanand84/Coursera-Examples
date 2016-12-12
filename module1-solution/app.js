(function(){
	'use strict';

	angular.module("moduleOneAssignment",[])

	.controller("moduleOneAssignmentController",moduleOneAssignmentController);

	moduleOneAssignmentController.$inject = ['$scope'];

	function moduleOneAssignmentController($scope){
		$scope.lunchItems = "";
		$scope.appMessage = "";

		$scope.checkNumberOfItems = function(){
			var numberOfItems = $scope.lunchItems.split(',');

			if($scope.lunchItems === ""){
				$scope.appMessage = "Please enter data first";
			}
			else if(numberOfItems.length > 0 && numberOfItems.length <= 3){
				$scope.appMessage = "Enjoy!";
			}
			else{
				$scope.appMessage = "Too much!";
			}
		}
	}
})();
