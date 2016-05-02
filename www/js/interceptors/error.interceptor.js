angular
.module('app.interceptors')
.factory('ErrorInterceptor', ['$q', '$injector', function($q, $injector) {
  var ErrorInterceptor = {};

  ErrorInterceptor.responseError = function(response) {
    var errorObject = _getErrorObject(response);

    response.errors = errorObject.errors;
    response.errorMessage = errorObject.errorMessage;

    return $q.reject(response);
  };

  function _getErrorObject(response) {
    var errorObject = {
      errors: [],
      errorMessage: null
    };

    switch (response.status) {
      case 0:
        errorObject.errors.push("Não foi possível entrar em contato com o servidor.");
        break;

      case 200:
        return;

      case 401:
        _onExpired();
        return;

      case 500:
        errorObject.errors.push("Parece que tem algum problema servidor..");
        break;
    }

    if (response.status > 299 && response.status < 500) {
      errorObject.errors = response.data.map(error => error.msg);
    }

    if (errorObject.errors.length) {
      errorObject.errorMessage = errorObject.errors.join("<br>");
    }

    return errorObject;
  }

  function _onExpired() {
    $state = $injector.get("$state");
    $ionicPopup = $injector.get("$ionicPopup");
    SessionService = $injector.get("SessionService");

    $ionicPopup
    .alert({
      title: "Tript",
      template: "Sessão expirada. Faça login novamente."
    })
    .then(() => {
      SessionService.clear();
      $state.go('login');
    });
  }

  return ErrorInterceptor;
}]);
