angular
.module('app.controllers')
.controller('HomeCtrl', function($scope, $state, SessionService) {
  _init();

  function _init() {
    if (SessionService.hasToken()) {
      $state.go("menu-fornecedor.home");
    }
  }
});
