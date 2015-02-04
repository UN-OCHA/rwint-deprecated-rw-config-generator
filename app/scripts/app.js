'use strict';

/**
 * @ngdoc overview
 * @name rwConfigGeneratorApp
 * @description
 * # rwConfigGeneratorApp
 *
 * Main module of the application.
 */
angular
  .module('rwConfigGeneratorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/configEdit', {
        templateUrl: 'views/crisis-overview-form.html',
        controller: 'ConfigeditCtrl'
      })
      .when('/configList', {
        templateUrl: 'views/configlist.html',
        controller: 'ConfiglistCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
