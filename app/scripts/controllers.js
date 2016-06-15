'use strict';

angular.module('Petime')
    .controller('IndexController', ['userFactory', '$scope', function (userFactory, $scope) {

        $scope.registerData = {
            username: "",
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        };
        $scope.doSubmitUser = function () {
            userFactory.instertUser($scope.registerData).success(function (data) {
                console.log(data);
                //$scope.showAlert();
                $scope.registerData = {};
                alert("Registration successfull");
                //$state.go('tab.dash');
            }).error(function (error) {
                console.log(error);
                //$scope.showAlert(error);
            });
        }
    }])