app.factory('Auth', ['$http', '$rootScope', function($http, $rootScope){
            return {
                        login: login,
                        init: init             
                    }




            function login(callback) {             
                var url = 'http://localhost';
                return $http.get(url).success(callback); 
            };


            function init(callback) {             
                return $http.get(server_url+'/init').success(callback);
            };


}]);
