angular
.module('app.services')
.factory('Fornecedor', function($http, BACKEND_URL) {
  var Fornecedor = {
    update: function(fornecedor){
      return $http({
        method: 'PUT',
        url: BACKEND_URL + '/fornecedor/',
        data: fornecedor
      });
    },
    load: function(fornecedor){
      return $http({
        method: 'GET',
        url: BACKEND_URL + '/fornecedor/',
        data: fornecedor
      });
    },
    save: function(fornecedor){
      return $http({
        method: 'POST',
        url: BACKEND_URL + '/fornecedor/',
        data: fornecedor
      });
    }
  };

  return Fornecedor;
});
