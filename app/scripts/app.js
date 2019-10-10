'use strict';

/**
 * @ngdoc overview
 * @name seekerToolApp
 * @description
 * # seekerToolApp
 *
 * Main module of the application.
 */
angular
  .module('seekerToolApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'restangular'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/entity/:RFC', {
        templateUrl: 'views/entity.html',
        controller: 'EntityCtrl',
        controllerAs: 'vm'
      })
      .when('/video', {
        templateUrl: 'views/video.html',
        controller: 'VideoCtrl',
        controllerAs: 'video'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('https://seekerone.herokuapp.com/');
    //RestangularProvider.setBaseUrl('http://localhost:1337/');
  });
