angular
.module('app.controllers')
.controller('ClienteCtrl', function($scope, ClienteService, InstituicaoService, $ionicPopup, $ionicLoading) {

  $scope.cliente = {};
  $scope.instituicoes = {};
  $scope.save = _save;
  $scope.marcaItem = _marcaItem;

  _init();

   function _init(){
    _getCliente();
    _getInstituicoes();
   }

   function _getInstituicoes(){
     InstituicaoService
      .all()
      .then(function(res){
        $scope.instituicoes = res.data;
      });
   }

   function _marcaItem(item){
     return $scope.cliente.cli_cd_instituicao == item;
   }

   function _getCliente(){
      ClienteService
        .load($scope.cliente)
        .then(function(res){
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
