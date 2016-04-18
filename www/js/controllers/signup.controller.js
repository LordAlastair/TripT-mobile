angular
.module('app.controllers')
.controller('SignupCtrl', function($scope, UsuarioService, $state, $ionicLoading, $ionicPopup) {
  $scope.usuario = {};

  $scope.signup = function() {
    $ionicLoading.show();

    UsuarioService
    .signup($scope.usuario)
    .then(_success)
    .catch(_error)
    .finally(_finally);
  };

  function _success(data) {
    var alert = $ionicPopup.alert({
     title: 'Yay!',
     template: 'Usuário criado!'
    });

    alert.then(function() {
      $state.go('login');
    });
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
})
