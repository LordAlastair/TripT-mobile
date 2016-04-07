angular
.module('app.controllers')
.controller('MenuFornecedoresCtrl', function($scope, $state, $ionicSideMenuDelegate, $ionicPopup) {
  $scope.logout = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Já vai?',
      template: 'Tem certeza?'
    });

    confirmPopup.then(function (res) {
      if (res) {
        localStorage.clear();
        $state.go('login');
      } else {
        $ionicSideMenuDelegate.toggleLeft();
      }
    });
  };
})
