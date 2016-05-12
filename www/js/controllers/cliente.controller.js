angular
.module('app.controllers')
.controller('ClienteCtrl', function($scope, Cliente, Instituicao, $ionicPopup, $ionicLoading) {

  $scope.cliente = {};
  $scope.instituicoes = {};
  $scope.save = save;
  $scope.marcaItem = marcaItem;

  _init();

  function _init(){
    _getCliente();
    _getInstituicoes();
  }

  function _getInstituicoes(){
    Instituicao
    .query(function (instituicoes) {
      $scope.instituicoes = instituicoes;
    })
  }

  function marcaItem(item){
    return $scope.cliente.cli_cd_instituicao == item;
  }

  function _getCliente(){
    Cliente
    .load(function (cliente) {
      $scope.cliente = cliente;
    });
  }

  function save(){
    if($scope.cliente.cli_cd_cliente){
      Cliente
      .update($scope.cliente)
      .then(_success)
      .catch(_error)
    }else{
      Cliente
      .save($scope.cliente)
      .then(function(cliente){
        $scope.cliente = cliente.data;
        //console.log(cliente);
      })
      .catch(_error)
    }
  }

  function _success(response) {
    $ionicPopup.alert({
      title: 'Cadastro atualizado com sucesso!',
    });
  }

  function _error(response) {
    $ionicPopup.alert({
      title: 'Desculpe, mas um erro inesperado ocorreu. Por favor, tente novamente.',
      template: response.errorMessage
    });
  }

  function _finally() {
    $ionicLoading.hide();
  }

});
