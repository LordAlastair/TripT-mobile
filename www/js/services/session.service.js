angular
.module('app.services')
.factory('SessionService', function(TOKEN_KEY, jwtHelper) {
  var SessionService = {};

  SessionService.clear = localStorage.clear.bind(localStorage);
  SessionService.getToken = localStorage.getItem.bind(localStorage, TOKEN_KEY);
  SessionService.setToken = localStorage.setItem.bind(localStorage, TOKEN_KEY);

  SessionService.hasToken = function() {
    return !!SessionService.getToken();
  };

  SessionService.getUserData = function() {
    return jwtHelper.decodeToken(SessionService.getToken());
  };

  /**
   * Método que faz desse objeto um Interceptor $http.
   *
   * @param config Objeto de configuracao do $http
   */
  SessionService.request = function(config) {
    if (SessionService.hasToken()) {
      config.headers.Authorization = SessionService.getToken();
    }

    return config;
  };

  return SessionService;
});
