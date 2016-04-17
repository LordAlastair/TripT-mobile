angular
.module('app.controllers')
.controller('ChangePassCtrl', function($scope, $state, $ionicLoading, $ionicPopup, SessionService, UsuarioService) {
  $scope.usuario = SessionService.getUserData();

  $scope.changePass = function() {
    $ionicLoading.show();

    UsuarioService
    .changePass($scope.usuario)
    .then(_success)
    .catch(_error)
    .finally(_finally);
  };

  function _success(response) {
    $ionicPopup.alert({
      title: 'Sucesso!',
      template: 'Sua senha foi alterada com sucesso.'
    });

    $scope.usuario = {};
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
