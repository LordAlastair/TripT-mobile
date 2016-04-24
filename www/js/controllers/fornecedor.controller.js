angular
.module('app.controllers')
.controller('FornecedorCtrl', function($scope, FornecedorService, $ionicPopup, $ionicLoading) {

  $scope.fornecedor = {};
  $scope.save = _save;
  $scope.tipoPessoa = _tipoPessoa;
  $scope.tipoTransporte = _tipoTransporte;

  _init();

   function _init(){
    _getFornecedor();
   }

   function _tipoPessoa(tp){
     return $scope.fornecedor.for_fl_pessoa == tp;
   }

   function _tipoTransporte(tp){
     return $scope.fornecedor.for_cd_transporte == tp;
   }

   function _getFornecedor(){
      FornecedorService
        .load($scope.fornecedor)
        .then(function(res){
          console.log(res.data);
          $scope.fornecedor = res.data;
        });
  }

  function _save(){
      FornecedorService
        .update($scope.fornecedor)
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
