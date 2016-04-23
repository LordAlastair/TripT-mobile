angular
.module('app.services')
.factory('FornecedorService', function($http, BACKEND_URL) {
  var FornecedorService = {
    create: function (fornecedor) {
      return $http({
        method: 'POST',
        url: BACKEND_URL + '/fornecedor',
        data: fornecedor
      });
    },
    update: function (fornecedor) {
      return $http({
        method: 'PUT',
        url: BACKEND_URL + '/fornecedor/',
        data: fornecedor
      });
    },
    load: function(fornecedor) {
        return $http({
          method: 'GET',
          url: BACKEND_URL + '/fornecedor/',
          data: fornecedor
        });
    }
  };

  return FornecedorService;
});
