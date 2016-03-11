angular.module('starter.controllers', [])

.controller('CategoryCtrl', function($scope, Catalog) {

   
   $scope.categories = Catalog.query(); 
   console.log('CategoryCtrl');

})

.controller('CategoryDetailCtrl', function($scope, $stateParams, Catalog) {
  console.log('cat detail');
  $scope.category = Catalog.get({catId:$stateParams.catId});
})


.controller('CategoryDetailJournalCtrl', function($scope, $stateParams, Journal) {
 console.log('CategoryDetailJournalCtrl');
 $scope.journal = Journal.get({id:$stateParams.id});
})


.controller('CategoryDetailIssueCtrl', function($scope, $stateParams, Issue) {
 console.log('CategoryDetailIssueCtrl');
 $scope.issue = Issue.get({id:$stateParams.id});
})


.controller('TopCtrl', function($scope, Top10) {

  $scope.top = Top10.query();
 
})

.controller('TopDetailCtrl', function($scope, $stateParams, Top10) {
 
  $scope.top = Top10.get({topId:$stateParams.topId});
})


.controller('ArticleCtrl', function($scope, Article) {

  $scope.articles = Article.query();
 
})

.controller('ArticleDetailCtrl', function($scope, $stateParams, Article) {
 
  $scope.article = Article.get({id:$stateParams.id});
})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
