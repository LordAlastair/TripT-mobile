angular
.module('app.services')
.factory('SessionService', function(TOKEN_KEY, jwtHelper) {
  var SessionService = {};

  SessionService.clear = localStorage.clear.bind(localStorage);
  SessionService.getToken = localStorage.getItem.bind(localStorage, TOKEN_KEY);

  SessionService.setToken = function(token) {
    localStorage.setItem(TOKEN_KEY, token);
  };

  SessionService.hasToken = function() {
    return !!SessionService.getToken();
  };

  SessionService.getUserData = function() {
    return jwtHelper.decodeToken(SessionService.getToken());
  };

  return SessionService;
});
