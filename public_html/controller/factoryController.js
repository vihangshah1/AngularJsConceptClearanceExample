var application = angular.module('myApp', []);
application.factory('random', function () {
    var ram = {};
    var num = Math.floor(Math.random() * 10);
    ram.generate = function ()
    {
        return num;
    }
    return ram;
});
application.controller('factoryController', function ($scope, random) {
    $scope.generateNo = function ()
    {
        $scope.generatedNo = random.generate();
    }
})