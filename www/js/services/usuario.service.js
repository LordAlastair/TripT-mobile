angular
.module('app.services')
.factory('Usuario', function($http, BACKEND_URL) {
  var Usuario = {
    signup: function (usuario) {
      return $http({
        method: 'POST',
        url: BACKEND_URL + '/usuario/signup',
        data: usuario
      });
    },
    authenticate: function (usuario) {
      return $http({
        method: 'POST',
        url: BACKEND_URL + '/usuario/authenticate',
        data: usuario
      });
    },
    recovery: function (usuario) {
      return $http({
        method: 'POST',
        url: BACKEND_URL + '/usuario/recovery',
        data: usuario
      })
    },
    changePass: function (usuario) {
      return $http({
        method: 'POST',
        url: BACKEND_URL + '/usuario/changepass',
        data: usuario
      })
    },
    delete: function (usuario) {
      return $http({
        method: 'DELETE',
        url: BACKEND_URL + '/usuario/',
        data: usuario
      })
    }
  };

  return Usuario;
});
