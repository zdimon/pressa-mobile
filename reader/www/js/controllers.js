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

 $scope.journal = Journal.get({id:$stateParams.id});
})


.controller('CategoryDetailIssueCtrl', function($scope, $rootScope, $stateParams, Issue, $state) {

 $scope.issue = Issue.get({id:$stateParams.id});

 $scope.readPage = function(id){
       $state.go('tab.page', {id: id}, {location: 'replace'});
 }

})


.controller('ShowPageCtrl', function($scope, $rootScope, $stateParams, Page, $ionicGesture ) {

    /*
    element = angular.element(document.querySelector('#eventCiao'));
    //$ionicGesture.on('on-tap', function(){ alert('sss'); }, element);
       $scope.zoom = 300;
       $ionicGesture.on('pinch', function(e)
        {
            $scope.zoom = e.gesture.scale;
            $scope.$apply();
            console.log(e.gesture.scale)
        },element);



     */

     Page.get($stateParams.id, window.localStorage['token'], function(result){
        $scope.page = result;
    });


    $rootScope.is_read = 'true';
    $scope.page_url = server_url+'/'+$stateParams.id+'/'+window.localStorage['token']+'/page'
    $scope.page = $stateParams.id;
    $scope.token = window.localStorage['token'];

 //$scope.page = 'http://pressa.ru/files/issuepage/private/novoe-vremya--novoe-vremya---/2016/n27-2016/high/2--3-high.jpg';


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


.controller('LoginCtrl', function($scope, $stateParams, $ionicModal, $rootScope, Auth, $ionicPopup, $timeout) {

  $scope.data = {};




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

  $scope.reg = function() {
Auth.registration('loglog','pass','email',function(rezult){
    });

  }

  $scope.submit = function() {


     Auth.login($scope.data.username,$scope.data.password,function(rezult){
        console.log(rezult);
        if(rezult.status==0){
            $rootScope.is_auth = 'true';
            window.localStorage['token'] = rezult.token;
            window.localStorage['login'] = $scope.data.username;
            window.localStorage['password'] = $scope.data.password;
            $scope.modal.hide();
            $rootScope.profile = rezult.profile;
            console.log($scope.profile);
        }
        var myPopup = $ionicPopup.show({
            template: '<h4> '+rezult.message+' </h4>',
            title: 'Вход',
            scope: $scope,
          });

          $timeout(function() {
             myPopup.close(); //close the popup after 3 seconds for some reason
          }, 3000);

    })


  }



})

.controller('CarouselNewCtrl', function($scope, $rootScope, $state, $timeout) {

    $scope.swiper = {}; //initialize
    $scope.onReadySwiper = function (swiper)
    {

      $scope.swiper = swiper; //update when the swiper is ready
    };

     $timeout(function() //give the data a moment to propagate
       {
         $scope.swiper.update(); //now run the sizing update - can also use just .update()
         $scope.swiper.slideTo(0); //show the slider from the beginning
       }, 2000);


    $scope.readIssue = function(id){
        $state.go('tab.issue', {id: id}, {location: 'replace'});
    };

})


.controller('SearchRezCtrl', function($scope, $rootScope, $state, Search, $timeout) {

    alert('sss');

})


.controller('SearchCtrl', function($scope, $rootScope, $state, Search, $timeout) {

    $scope.search = function(){
        $state.go('search');
        tag = angular.element(document.querySelector('#search_input')).val();
        Search.go(tag,function(result){

            $scope.search_result = result;
            $timeout(function() {
              $state.go('search');
            }, 0);
            //$state.go('tab.search');

        });

    }

})




.controller('CarouselPopularyCtrl', function($scope, $rootScope, $state, $timeout, Popular) {

    $scope.swiper_j = {};
    $scope.swiper_m = {};

    Popular.get(function(rezult){
        $scope.popular = rezult;
    })


    $scope.onReadySwiper_j = function (swiper)
    {
      $scope.swiper_j = swiper;
    };

    $scope.onReadySwiper_m = function (swiper)
    {
      $scope.swiper_m = swiper;
    };


     $timeout(function()
       {
         $scope.swiper_j.update();
         $scope.swiper_j.slideTo(0);
         $scope.swiper_m.update();
         $scope.swiper_m.slideTo(0);

       }, 2000);


    $scope.readIssue = function(id){
        $state.go('tab.issue', {id: id}, {location: 'replace'});
    };

})






.directive('imageonload', function($rootScope) {
return {
restrict: 'A',
link: function(scope, element, attrs) {
element.bind('load', function() {
$rootScope.swiper.updateSlidesSize();
});
}
};
})

.controller('CollectionCtrl', function($scope,$rootScope,$state, $location, Collection) {

        Collection.get_list(window.localStorage['token'],function(result){
                console.log(result);
                $scope.journals = result.journals;
        });

})


.controller('AccountCtrl', function($scope,$rootScope,$state, $location, Auth, $ionicPopup, $timeout) {

    $scope.changeCategories = function(){
        data = {'categories':[], 'token': window.localStorage['token']};
        for (var i = 0; i < $rootScope.profile.categories.length; i++) {
           data['categories'].push({
                                    'id':$rootScope.profile.categories[i].id,
                                    'exists': $rootScope.profile.categories[i].exists
                                    });

        }
        Auth.save_user_categories(data,function(result){
            console.log(result);
        });
    };

  $scope.settings = {
    enableFriends: true
  };


  $scope.edit_profile = function(){
    data = {'username': $scope.profile.username, 'password': $scope.profile.password, 'email': $scope.profile.email, 'token': window.localStorage['token']}
    Auth.save_profile(data,function(result){

        var myPopup = $ionicPopup.show({
            template: '<h4> '+result.message+' </h4>',
            title: 'Сохранение профиля',
            scope: $scope,
          });

          $timeout(function() {
             myPopup.close(); //close the popup after 3 seconds for some reason
          }, 2000);


    });

  };

  $scope.logout = function(){

    $rootScope.is_auth = 'false';
     //var url = "http://" + local_config.chat_url + "#/" + $rootScope.currentUserId+'/'+opponent_id;
    //$location.path('/tab/category');
    $state.go('tab.category',null,{location: 'replace'});
  };


});
