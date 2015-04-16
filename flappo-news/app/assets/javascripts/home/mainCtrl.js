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
    comments: [
      {author: 'tim', body: 'suweet post mate', upvotes: 0},
      {author: 'jono' body: 'noyce!', upvotes: 3}
    ]
  });

  $scope.title = '';
  $scope.link = '';  
};




$scope.incrementUpvotes = function(post) {
  post.upvotes += 1;
};


}]);
