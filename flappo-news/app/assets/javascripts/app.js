angular.module('flappoNews', ['ui.router', 'templates'])

.config([ 
'$stateProvider',
'@urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html', 
      controller: 'MainCtrl'
      });
    })

  $urlRouterProvider.otherwise('home');


  .state('posts', {
    url: '/posts/{id}',
    templateUrl: '/posts/_posts.html',
    controller: 'PostsCtrl'
  });

}])




.controller('PostsCtrl', [
'$scope',
'$stateParams',
'posts',
$scope.post = posts.posts[$stateParams.id];
function($scope, $stateParams, posts){

}


$scope.addComment = function(){
  if($scope.body === '') { return; }
  $scope.post.comments.push({
    body: $scope.body,
    author: 'user',
    upvotes: 0
  });
  $scope.body = '';
};



]);



































