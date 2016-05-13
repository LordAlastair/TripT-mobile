angular
.module('app.controllers')
.controller('FornecedorCtrl', function($scope, $state, $interval, Fornecedor, $ionicPopup, $ionicLoading, TIPO_PESSOA, TIPO_TRANSPORTE) {
  $scope.TIPO_PESSOA = TIPO_PESSOA;
  $scope.TIPO_TRANSPORTE = TIPO_TRANSPORTE;

  $scope.fornecedor = {};
  $scope.save = save;
  $scope.isTipoPessoa = isTipoPessoa;
  $scope.isTipoTransporte = isTipoTransporte;

  _init();

  function _setStateEventInterceptor() {
    $scope.$on("$stateChangeStart", function(e, toState, toParams, fromState, fromParams) {
      if (!fromState.name)
        return;

      if (fromState.name == $state.current.name && !$scope.fornecedor.for_cd_fornecedor) {
        $ionicPopup.alert({
          title: 'Cadastro obrigatório!',
          template:'Salve o cadastro para continuar...'
        })
        .then(function(res){
            $state.go('menu-fornecedor.meu-cadastro');
        })
      }
    });
  }

  function _init(){
    _getFornecedor();
    _setStateEventInterceptor();
  }

  function isTipoPessoa(tipoPessoa){
    return $scope.fornecedor.for_fl_pessoa == tipoPessoa;
  }

  function isTipoTransporte(tipoTransporte){
    return $scope.fornecedor.for_cd_transporte == tipoTransporte;
  }

  function _getFornecedor(){
    Fornecedor
    .load()
    .then(function (fornecedor) {
      $scope.fornecedor = fornecedor.data;
    });
  }

  function save(){
    if($scope.fornecedor.for_cd_fornecedor){
      Fornecedor
      .update($scope.fornecedor)
      .then(_success)
      .catch(_error)
    }else{
      Fornecedor
      .save($scope.fornecedor)
      .then(function(fornecedor){
        $scope.fornecedor = fornecedor.data;
        _created();
      })
      .catch(_error)
    }
  }

  function _success(response) {
    $ionicPopup.alert({
      title: 'Cadastro atualizado com sucesso!',
    });
  }

  function _created(response) {
    $ionicPopup.alert({
      title: 'Dados inclusos com sucesso!',
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
