var app = angular.module('myApp', []);
app.controller('app', function ($scope) {
    $scope.myRandomNumber = Math.random();
    document.querySelector('input').addEventListener('click', function () {
        alert("Clicked");
        $scope.myRandomNumber = Math.random();
        $scope.$digest();
    }, false);
});