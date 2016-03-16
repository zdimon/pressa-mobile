angular.module('starter.controllers', [])

.controller('CategoryCtrl', function($scope, Catalog, Auth, $ionicPopover, $location, $window, $state, New) {

    

  $ionicPopover.fromTemplateUrl('templates/popup-categories.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });

  $scope.selectCategory = function(category_id){
    $scope.popover.hide();
    $state.go('tab.category-detail', {catId: category_id}, {location: 'replace'});
  };

  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };


   console.log('CategoryCtrl');

})

.controller('CategoryDetailCtrl', function($scope, $stateParams, Catalog, $ionicPopover, $location, $window, $state) {
  console.log('cat detail');
  $scope.category = Catalog.get({catId:$stateParams.catId});

  $ionicPopover.fromTemplateUrl('templates/popup-categories.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });

  $scope.selectCategory = function(category_id){
    $scope.popover.hide();
    $state.go('tab.category-detail', {catId: category_id}, {location: 'replace'});
  };

  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };

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


.controller('LoginCtrl', function($scope, $stateParams, $ionicModal, $rootScope) {
 
  $ionicModal.fromTemplateUrl('templates/login-form.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  });

  $scope.openModal = function() {
    $scope.modal.show()
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

  $scope.submit = function() {
     $rootScope.is_auth = 'true';
     $scope.modal.hide();
  }



})

.controller('CarouselController', function($scope) {

    var mySwiper = new Swiper('.swiper-container', {
        speed: 400,
        spaceBetween: 100,
        slidesPerView: 3,
        centeredSlides: true
    }); 
   
})



.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
