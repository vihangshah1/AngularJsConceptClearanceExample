var application = angular.module('myApp', []);
application.provider('date', function () {
    var greet;
    return{
        setGreeting: function (value) {
            greet = value;
        }, //this function will not executed by injector 
        $get: function () {
            return{
                showDate: function () {
                    var date = new Date();
                    return greet + "Its" + date.getHours();
                },
                devshowDate: function () {
                    var date = new Date();
                    return date.getHours();
                }
            }
        } //this function will be executed by injector for that function must have $ sign
    }
});
//For config providers must have suffix "Providers" with its name.
application.config(function (dateProvider) {
//    console.log(dateProvider.setGreeting);
    var time = dateProvider.$get().devshowDate();
   
    if (time > 6 && time < 12)
    {
        dateProvider.setGreeting("Good Morning");
    } else if (time > 13 && time < 16)
    {
        dateProvider.setGreeting("Good Noon");
    } else
    {
        dateProvider.setGreeting("Good Night");
    }
});
application.controller('app', function ($scope, date) {
    $scope.greetMessage = date.showDate();
});