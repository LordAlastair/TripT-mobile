angular
.module('app.controllers')
.controller('ClienteCtrl', function($scope, ClienteService, $ionicPopup, $ionicLoading) {

  $scope.cliente = {};
  $scope.save = _save;

  _init();

   function _init(){
    _getCliente();
   }

   function _getCliente(){
      ClienteService
        .load($scope.cliente)
        .then(function(res){
          console.log(res.data);
          $scope.cliente = res.data;
        });
  }

  function _save(){
      ClienteService
        .update($scope.cliente)
        .then(_success)
        .catch(_error)
        .finally(_finally);
  }

  function _success(response) {
    $ionicPopup.alert({
      title: 'Cadastro atualizado com sucesso!',
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
