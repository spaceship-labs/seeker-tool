'use strict';

/**
 * @ngdoc function
 * @name seekerToolApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the seekerToolApp
 */
angular.module('seekerToolApp')
  .controller('MainCtrl', mainCtrl);

function mainCtrl(seekerApi, $location) {
  /* jshint validthis: true */
  var vm = this;

  vm.init = init;
  vm.queryEntity = queryEntity;
  vm.selectRFC = selectRFC;
  vm.selectEntity = selectEntity;
  vm.seeMore = false;

  vm.init();

  function init() {

  }

  function queryEntity(text) {
    var params = {
      where: { 'entityName': { contains: text } },
      limit: 20
    };
    return seekerApi.getEntities(params);
  }

  function selectEntity(entity){
    $location.path('entity/' + entity.RFC);
  }

  function selectRFC() {
    $location.path('entity/' + vm.RFC);
  }

}
