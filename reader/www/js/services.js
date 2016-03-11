angular.module('starter.services', ['ngResource'])

.factory('Auth', ['$http', function($resource, $http, $rootScope) {

            return {
                        login: login,
                        logout: logout       
                   }

            function login($http) {

               // return $resource('http://localhost:8000/top10_list.json'); 
                 
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




