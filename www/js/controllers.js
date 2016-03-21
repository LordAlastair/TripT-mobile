angular.module('app.controllers', [])

.controller('LoginCtrl', function($scope, $state) {
  $scope.user = {};

  $scope.login = function() {
    console.log($scope.user);
    console.log($state.go('menu-fornecedores.veiculos'));
  };

})

.controller('VeiculosCtrl', function($scope, Veiculo) {
  Veiculo.query(function(veiculos) {
    $scope.veiculos = veiculos;
    console.log($scope.veiculos);
  });
})

.controller('VeiculoCtrl', function($scope, $stateParams) {
  console.log($stateParams);
})

.controller('SignupCtrl', function($scope) {

})
