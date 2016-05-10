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
    var role = "";
    SessionService.setToken(response.data.token);
    role = SessionService.getUserData().role.type;

    if(role == "usuario"){
      $state.go('menu-cliente.home')
    }else
    if(role == "fornecedor"){
      $state.go('menu-fornecedor.home')
    }else{
      //CASO AINDA NÃO IDENTIFICADO PERGUNTA SE É CLIENTE OU FORNCEDOR
      var selectRole = $ionicPopup.show({
        title: 'Seja Bem-vindo!',
        template: 'Ainda não indetificamos seu perfil, você é:',
        scope: $scope,
        buttons: [
          {
            text: '<b>Cliente</b>',
            type: 'button-positive',
            onTap: function() {
              $state.go('menu-cliente.meu-cadastro');
            }
          },
          {
            text: '<b>Fornecedor</b>',
            type: 'button-positive',
            onTap: function() {
              $state.go('menu-fornecedor.meu-cadastro');
            }
          },
        ]
      });
    }
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
