angular
.module('app.controllers')
.controller('LoginCtrl', function($scope, $state, $ionicLoading, $ionicPopup, Usuario, SessionService) {
  $scope.usuario = {};

  $scope.login = function() {
    $ionicLoading.show();

    Usuario
    .authenticate($scope.usuario)
    .then(_success)
    .catch(_error)
    .finally(_finally);
  };

  function _success(response) {
    SessionService.setToken(response.data.token);
    SessionService.getUserData().role.type == "usuario" ? $state.go('menu-cliente.home') : $state.go('menu-fornecedor.home');
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
