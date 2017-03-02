var mainApp = angular.module("mainApp", []);
mainApp.controller('studentController', function($scope) {
  $scope.reset = function() {
    $scope.firstName = "Herny";
    $scope.lastName = "Loser";
    $scope.email = "henry@mail.com";
  }
  $scope.reset();
  $scope.submit=function(){
    alert("Thank You");
    $scope.reset();
  }
});