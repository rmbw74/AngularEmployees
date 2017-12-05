angular
.module("EmployeeApp")
.controller("EmployeeListCtrl", function ($scope, EmployeeFactory) {
    $scope.employees = []

    EmployeeFactory.list().then(data => {
        $scope.employees = data
    })
})