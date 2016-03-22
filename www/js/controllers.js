angular.module('app.controllers', [])

.controller('LoginCtrl', function($scope, $state, $ionicLoading, $timeout) {
  $scope.user = {};

  $scope.login = function() {
    $ionicLoading.show();

    $timeout(function() {
      $ionicLoading.hide();

      $state.go('menu-fornecedores.veiculos');
    }, 1000);
  };
})

.controller('VeiculosCtrl', function($scope, $ionicLoading, Veiculo) {
  $scope.showDelete = false;
  $scope.loading = false;
  $scope.filtro = '';

  $scope.toggleDelete = toggleDelete;

  _init();

  function _init() {
    _getVeiculos();
  }

  function _getVeiculos() {
    $scope.loading = true;

    Veiculo.query(function (veiculos) {
      $scope.loading = false;
      $scope.veiculos = veiculos;
    });
  }

  function toggleDelete() {
    $scope.showDelete = !$scope.showDelete;
  }
})

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

.controller('SignupCtrl', function($scope) {

})
