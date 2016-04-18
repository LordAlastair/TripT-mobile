angular
.module('app.controllers')
.controller('LoginCtrl', function($scope, $state, $ionicLoading, $ionicPopup, UsuarioService, SessionService) {
  _init();

  $scope.usuario = {};

  $scope.login = function() {
    $ionicLoading.show();

    UsuarioService
    .authenticate($scope.usuario)
    .then(_success)
    .catch(_error)
    .finally(_finally);
  };

  function _init() {
    if (SessionService.hasToken()) {
      $state.go("menu-fornecedor.home");
    }
  }

  function _success(response) {
    SessionService.setToken(response.data.token);
    $state.go('menu-fornecedor.home');
  }

  function _error(response) {
    $ionicPopup.alert({
      title: 'Vish, deu ruim..',
      template: response.errorMessage
    });
  }

  function _finally() {
    $ionicLoading.hide();
  }
});
