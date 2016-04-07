angular
.module('app.services')
.factory('AuthService', function($http, BACKEND_URL) {
  var AuthService = function (usuario) {
    return $http({
      method: 'POST',
      url: BACKEND_URL + '/authenticate',
      data: usuario
    });
  };

  return AuthService;
})
