angular.module('userProfiles').service('mainService', function() {
  $scope.getUsers = function() {
      $scope.users = mainService.getUsers();
  }
  $scope.getUsers();
  $scope.toggleFavorite = mainService.toggleFavorite;
})
  var data =
  [
    {
        "id": 0,
        "first_name": "george",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
    },
    {
        "id": 1,
        "first_name": "lucille",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
    },
    {
        "id": 2,
        "first_name": "oscar",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
    }
  ]
});

// Write a function in your service called "getUsers" that will return all of our user data to the controller.
//Remember: functions made in a service can be tied to the service object via the "this" keyword.
