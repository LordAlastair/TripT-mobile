angular
.module('app.controllers')
.controller('MenuPrincipalCtrl', function($scope, $state, $ionicSideMenuDelegate, $ionicPopup, SessionService) {
  $scope.logout = logout;

  function logout() {
    $ionicPopup.confirm({
      title: 'Já vai?',
      template: 'Tem certeza?'
    })
    .then(function(res) {
      if (res) {
        SessionService.clear();
        $state.go('menu-principal.home');
      }

      if ($ionicSideMenuDelegate.isOpen())
        $ionicSideMenuDelegate.toggleLeft();
    });
  }
})
