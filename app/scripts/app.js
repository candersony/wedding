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
      .when('/bigDay', {
        templateUrl: 'views/bigday.html',
        controller: 'BigdayCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
