angular
.module('app.services')
.factory('SignupService', function($http, BACKEND_URL) {
  return function SignupService(usuario) {
    return $http({
      method: 'POST',
      url: BACKEND_URL + '/signup',
      data: usuario
    });
  }
})
