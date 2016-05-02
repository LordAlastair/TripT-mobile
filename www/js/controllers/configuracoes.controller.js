angular
.module('app.controllers')
.controller('ConfiguracoesCtrl', function($scope, $state, $ionicLoading, $ionicPopup, SessionService, Usuario) {
  $scope.usuario = {};

  $scope.deleteAccount = deleteAccount;

  function deleteAccount() {
    $ionicPopup.confirm({
      title: '):',
      template: 'Tem certeza que deseja excluir sua conta?',
      okType: 'button-assertive'
    })
    .then(function(res){
      if (res) {
        $ionicLoading.show();

        Usuario
        .delete($scope.usuario)
        .then(_success)
        .catch(_error)
        .finally(_finally);
      }
    })
  }

  function _success(response) {
    $ionicPopup.alert({
      title: 'Sucesso!',
      template: 'Sua conta foi excluída.'
    });

    SessionService.clear();
    $state.go('home');
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
