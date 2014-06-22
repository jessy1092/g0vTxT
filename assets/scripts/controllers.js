
angular.module('controllers', [])

.controller('menuCtrl', function ($scope) {

    $scope.home   = 'active item';
    $scope.visual = 'item';
    $scope.hView  = 'item';
    $scope.cView  = 'item';

    $scope.changeClass = function (item) {
        $scope.home   = 'item';
        $scope.visual = 'item';
        $scope.hView  = 'item';
        $scope.cView  = 'item';
        switch(item) {
        case 'home':
            $scope.home = 'active item';
            break;
        case 'visual':
            $scope.visual = 'active item';
            break;
        case 'hView':
            $scope.hView = 'active item';
            break;
        case 'cView':
            $scope.cView = 'active item';
            break;
        default:
            break;
        }
    };
})

.controller('ListCtrl', function ($scope, $http, $sce) {
    $http.get('http://g0v-communique-api.herokuapp.com/api/2.0/hackpadList', {
        headers: {'Content-type': 'application/json'}})
    .success(function (data) {
        $scope.padList = data;
    })


    $scope.showPad = function (padID) {
        // $element.find('.showPad').attr('src','https://g0v.hackpad.com/ep/pad/static/' + padID);
        $scope.padUrl = $sce.trustAsResourceUrl('https://g0v.hackpad.com/ep/pad/static/' + padID);
    }
    console.log("test");
})

.controller('CommuniqueViewrCtrl', function ($scope, $sce) {
    $scope.communiqueUrl = $sce.trustAsResourceUrl('./views/communique.html');
})

.run(function($rootScope) {
});
