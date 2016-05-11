angular
.module('app.services')
.factory('Fornecedor', function($resource, BACKEND_URL) {
  var methods = {
    save: {
      method: 'POST',
      isArray: true
    }
  }

  return $resource(BACKEND_URL+'/fornecedor/');
});
