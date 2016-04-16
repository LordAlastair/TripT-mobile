angular
.module('app.services')
.factory('UsuarioService', function($http, BACKEND_URL) {
  var UsuarioService = {
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
    recovery: function(usuario){
      return $http({
        method: 'POST',
        url: BACKEND_URL + '/usuario/recovery',
        data: usuario
      })
    },
    changepass: function(usuario){
      return $http({
        method: 'POST',
        url: BACKEND_URL + '/usuario/changepass',
        data: usuario
      })
    }
  };

  return UsuarioService;
});
