angular.module('starter.services', ['ngResource'])

.factory('Auth', ['$http', function($http, $rootScope, $resource) {

            return {
                        login: login,
                        logout: logout,   
                        init: init    
                   }

            function login(callback) {

               // return $resource('http://localhost:8000/top10_list.json'); 
                 
            } ;

            function logout(callback) {

               // return $resource('http://localhost:8000/top10_list.json'); 
                 
            } ;

            function init(callback) {

                return $http.get(server_url+'/init').success(callback);
                 
            } ;

}])



.factory('Catalog', function($resource) {
    return $resource(server_url+'/categories/:catId'); 
})


.factory('Top10', function($resource) {
    return $resource(server_url+'/top10/:topId'); 
})


.factory('Journal', function($resource) {
    return $resource(server_url+'/journal/:id'); 
})

.factory('Issue', function($resource) {
    return $resource(server_url+'/issue/:id'); 
})


.factory('Article', function($resource) {
    return $resource(server_url+'/article/:id'); 
})




