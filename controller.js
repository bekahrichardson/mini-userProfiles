angular.module('userProfiles').controller('MainController', function($scope){

  $scope.getUsers = function() {
      $scope.users = mainService.getUsers();
  }
  $scope.getUsers();
  $scope.toggleFavorite = mainService.toggleFavorite;
})
   
