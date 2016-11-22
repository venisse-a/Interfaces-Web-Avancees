'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute','myApp.authentification','myApp.view1','myApp.view2','myApp.log_page']).

config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]).
controller('appController',['$scope','authentification','$route','$rootScope','$location',function( $scope, auth, $route, $rootScope, $location) {
      const scope = $scope;
      scope.isAuthentified = auth.isAuthentified;
        $rootScope.$on('userLoggedIn', function () {
          scope.isAuthentified = auth.isAuthentified;
          $route.reload();
        });
}]);
