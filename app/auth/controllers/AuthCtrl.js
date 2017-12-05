angular.module("EmployeeApp")
    .controller("AuthCtrl", function ($scope, $location, AuthFactory) {
        $scope.auth = {}

        $scope.logoutUser = function () {
            AuthFactory.logout()
            $location.url('/auth')
        }
        $scope.logMeIn = function (credentials) {
            console.log("logmein clicked")
            AuthFactory.authenticate(credentials).then(function (didLogin) {
                $scope.login = {}
                $scope.register = {}
                $location.url("/employees/list")
            })
        }

        $scope.registerUser = function (registerNewUser) {
            AuthFactory.registerWithEmail(registerNewUser).then(function (didRegister) {
                $scope.logMeIn(registerNewUser)
            })
        }
    })