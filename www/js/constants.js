angular
.module('app')
.constant('BACKEND_URL', 'http://localhost:3000')
.constant('TOKEN_KEY', "token")
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
