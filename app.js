angular.module('flappoNews', ['ui.router'])

.config([ 
'$stateProvider',
'@urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html', 
      controller: 'MainCtrl'
      });
    })

  $urlRouterProvider.otherwise('home');


  .state('posts', {
    url: '/posts/{id}',
    templateUrl: '/posts.html',
    controller: 'PostsCtrl'
  });

}])




  .factory('posts', [function(){

    var o = {

      posts: []

    };
    return o;
  }])


.controller('MainCtrl', [

'$scope',
'posts',
function($scope, posts) {
  // $scope.test = 'Buenos dias mundo';



  $scope.posts = posts.posts;


  // [

  //   {title: 'post 1', upvotes: 3},
  //   {title: 'post 2', upvotes: 2},
  //   {title: 'post 3', upvotes: 10},
  //   {title: 'post 4', upvotes: 5},
  //   {title: 'post 5', upvotes: 14}
    
  // ];
}




$scope.addPost = function(){
  if(!$scope.title || $scope.title === '') { return; }
  $scope.posts.push({

    title: $scope.title, 
    link: $scope.link,
    upvotes: 0
  });

  $scope.title = '';
  $scope.link = '';  
};




$scope.incrementUpvotes = function(post) {
  post.upvotes += 1;
};


}]);



























