var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   
   when('/posts', {
      templateUrl: 'partials/post_list.html', controller: 'postController'
   }).
   
   when('/newPost', {
      templateUrl: 'partials/new_post.html', controller: 'newPostController'
   }).

   when('/deletePost', {
      templateUrl: 'partials/delete_post.html', controller: 'deletePostController'
   }).
   
   otherwise({
      redirectTo: '/posts'
   });
	
}]);




