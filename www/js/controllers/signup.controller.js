angular
.module('app.controllers')
.controller('SignupCtrl', function($scope, SignupService, $state, $ionicLoading, $ionicPopup) {
  $scope.usuario = {
    usu_ds_email: '',
    usu_ds_senha: ''
  };

  $scope.signup = function() {
    $ionicLoading.show();

    SignupService($scope.usuario)
    .then(_success)
    .catch(_error)
    .finally(_finally);
  };

  function _success(data) {
    var alert = $ionicPopup.alert({
     title: 'Yey!',
     template: 'Usuário criado!'
    });

    alert.then(function() {
      $state.go('login');
    });
  }

  function _error(err) {
    $ionicPopup.alert({
      title: 'Vish, deu ruim..',
      template: _getErrors(err)
    });
  }

  function _getErrors(err) {
    console.log(err);
    return err.data.map(function(error) {
      return error.msg;
    }).join("<br>");
  }

  function _finally() {
    $ionicLoading.hide();
  }
})
