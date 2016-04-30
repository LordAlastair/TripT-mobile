angular
.module('app.controllers')
.controller('MeusTransportesCtrl', function($scope, MeusTransportesService, $ionicPopup, $ionicLoading) {

  $scope.star = {};
  $scope.avaliar = _avaliar;

  _init();

   function _init(){
   }

  function _avaliar(num_star){
      alert(num_star);
      // $scope.star = num_star;
      // ClienteService
      //   .avaliar($scope.cliente)
      //   .then(_success)
      //   .catch(_error)
      //   .finally(_finally);
  }

  function _success(response) {
    $ionicPopup.alert({
      title: 'Obrigado!',
    });
  }

  function _error(err) {
    $ionicPopup.alert({
      title: 'Desculpe, mas um erro inesperado ocorreu. Por favor, tente novamente.',
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

});
