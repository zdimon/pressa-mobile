// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js


if(window.location.href.indexOf("localhost")==-1) {
var server_url = 'http://api.pressa.ru/mobile/test';
} else {
var server_url = 'http://pressa.local/mobile/test';
}



angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ksSwiper', 'ionic-zoom-view'])

.run(function($ionicPlatform, $rootScope, $rootScope, Auth) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    $rootScope.is_auth = 'false';
    $rootScope.new_issues = [];
    //$rootScope.token = 'none';
    window.localStorage['user_id'] = 0;
    if (typeof(window.localStorage['token'])=='undefined') {
        window.localStorage['token'] = 'none';
    }

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }


    $rootScope.HideIfAuth = function(){
        if ($rootScope.is_auth == 'false') {
         return "ng-show";
        } else {
         return "ng-hide";
        }
    }

    $rootScope.ShowIfAuth = function(){
        if ($rootScope.is_auth == 'false') {
         return "ng-hide";
        } else {
         return "ng-show";
        }
    }



    Auth.init(function(rezult){
        
        $rootScope.new_issues = rezult.new_issues; 
        $rootScope.categories = rezult.categories; 
        
     if (typeof(window.localStorage['password'])!='undefined') {
         
         Auth.login(window.localStorage['login'],window.localStorage['password'],function(rezult){
           
            if(rezult.status==0){
                $rootScope.is_auth = 'true';
                window.localStorage['token'] = rezult.token;
                $rootScope.profile = rezult.profile;
                Auth.get_user_categories(rezult.token,function(result){
                    $rootScope.profile.categories = result.categories;
                    console.log($rootScope.profile);
                });
            } 
         });
      }
        
    })

    

  });
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.category', {
    url: '/category',
    views: {
      'tab-category': {
        templateUrl: 'templates/tab-category.html',
        controller: 'CategoryCtrl'
      }
    }
  })

    .state('tab.category-detail', {
      url: '/category/:catId',
      views: {
        'tab-category': {
          templateUrl: 'templates/category-detail.html',
          controller: 'CategoryDetailCtrl'
        }
      }
    })

    .state('tab.journal', {
      url: '/journal/:id',
      views: {
        'tab-category': {
          templateUrl: 'templates/category-detail-journal.html',
          controller: 'CategoryDetailJournalCtrl'
        }
      }
    })


    .state('tab.issue', {
      url: '/issue/:id',
      views: {
        'tab-category': {
          templateUrl: 'templates/category-detail-issue.html',
          controller: 'CategoryDetailIssueCtrl'
        }
      }
    })


    .state('tab.page', {
      url: '/page/:id',
      views: {
        'tab-category': {
          templateUrl: 'templates/page.html',
          controller: 'ShowPageCtrl'
        }
      }
    })



  .state('tab.top', {
      url: '/top',
      views: {
        'tab-top': {
          templateUrl: 'templates/tab-top.html',
          controller: 'TopCtrl'
        }
      }
    })



    .state('tab.top-detail', {
      url: '/top/:topId',
      views: {
        'tab-top': {
          templateUrl: 'templates/top-detail.html',
          controller: 'TopDetailCtrl'
        }
      }
    })

  .state('tab.article', {
      url: '/article',
      views: {
        'tab-article': {
          templateUrl: 'templates/tab-article.html',
          controller: 'ArticleCtrl'
        }
      }
    })



    .state('tab.article-detail', {
      url: '/article/:id',
      views: {
        'tab-article': {
          templateUrl: 'templates/tab-article-detail.html',
          controller: 'ArticleDetailCtrl'
        }
      }
    })


  .state('tab.search', {
    url: '/search',
    views: {
      'tab-search': {
        templateUrl: 'templates/tab-search.html',
        controller: 'SearchRezCtrl'
      }
    }
  })



  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/category');

});
