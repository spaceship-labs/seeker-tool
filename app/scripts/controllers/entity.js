'use strict';

/**
 * @ngdoc function
 * @name seekerToolApp.controller:EntityCtrl
 * @description
 * # EntityCtrl
 * Controller of the seekerToolApp
 */
angular.module('seekerToolApp')
  .controller('EntityCtrl', entityCtrl);

function entityCtrl(Restangular, $routeParams, seekerApi) {
  /* jshint validthis: true */
  var vm = this;

  vm.getIcon = getIcon;
  vm.getIconClass = getIconClass;
  vm.getMotive = getMotive;
  vm.getTemplate = getTemplate;
  vm.init = init;

  vm.init();

  function getTemplate(entry) {
    var template = '/views/69entry.html';
    if (entry.list === 'Artículo 69B') {
      template = '/views/69Bentry.html';
    }
    return template;
  }

  function getIcon(entry) {
    var icon = 'warning';
    if (entry.list === 'Artículo 69' && entry.publicationMotive === 'SENTENCIAS') {
      icon = 'not_interested';
    } else if (entry.list === 'Artículo 69B') {
      icon = 'error';
      if (entry.status === 'Desvirtuado') {
        icon = 'check_circle';
      }
    }
    return icon;
  }

  function getIconClass(entry) {
    var iconClass = 'warn';
    if (entry.list === 'Artículo 69' && entry.publicationMotive === 'SENTENCIAS') {
      iconClass = 'danger';
    } else if (entry.list === 'Artículo 69B') {
      iconClass = 'danger';
      if (entry.status === 'Desvirtuado') {
        iconClass = 'safe';
      }
    }
    return iconClass;
  }

  function getMotive(entry) {
    var motive = entry.publicationMotive;
    switch (entry.publicationMotive) {
      case 'CANCELADOS':
        motive = 'Contribuyente que tiene a su cargo créditos fiscales cancelados';
        break;
      case 'NO LOCALIZADOS':
        motive = 'Contribuyente no localizado';
        break;
      case 'EXIGIBLES':
        motive = 'Contribuyente que tiene a su cargo créditos fiscales exigibles';
        break;
      case 'CONDONADOS':
        motive = 'Contribuyente que tiene a su cargo créditos fiscales condonados';
        break;
      case 'FIRMES':
        motive = 'Contribuyente que tiene a su cargo créditos fiscales firmes';
        break;
      case 'SENTENCIAS':
        motive = 'Contribuyente que tiene una sentencia condenatoria por haber cometido un delito fiscal';
        break;
    }
    return motive;
  }

  function init() {
    vm.loading = true;
    vm.RFC = $routeParams.RFC;
    seekerApi.getEntity(vm.RFC).then(setEntity);
  }

  function setEntity(entity) {
    vm.entity = entity;
    vm.loading = false;
  }

}
