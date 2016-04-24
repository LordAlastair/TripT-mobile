angular
.module('app.services')
.factory('InstituicaoService', function($http, BACKEND_URL) {
  var InstituicaoService = {
    create: function (instituicao) {
      return $http({
        method: 'POST',
        url: BACKEND_URL + '/instituicao',
        data: instituicao
      });
    },
    update: function (instituicao) {
      return $http({
        method: 'PUT',
        url: BACKEND_URL + '/instituicao/',
        data: instituicao
      });
    },
    all: function() {
        return $http({
          method: 'GET',
          url: BACKEND_URL + '/instituicao/'
        });
    }
  };

  return InstituicaoService;
});
