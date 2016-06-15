'use strict';

//angular.module('Petime')
angular.module('Petime')
    //.constant("baseURL", "http://localhost:3000/")
    .constant("baseURL", "http://petserver.mybluemix.net/")
    .service('userFactory', ['baseURL', '$http', function (baseURL, $http) {
        this.instertUser = function (data) {
            console.log(data);
            return $http.post(baseURL + 'users/register', data);
        };
    }])