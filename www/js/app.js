angular
.module('app', ['ionic', 'angular-jwt', 'ng-mfb', 'app.controllers', 'app.routes', 'app.services', 'app.interceptors'])
.config(function($ionicConfigProvider, $httpProvider) {
  $ionicConfigProvider.spinner.icon("ripple");
  
  $httpProvider.interceptors.push('ErrorInterceptor');
  $httpProvider.interceptors.push('SessionInterceptor');
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
