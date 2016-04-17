angular
.module('app.controllers')
.controller('VeiculosCtrl', function($scope, $ionicLoading, Veiculo) {
  $scope.filtro = '';
  $scope.loading = false;
  $scope.showDelete = false;

  $scope.toggleDelete = toggleDelete;

  _init();

  function _init() {
    _getVeiculos();
  }

  function _getVeiculos() {
    _toggleLoading();

    Veiculo.query(function (veiculos) {
      $scope.veiculos = veiculos;
      _toggleLoading();
    });
  }

  function toggleDelete() {
    $scope.showDelete = !$scope.showDelete;
  }

  function _toggleLoading() {
    $scope.loading = !$scope.loading;
  }
})
