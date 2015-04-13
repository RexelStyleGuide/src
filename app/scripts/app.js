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
    'ngTouch',
    'duScroll'
  ]).value('duScrollOffset', 50)
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function($locationProvider) {
    $locationProvider.html5Mode(true);
  }).
  run(function($rootScope, $location){
    $rootScope.$on('duScrollspy:becameActive', function($event, $element){
      //Automaticly update location
      var hash = $element.prop('hash');
      if(hash) {
        //$location.hash(hash.substr(1)).replace();
        //$rootScope.$apply();
      }
    });

});

