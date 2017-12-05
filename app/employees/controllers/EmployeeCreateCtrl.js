angular
.module("EmployeeApp")
.controller("EmployeeCreateCtrl", function ($scope,$location, EmployeeFactory) {
    $scope.newEmployee = {}

    $scope.hireEmployee = function () {
        const employee = {
            "firstName": $scope.newEmployee.firstName,
            "lastName": $scope.newEmployee.lastName,
            "employmentStart": Date.now(),
            "employmentEnd": 0
        }

        EmployeeFactory.add(employee).then(() => {
            $scope.newEmployee.firstName = ""
            $scope.newEmployee.lastName = ""
        })
    }
})