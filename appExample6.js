(function(){
  'use strict';

angular.module("NameCalculator",[]) 
.controller("NameCalculatorController",function($scope){
      $scope.name = "Raghav";
      $scope.totolValue = 0;

      $scope.displayNumeric = function(){
        var totalNameValue = calculateNumericForString($scope.name);
        $scope.totolValue = totalNameValue;
      }

      var calculateNumericForString = function(string){
        var totalStringValue = 0;
        for(var i = 0;i<string.length;i++)
        {
          totalStringValue += string.charCodeAt(i);
        }
        return totalStringValue;
      }
});

})();
