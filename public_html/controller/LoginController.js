var app = angular.module('myApp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                templateUrl: 'home.html'
            })
            .when('/login', {
                templateUrl: 'login.html'
            })
            .when('/dashboard', {
                resolve: {
                    "check": function ($location, $rootScope) {

                        if (!$rootScope.isLogin)
                        {
                            $location.path('/');
                        }
                    }},
                templateUrl: 'dashboard.html'
            })
            .when('/records', {
                templateUrl: 'record.html'
            })

});
app.controller('loginctrl', function ($rootScope, $scope, $location) {

    $scope.login = function ()
    {

        if ($scope.name == 'admin' && $scope.pwd == 'admin')
        {

            $rootScope.isLogin = true;
            $location.path('/dashboard');
        } else
        {

        }
    };
});
app.controller('recordctrl', function ($http, $scope) {
    alert("Called");
    $http.get('http://localhost:8383/AngularjsLearning/data/record.json').success(function (response) {
        $scope.persons = response.records;
    })
});

