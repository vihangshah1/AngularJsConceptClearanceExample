var app = angular.module('myWatchApp', []);
app.controller('watchCtrl', function ($scope) {
    $scope.counter = 0;
    $scope.$watch('myText', function () {
        $scope.counter++;
    })
});