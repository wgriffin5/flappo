angular.module('flappoNews', [])
.controller('MainCtrl', [

'$scope',
function($scope) {
  // $scope.test = 'Buenos dias mundo';



  $scope.posts = [

    {title: 'post 1', upvotes: 3},
    {title: 'post 2', upvotes: 2},
    {title: 'post 3', upvotes: 10},
    {title: 'post 4', upvotes: 5},
    {title: 'post 5', upvotes: 14}
    
  ];





$scope.addPost = function(){
  if(!$scope.title || $scope.title === '') { return; }
  $scope.posts.push({title: $scope.title, upvotes: 0});
  $scope.title = '';
};



}]);