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

  getVeiculos();

  $scope.toggleDelete = function() {
    $scope.showDelete = !$scope.showDelete;
  };
  
  function getVeiculos() {
    $scope.loading = true;

    Veiculo.query(function(veiculos) {
      $scope.loading = false;

      $scope.veiculos = veiculos;
    });
  }
})

.controller('VeiculoCtrl', function($scope, $stateParams, Veiculo) {
  Veiculo.get({
    vei_cd_veiculo: $stateParams.vei_cd_veiculo
  }, function(veiculo) {
    $scope.veiculo = veiculo;
  });
})

.controller('SignupCtrl', function($scope) {

})
