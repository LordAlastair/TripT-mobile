angular
.module('app.services')
.factory('SignupService', function($http, BACKEND_URL) {
  var SignupService = function (usuario) {
    return $http({
      method: 'POST',
      url: BACKEND_URL + '/usuario/signup',
      data: usuario
    });
  };

  return SignupService;
});
