angular
.module('app.controllers')
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
