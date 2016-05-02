angular
.module('app.controllers')
.controller('RecoveryCtrl', function($scope, $state, $ionicLoading, $ionicPopup, Usuario) {
  $scope.usuario = {};

  $scope.recovery = function() {
    $ionicLoading.show();

    Usuario
    .recovery($scope.usuario)
    .then(_success)
    .catch(_error)
    .finally(_finally);
  };

  function _success(response) {
    $ionicPopup.alert({
      title: 'Recovery',
      template: 'Sua nova senha foi enviada para seu email.'
    })
    .then(function() {
      $state.go('login');
    });

    $scope.usuario = {};
  }

  function _error(response) {
    $ionicPopup.alert({
      title: 'Vish, deu ruim',
      template: response.errorMessage
    });
  }

  function _finally() {
    $ionicLoading.hide();
  }
})
