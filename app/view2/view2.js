angular.module('myApp.view2', ['ngRoute', 'myApp.authentification'])
    
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        });
    }])
    .controller('View2Ctrl', ['$scope', 'authentification','$location','$route', function( $scope, auth, $location,$route ) {
        if (!auth.isAuthentified){
            $location.path('/view1');
        }
        else {
            var scope = $scope;
            scope.isAuthentified = auth.isAuthentified;
            
        }
    }]);