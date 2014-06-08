'use strict';

angular.module('weddingApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/save-the-date', {
        templateUrl: 'views/save-the-date.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
