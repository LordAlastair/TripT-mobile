angular
.module('app.interceptors')
.factory('SessionInterceptor', ['SessionService', function(SessionService) {
  var SessionInterceptor = {};

  SessionInterceptor.request = function(config) {
    if (SessionService.hasToken()) {
      config.headers.Authorization = SessionService.getToken();
    }

    return config;
  };

  return SessionInterceptor;
}]);
