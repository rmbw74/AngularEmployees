angular.module("EmployeeApp")
.controller("EmployeeDetailCtrl",function ($scope, $routeParams,EmployeeFactory, $location) {
            $scope.employee = {}

            EmployeeFactory.single($routeParams.employeeId).then(employee => {
                $scope.employee = employee
            })
            $scope.deleteEmployee = function() {
                EmployeeFactory.murder($routeParams.employeeId)
                .then(function(){
                    $location.url("/")
                }
                )
            }
            $scope.fireEmployee = function() {
                EmployeeFactory.fire($routeParams.employeeId)
                .then(function(){
                    $location.url("/")
                }
                )
            }
        })