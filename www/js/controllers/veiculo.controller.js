angular
.module('app.controllers')
.controller('VeiculoCtrl', function($scope, $stateParams, Veiculo) {
  _init();

  function _init() {
    _getVeiculo($stateParams.vei_cd_veiculo);
  }

  function _getVeiculo(vei_cd_veiculo) {
    Veiculo.get({
      vei_cd_veiculo: vei_cd_veiculo
    }, function(veiculo) {
      $scope.veiculo = veiculo;
    });
  }
})
