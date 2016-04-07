angular
.module('app.services')
.factory('Veiculo', ['AuthResource', function(AuthResource) {
  return AuthResource('/veiculo/:vei_cd_veiculo');
}]);
