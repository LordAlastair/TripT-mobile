angular
.module('app.services')
.factory('AuthService', function($http, BACKEND_URL) {
  return function AuthService(usuario) {
    return $http({
      method: 'POST',
      url: BACKEND_URL + '/authenticate',
      data: usuario
    });
  }
})
