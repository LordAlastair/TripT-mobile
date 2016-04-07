angular
.module('app.modules')
.factory('AuthResource', ['$resource', 'BACKEND_URL', function($resource, BACKEND_URL) {
  var AuthResource = function(uri) {
    var token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Usuário não autenticado.")
    }

    var headers = {
      Authorization: token
    };

    var methods = {
      'get':    {method:'GET', headers: headers},
      'save':   {method:'POST', headers: headers},
      'query':  {method:'GET', isArray:true, headers: headers},
      'remove': {method:'DELETE', headers: headers},
      'delete': {method:'DELETE', headers: headers}
    };

    return $resource(BACKEND_URL + uri, null, methods);
  };

  return AuthResource;
}]);
