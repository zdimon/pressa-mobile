app.factory('Auth', ['$http', '$rootScope', function($http, $rootScope){
            return {
                        login: login             
                    }




            function login(callback) {
             
                var url = 'http://localhost';
                return $http.get(url).success(callback); 

            };

}]);
