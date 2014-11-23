'use strict';

angular.module('weddingApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'angularFileUpload',
  'ngS3upload'
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
      .when('/invitation', {
        templateUrl: 'views/invitation.html'
      })
      .when('/photo-upload', {
        templateUrl: 'views/photo-upload.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
