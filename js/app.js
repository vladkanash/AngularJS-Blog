'use_strict'

var mainApp = angular.module("mainApp", ['ngRoute']);

angular.module("mainApp").constant('URL', {
   "postsURL" : "storage.json",
   "submitURL" : "backend/addPost",
   "deleteURL" : "backend/deletePost",
   "submitCommentURL": "backend/addComment",
   "deleteCommentURL": "backend/deleteComment"
});

mainApp.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   
   when('/posts', {
      templateUrl: 'partials/post_list.html', controller: 'postController'
   }).
   
   when('/newPost', {
      templateUrl: 'partials/new_post.html', controller: 'newPostController'
   }).

   when('/deletePost/:postId', {
      templateUrl: 'partials/delete_post.html', controller: 'deletePostController'
   }).
   
   otherwise({
      redirectTo: '/posts'
   });
	
}]);




