'use strict';

//use foundation
$(document).foundation();

/**
 * @ngdoc overview
 * @name srcApp
 * @description
 * # srcApp
 *
 * Main module of the application.
 */
angular
  .module('srcApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
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
      
      .otherwise({
        redirectTo: '/'
      });
  });
