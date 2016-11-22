'use strict';

angular.module('myApp.view1', ['ngRoute', 'myApp.authentification'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [ 'authentification', '$scope', '$location', function( auth, $scope, $location) {
    
  var scope = $scope;
  scope.user={};
  scope.isAuthentified = auth.isAuthentified;
  scope.loginFailedMessage = "Login or Password Invalid";
  scope.authFailed = false;
  scope.login = function() {
      auth.login( scope.user  );
      if (! auth.isAuthentified){
        scope.authFailed= true;
      }
      else{
          scope.authFailed = false;
          $location.path('/log_page');
      }
  };
}]);