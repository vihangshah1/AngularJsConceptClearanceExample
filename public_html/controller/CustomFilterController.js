var application = angular.module('myApp', []);

application.filter('hundredMulti', function () {
    return function (enteredAmount) {
        console.log(enteredAmount);
        if (enteredAmount % 100 == 0)
        {
            return "it is multiple of 100"
        } else if (enteredAmount == "" || enteredAmount == undefined)
        {
            return "you not entered anything yet.!"
        } else
        {
            return "it is not multiple of 100"
        }

    }

});
application.controller('filterCtrl', function () {

});
