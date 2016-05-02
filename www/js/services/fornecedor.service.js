angular
.module('app.services')
.factory('Fornecedor', function($resource, BACKEND_URL) {
  var methods = {
    delete: {
      method: 'DELETE',
      isArray: true
    },
    update: {
      method: 'PUT',
      isArray: true
    }
  };

  var key = {
    for_cd_fornecedor: "@for_cd_fornecedor"
  };

  var url = BACKEND_URL + '/fornecedor/:for_cd_fornecedor'

  return $resource(url, {}, methods);
});
