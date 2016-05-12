angular
.module('app.services')
.factory('Cliente', function($http, BACKEND_URL) {
  var Cliente = {
    update: function(cliente){
      return $http({
        method: 'PUT',
        url: BACKEND_URL + '/cliente/',
        data: cliente
      });
    },
    load: function(cliente){
      return $http({
        method: 'GET',
        url: BACKEND_URL + '/cliente/',
        data: cliente
      });
    },
    save: function(cliente){
      return $http({
        method: 'POST',
        url: BACKEND_URL + '/cliente/',
        data: cliente
      });
    }
  };

  return Cliente;
});
