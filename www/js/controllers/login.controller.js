angular
.module('app.controllers')
.controller('LoginCtrl', function($scope, $state, $ionicLoading,  $ionicPopup, UsuarioService) {
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
    if (localStorage.getItem("token")) {
      $state.go("menu-fornecedores.veiculos");
    }
  }

  function _success(response) {
    localStorage.setItem("token", response.data.token);
    $state.go('menu-fornecedores.veiculos');
  }

  function _error(err) {
    $ionicPopup.alert({
      title: 'Vish, deu ruim..',
      template: _getErrors(err)
    });
  }

  function _finally() {
    $ionicLoading.hide();
  }

  function _getErrors(err) {
    return err.data.map(function(error) {
      return error.msg;
    }).join("<br>");
  }
})
