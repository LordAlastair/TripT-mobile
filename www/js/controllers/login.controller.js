angular
.module('app.controllers')
.controller('LoginCtrl', function($scope, $state, $ionicLoading, $timeout) {
  $scope.usuario = {};

  $scope.login = function() {
    $ionicLoading.show();

    $timeout(function() {
      $ionicLoading.hide();

      $state.go('menu-fornecedores.veiculos');
    }, 1000);
  };
})
