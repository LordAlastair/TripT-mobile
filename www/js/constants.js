angular
.module('app')
// .constant('BACKEND_URL', 'http://192.168.99.100:3000')
.constant('BACKEND_URL', 'http://localhost:3000')
.constant('AUTH_EVENTS', {
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
})
.constant('USER_ROLES', {
  client: 'client_role',
  fornecedor: 'fornecedor_role'
})
.constant('$ionicLoadingConfig', {
  template: '<ion-spinner class="spinner-royal"></ion-spinner>'
});
