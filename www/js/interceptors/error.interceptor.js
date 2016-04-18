angular
.module('app.interceptors')
.factory('ErrorInterceptor', ['$q', function($q) {
  var ErrorInterceptor = {};

  ErrorInterceptor.responseError = function(response) {
    response.errors = [];

    if (!response.status)
      response.errors.push("Não foi possível entrar em contato com o servidor.");

    if (response.status > 299) {
      response.errors = response.data.map(function(error) {
        return error.msg;
      });
    }

    response.errorMessage = response.errors.join("<br>");

    return $q.reject(response);
  };

  return ErrorInterceptor;
}]);
