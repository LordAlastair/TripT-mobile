angular
.module('app.controllers')
.controller('SignupCtrl', function($scope, SignupService, $ionicLoading) {
  $scope.usuario = {
    usu_ds_email: '',
    usu_ds_senha: '',
    usu_ds_senha_confirmacao: '',
  };

  $scope.error = {
    message: ''
  };

  $scope.signup = function() {
    if ($scope.usuario.usu_ds_senha !== $scope.usuario.usu_ds_senha_confirmacao) {
      $scope.error.message = "Senhas diferentes.";
      return;
    }

    $ionicLoading.show();

    SignupService($scope.usuario)
    .then(function(response) {
      /**
       * TODO: Verificar erros de parametrizacao (codigo 412), eles retornam como um array
       * TODO: Fazer login se response.status == 201 e redirecionar para dashboard
       */
      console.log(response);
    })
    .catch(function(err) {
      $scope.error = err;
    })
    .finally(function() {
      $ionicLoading.hide();
    });
  };
})
