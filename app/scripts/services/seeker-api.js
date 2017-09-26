'use strict';

/**
 * @ngdoc service
 * @name seekerToolApp.seekerApi
 * @description
 * # seekerApi
 * Service in the seekerToolApp.
 */
angular.module('seekerToolApp')
  .service('seekerApi', function(Restangular) {
    this.getEntity = function(RFC) {
      return Restangular.one('entity', RFC).get({populate:'entries'});
    };

    this.getEntities = function(params) {
    	return Restangular.all('entity').getList(params);
    };
  });
