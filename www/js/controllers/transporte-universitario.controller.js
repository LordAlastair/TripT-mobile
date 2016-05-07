angular
.module('app.controllers')
.controller('SearchCtrl', function($scope, $ionicLoading, $ionicPopup, Search, Caracteristica) {

  $scope.filtro = '';
  $scope.loading = false;
  $scope.refresh = refresh;

  _init();

  function _init() {
    _getVeiculos();
    _getCaracteristicas();
  }


  function refresh() {
    Veiculo
    .query()
    .$promise
    .then(function (veiculos) {
      $scope.veiculos = veiculos;
      $scope.$broadcast('scroll.refreshComplete');
    })
    .catch(_error);
  }


  function _getVeiculos() {
    _toggleLoading();

    Veiculo
    .query()
    .$promise
    .then(function (veiculos) {
      $scope.veiculos = veiculos;
      _toggleLoading();
    })
    .catch(_error);
  }

  function _getCaracteristicas() {
    Caracteristica.query(function (caracteristicas) {
      $scope.caracteristicas = caracteristicas;
    });
  }


  function _toggleLoading() {
    $scope.loading = !$scope.loading;
  }

  function _error(response) {
    $ionicPopup.alert({
      title: 'Vish, deu ruim..',
      template: response.errorMessage
    });
  }
})
