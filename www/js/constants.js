angular
.module('app')
.constant('BACKEND_URL', 'http://192.168.99.100:3000')
.constant('AUTH_EVENTS', {
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
})
.constant('USER_ROLES', {})
.constant('$ionicLoadingConfig', {
  template: '<ion-spinner></ion-spinner>'
});;
