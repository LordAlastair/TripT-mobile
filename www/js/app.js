angular
.module('app', ['ionic', 'angular-jwt', 'ng-mfb', 'jett.ionic.filter.bar', 'app.controllers', 'app.routes', 'app.services', 'app.interceptors'])
.config(function($ionicConfigProvider, $httpProvider, $ionicFilterBarConfigProvider) {
  $ionicConfigProvider.spinner.icon("ripple");

  $httpProvider.interceptors.push('ErrorInterceptor');
  $httpProvider.interceptors.push('SessionInterceptor');

  $ionicFilterBarConfigProvider.placeholder("Pesquisar");
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
