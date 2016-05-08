angular
.module('app.controllers')
.controller('TransportesCtrl', function($scope, $ionicLoading, $ionicModal, $ionicPopup, Search) {
  $scope.veiculo = {};
  $scope.veiculos = [];
  $scope.loading = false;

  $scope.refresh = refresh;

  _init();

  function _init() {
    _getVeiculos();
  }

  function refresh() {
    Search
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

    Search
    .query()
    .$promise
    .then(function (veiculos) {
      $scope.veiculos = veiculos;
      _toggleLoading();
    })
    .catch(_error);
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
