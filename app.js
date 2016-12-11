//ify --- no local variable bleeds into global scope

(function(){
'use strict';

angular.module("myFirstApp",[])
.controller("myFirstController",function($scope){

  $scope.name = 'Raghav';

  $scope.sayHello = function(){
    return 'Hello Coursera';

  }

});
})();
