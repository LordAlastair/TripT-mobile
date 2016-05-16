angular
.module('app.controllers')
.controller('SignupCtrl', function($scope, Usuario, $state, $ionicLoading, $ionicPopup) {
  $scope.usuario = {};
  $scope.required = true;


  $scope.signup = function() {
    if(!_comparePass()){
      return;
    }
    if(!_validPass()){
      return;
    }

    $ionicLoading.show();

    Usuario
    .signup($scope.usuario)
    .then(_success)
    .catch(_error)
    .finally(_finally);
  };

  function _success(data) {
    $ionicPopup.alert({
     title: 'Yay!',
     template: 'Usuário criado!'
    })
    .then(function() {
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

  function _comparePass() {
    return angular.equals($scope.usuario.usu_ds_senha, $scope.usuario.confirm_usu_ds_senha)
  };

  function _validPass(){
    return $scope.usuario.usu_ds_senha.length > 5;
  }


})
