angular
.module('app.controllers')
.controller('VeiculoCtrl', function($scope, $stateParams, Veiculo, Caracteristica) {
  _init();

  function _init() {
    _getVeiculo($stateParams.vei_cd_veiculo);
  }

  function _getVeiculo(vei_cd_veiculo, cb) {
    Veiculo.get({
      vei_cd_veiculo: vei_cd_veiculo
    }, function(veiculo) {
      $scope.veiculo = veiculo;

      $scope.selectedCaracteristicas =
        veiculo
        .VeiculoCaracteristicas
        .map(function(veiculoCaracteristica) {
          return veiculoCaracteristica.vec_cd_caracteristica
        });

      _getCaracteristicas();
    });
  }

  function _getCaracteristicas() {
    Caracteristica.query(function(caracteristicas) {
      $scope.caracteristicas = caracteristicas.filter(function(caracteristica) {
        return $scope.selectedCaracteristicas.indexOf(caracteristica.car_cd_caracteristica) >= 0;
      });
    });
  }
})
