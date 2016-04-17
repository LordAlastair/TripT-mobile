angular
.module('app', ['ionic', 'angular-jwt', 'app.controllers', 'app.routes', 'app.services'])
.config(function($httpProvider) {
  $httpProvider.interceptors.push('SessionService');
})
.run( function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
