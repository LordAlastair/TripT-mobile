angular
.module('app.controllers')
.controller('ChangepassCtrl', function($scope, $state, $ionicLoading,  $ionicPopup, UsuarioService) {
  $scope.usuario = {};

  $scope.changepass = function() {
    $ionicLoading.show();

    UsuarioService
    .changepass($scope.usuario)
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
    return err.data.map(function(error){
        return error.msg;
      }).join("<br>");
    }
})
