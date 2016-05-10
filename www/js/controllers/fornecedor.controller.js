angular
.module('app.controllers')
.controller('FornecedorCtrl', function($scope, Fornecedor, $ionicPopup, $ionicLoading, TIPO_PESSOA, TIPO_TRANSPORTE) {
  $scope.TIPO_PESSOA = TIPO_PESSOA;
  $scope.TIPO_TRANSPORTE = TIPO_TRANSPORTE;

  $scope.fornecedor = new Fornecedor();
  $scope.save = save;
  $scope.isTipoPessoa = isTipoPessoa;
  $scope.isTipoTransporte = isTipoTransporte;

  _init();

  function _init(){
    _getFornecedor();
  }

  function isTipoPessoa(tipoPessoa){
    return $scope.fornecedor.for_fl_pessoa == tipoPessoa;
  }

  function isTipoTransporte(tipoTransporte){
    return $scope.fornecedor.for_cd_transporte == tipoTransporte;
  }

  function _getFornecedor(){
    Fornecedor
    .get($scope.fornecedor)
    .$promise
    .then(function (fornecedor) {
      if(!fornecedor){
        return;
      }
      $scope.fornecedor = fornecedor;
    });
  }

  function save(){
    if ($scope.fornecedor.for_cd_fornecedor) {
      Fornecedor
      .update($scope.fornecedor)
      .$promise
      .then(_success)
      .catch(_error)
      .finally(_finally);
    } else {
      Fornecedor
      .save($scope.fornecedor)
      .$promise
      .then(_success)
      .catch(_error)
      .finally(_finally);
    }
  }

  function _success(response) {
    $ionicPopup.alert({
      title: 'Cadastro atualizado com sucesso!',
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
