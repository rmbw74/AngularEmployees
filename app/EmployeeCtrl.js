const app = angular.module("EmployeeMgmt", [])

app.controller("EmployeeCtrl", function ($scope, $http) {

    getData = function () {

        $http.get("https://employees-123d3.firebaseio.com/employees/.json")
            .then(response => {
                $scope.employees = response.data
                console.log($scope.employees)
            })
    }
    $scope.employees
    $scope.title = "Employees"
    $scope.newFirstName = ""
    $scope.newLastName = ""

    $scope.fireThem = function (emp, key) {
        emp.employmentEnd = Date.now()
        emp.currentEmployee = false
        $http.put(
            `https://employees-123d3.firebaseio.com/employees/${key}/.json`, emp
        ).then(getData)
    }
    $scope.rehireThem = function (emp, key) {
        emp.employmentEnd = 0
        emp.currentEmployee = true
        emp.employmentStart = Date.now()
        $http.put(
            `https://employees-123d3.firebaseio.com/employees/${key}/.json`, emp
        ).then(getData)
    }
    $scope.deleteThem = function (emp, key) {
        $http.delete(
            `https://employees-123d3.firebaseio.com/employees/${key}/.json`, emp
        ).then(getData)
    }
    $scope.submit = function () {
        let newEmployeeEntry = {
            "firstName": $scope.newFirstName,
            "lastName": $scope.newLastName,
            "employmentStart": Date.now(),
            "currentEmployee": true,
            "employmentEnd": 0
        }
        $http.post("https://employees-123d3.firebaseio.com/employees/.json", newEmployeeEntry)
        .then(getData)
        $scope.newFirstName = ""
        $scope.newLastName = ""
    }
    getData()
})