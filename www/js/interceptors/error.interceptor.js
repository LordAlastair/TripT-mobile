angular
.module('app.interceptors')
.factory('ErrorInterceptor', ['$q', '$injector', function($q, $injector) {
  var ErrorInterceptor = {};

  ErrorInterceptor.responseError = function(response) {
    response.errors = [];
    console.log(response);
    switch (response.status) {
      case 0:
        response.errors.push("Não foi possível entrar em contato com o servidor.");
        break;

      case 401:
        _onExpired();
        break;

      case 500:
        response.errors.push("Parece que tem algum problema servidor..");
        break;
    }

    if (response.status > 299 && response.status < 500) {
      response.errors = response.data.map(function(error) {
        return error.msg;
      });
    }

    if (response.errors.length) {
      response.errorMessage = response.errors.join("<br>");
    }

    return $q.reject(response);
  };

  function _onExpired() {
    $state = $injector.get("$state");
    $ionicPopup = $injector.get("$ionicPopup");
    SessionService = $injector.get("SessionService");

    $ionicPopup
    .alert({
      title: "Tript",
      template: "Sessão expirada. Faça login novamente."
    })
    .then(function() {
      SessionService.clear();
      $state.go('login');
    });
  }

  return ErrorInterceptor;
}]);
