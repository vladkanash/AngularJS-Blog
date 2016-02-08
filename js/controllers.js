mainApp.controller("postController", function($scope, $http, URL) {
   var url = URL.postsURL;

   $http.get(url).success( function(response) {
      $scope.posts = response;
   });
});


mainApp.controller("newPostController", function($scope, $http, $interval, dateFilter, URL) {
   var url = URL.submitURL;
   var formError = true;

   $scope.date = getDate();
   $scope.success = false;

   function getDate() {
      return dateFilter(new Date(), "dd.MM.yyyy HH:m:ss");
   }

   //temp
   function getNewId() {
      return 42;
   }

   timeoutId = $interval(function() {
      $scope.date = getDate();
   }, 1000);

   $scope.submit = function() {



      var new_post = {
         "id" : getNewId(),
         "subject" : $scope.subject,
         "text" : $scope.text,
         "author" : $scope.author,
         "created_at" : getDate(), 
      }

      alert("Your post is submitted!" + new_post.text);
      $scope.success = true;
      $http({
          url: url,
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          data: new_post
      });
   }

});


mainApp.controller("deletePostController", function($scope, $http, $routeParams, URL) {
   var url = URL.deleteURL + $routeParams.postId;
   
   alert("post " + $routeParams.postId + " deleted!")

   $http.get(url).success( function(response) {
      alert("post deleted!")
   });
});