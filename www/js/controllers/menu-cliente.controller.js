angular
.module('app.controllers')
.controller('MenuClienteCtrl', function($scope, $state, $ionicSideMenuDelegate, $ionicPopup, SessionService) {
  $scope.logout = logout;

  function logout() {
    $ionicPopup.confirm({
      title: 'Já vai?',
      template: 'Tem certeza?'
    })
    .then(function(res) {
      if (res) {
        SessionService.clear();
        $state.go('home');
      }

      if ($ionicSideMenuDelegate.isOpen())
        $ionicSideMenuDelegate.toggleLeft();
    });
  }
})
