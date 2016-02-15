'use_strict'

function getDate(filter) {
  return filter(new Date(), "dd.MM.yyyy HH:mm:ss");
}

mainApp.controller("postController", function($scope, $http, dateFilter, URL) {
 var url = URL.postsURL;

  $http.get(url).success(function(response) {
    $scope.posts = response;
 });

  $scope.submit_comment = function() {
    var url = URL.submitCommentURL;

    var new_comment = {
       "text" : this.text,
       "author" : this.author,
       "created_at" : getDate(dateFilter),
       "post_id": this.post.id 
    }
    
    alert("Your comment is submitted! " + new_comment.text + " at post #" + this.post.id);

    $http({
        url: comment_url,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: new_comment
    });
  }

  $scope.delete_comment = function(postId) {
    var url = URL.deleteCommentURL;

    alert("comment deleted #" + postId);
  }

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
      var res = $http.post(url, new_post);

      res.success(function(data, status, headers, config){
        alert("Successful submission!");
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