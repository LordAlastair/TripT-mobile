angular
.module('app', ['ionic', 'angular-jwt', 'app.controllers', 'app.routes', 'app.services'])
.run(function($ionicPlatform, $http) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  $http.defaults.headers.common.Authorization = localStorage.getItem("token");
})
