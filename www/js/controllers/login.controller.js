angular
.module('app.controllers')
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
