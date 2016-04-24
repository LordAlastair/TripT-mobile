angular
.module('app.services')
.factory('ClienteService', function($http, BACKEND_URL) {
  var ClienteService = {
    create: function (cliente) {
      return $http({
        method: 'POST',
        url: BACKEND_URL + '/cliente',
        data: cliente
      });
    },
    update: function (cliente) {
      return $http({
        method: 'PUT',
        url: BACKEND_URL + '/cliente/',
        data: cliente
      });
    },
    load: function(cliente) {
        return $http({
          method: 'GET',
          url: BACKEND_URL + '/cliente/',
          data: cliente
        });
    }
  };

  return ClienteService;
});
