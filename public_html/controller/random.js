var application = angular.module('myApp', []);
application.service('randomservice', function () {
    var num = Math.floor(Math.random() * 10);
    this.generateNo = function () {
        return num;
    }
});
application.controller('app', function ($scope, randomservice) {
    $scope.generateNumber = function () {
        $scope.myGeneratedNo =randomservice.generateNo();
    }
});