angular.module("EmployeeApp").controller("NavCtrl",
function ($scope, $location, AuthFactory, EmployeeFactory) {
    /*
    Just a pass-through method to the AuthFactory method of the
    same name.
    */
    $scope.isAuthenticated = () => AuthFactory.isAuthenticated();

    $scope.finder = event => {
        if (event.key === "Enter") {
            const employee = EmployeeFactory.find($scope.searchString)
            if (employee != undefined){

                $location.url(`/employees/detail/${employee.id}`)
                $scope.searchString = ""
            } else {
                $location.url("/employees/list")
                $scope.searchString = ""
            }
        }
    }

    /*
    Unauthenticate the client.
    */
    $scope.logout = () => AuthFactory.logout();

}
)