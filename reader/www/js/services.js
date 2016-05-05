angular.module('starter.services', ['ngResource'])

.factory('Auth', ['$http', function($http, $rootScope) {

            return {
                        login: login,
                        logout: logout,   
                        save_profile: save_profile,   
                        registration: registration,
                        init: init    
                   }

            function login(login,password,callback) {
                data = {"login": login, "password": password};
                
                return $http({
                    method: 'POST',
                    url: server_url+'/login',
                    data: data,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(callback);

                 
            } ;


            function save_profile(data,callback) {

                
                return $http({
                    method: 'POST',
                    url: server_url+'/save_profile',
                    data: data,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(callback);
                 
            };


            function registration(login,password,email,callback) {
                data = {"username": login, "password": password, 'email': email};
                
                return $http({
                    method: 'POST',
                    url: server_url+'/registration',
                    data: data,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(callback);

                 
            } ;



            function logout(callback) {

               // return $resource('http://localhost:8000/top10_list.json'); 
                 
            } ;

            function init(callback) {

                return $http.get(server_url+'/init').success(callback);
                 
            } ;

}])


.factory('Popular', ['$http', function($http, $rootScope) {

            return {
                        get: get
                          
                   }

            function get(callback) {
                
                 return $http.get(server_url+'/popular').success(callback);
            } ;

            
}])




.factory('New', ['$http', function($http, $rootScope) {

            return {
                        get_new: get_new   
                   }

            function get_new(callback) {

               return $http.get(server_url+'/get_new').success(callback);
                 
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

.factory('Page', ['$http', function($http, $rootScope) {

            return {
                        get: get   
                   }

            function get(id,token,callback) {

                return $http.get(server_url+'/'+id+'/'+token+'/page').success(callback);

               
                 
            } ;

            
}])


.factory('Article', function($resource) {
    return $resource(server_url+'/article/:id'); 
})


.factory('Search', ['$http', function($http, $rootScope) {

            return {
                        go: go,
                   }

            function go(tag,callback) {
                data = {"type": "all", "tags": tag};
                
                return $http({
                    method: 'POST',
                    url: server_url+'/search',
                    data: data,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(callback);

                 
            } ;

           
}])




