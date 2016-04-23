angular
.module('app.services')
.factory('SessionService', function(TOKEN_KEY, jwtHelper, $injector) {
  var SessionService = {};

  SessionService.clear = function() {
    $ionicHistory = $injector.get("$ionicHistory");

    localStorage.clear();
    // $ionicHistory.clearHistory();
  };

  SessionService.getToken = localStorage.getItem.bind(localStorage, TOKEN_KEY);
  SessionService.setToken = localStorage.setItem.bind(localStorage, TOKEN_KEY);

  SessionService.hasToken = function() {
    return !!SessionService.getToken();
  };

  SessionService.getUserData = function() {
    return jwtHelper.decodeToken(SessionService.getToken());
  };

  return SessionService;
});
