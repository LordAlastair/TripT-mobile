angular
.module('app.controllers')
.controller('VeiculoCtrl', function($scope, $stateParams, Veiculo, Caracteristica) {
  $scope.onEditMode = false;
  $scope.veiculo = null;
  $scope.caracteristicas = [];
  $scope.selectedCaracteristicas = [];

  $scope.findInSelected = function(value) {
    return $scope.selectedCaracteristicas.indexOf(value) >= 0;
  };

  _init();

  function _init() {
    _getVeiculo($stateParams.vei_cd_veiculo);
  }

  function toggleEditMode() {
    $scope.onEditMode = !$scope.onEditMode;
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
      $scope.caracteristicas = caracteristicas;
      console.log(caracteristicas);
    });
  }
})
