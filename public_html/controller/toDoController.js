var application = angular.module('toDoApp', []);
application.controller('toDoCtrl', function ($scope) {
    $scope.TaskList = [];
    var taskData = localStorage['tasklist'];

    if (taskData !== undefined)
    {
        $scope.TaskList = JSON.parse(taskData);
    }
    $scope.searchEnter = function () {

        if (event.which == 13 && $scope.task != "")
        {
            $scope.addTask();
        }
    };
    $scope.addTask = function () {
        $scope.TaskList.push({'taskMessage': $scope.task, 'status': false});

        $scope.task = '';
        localStorage['tasklist'] = JSON.stringify($scope.TaskList);

    };
    $scope.edit = function (msg) {
        for (i = 0; i < $scope.TaskList.length; i++)
        {
            if ($scope.TaskList[i].taskMessage == msg)
            {
                $scope.TaskList[i].taskMessage = event.target.innerText;
            }
        }
         localStorage['tasklist'] = JSON.stringify($scope.TaskList);
        event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";

    };
    $scope.editAgain = function (msg)
    {
        if (event.which == 13 && msg != "")
        {
            $scope.edit(msg);
        }
    }
});