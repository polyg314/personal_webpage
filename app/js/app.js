var myApp = angular.module('myApp', ['ui.router'])
.controller('TabsCtrl', ['$rootScope','$state', function ($rootScope, $state) {
    $rootScope.isActiveTab = function(tabUrl) {
        return tabUrl == $state.current.url;
    }
}])