mainApp.controller("postController", function($scope,$http) {
   var url = "storage.json";

   $http.get(url).success( function(response) {
      $scope.posts = response;
   });
});


mainApp.controller("newPostController", function($scope,$http) {
   var url = "storage.json";

   $http.get(url).success( function(response) {
      $scope.posts = response;
   });
});


mainApp.controller("deletePostController", function($scope,$http) {
   var url = "storage.json";

   $http.get(url).success( function(response) {
      $scope.posts = response;
   });
});