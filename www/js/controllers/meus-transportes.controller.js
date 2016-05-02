angular
.module('app.controllers')
.controller('MeusTransportesCtrl', function($scope, MeusTransportes, $ionicPopup, $ionicLoading) {
  $scope.star = {};
  $scope.avaliar = _avaliar;

  _init();

  function _init(){
  }

  function _avaliar(numStar){
    alert(numStar);
  }

  function _success(response) {
    $ionicPopup.alert({
      title: 'Obrigado pela avaliação!',
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
});
