'use_strict'

function getDate(filter) {
  return filter(new Date(), "dd.MM.yyyy HH:m:ss");
}


mainApp.controller("postController", function($scope, $http, dateFilter, URL) {
 var url = URL.postsURL;
 var comment_url = URL.submitCommentURL;

 $http.get(url).success( function(response) {
    $scope.posts = response;


 $scope.submit = function() {

    var new_comment = {
       "text" : $scope.text,
       "author" : $scope.author,
       "created_at" : getDate(dateFilter) 
    }
    
    alert("Your comment is submitted! " + new_comment.text);

    $http({
        url: url,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: new_comment
    });
  }
 });
});


mainApp.controller("newPostController", function($scope, $http, $interval, dateFilter, URL) {
   var url = URL.submitURL;
   var formError = true;

   $scope.date = getDate(dateFilter);
   $scope.success = false;

   timeoutId = $interval(function() {
      $scope.date = getDate(dateFilter);
   }, 1000);

   $scope.submit = function() {

      var new_post = {
         "subject" : $scope.subject,
         "text" : $scope.text,
         "author" : $scope.author,
         "created_at" : getDate(dateFilter), 
      }

      alert("Your post is submitted! " + new_post.text);
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