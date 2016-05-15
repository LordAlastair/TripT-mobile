angular
.module('app')
.constant('BACKEND_URL', 'http://botocudo.fluxor.org:3000')// http://localhost:3000')
.constant('TOKEN_KEY', "token")
.constant('TIPO_PESSOA', {
  FISICA: 1,
  JURIDICA: 2
})
.constant('TIPO_TRANSPORTE', {
  ESCOLAR: 1,
  VIAGEM: 2,
  AMBOS: 3
})
.constant('$ionicLoadingConfig', {
  template: '<ion-spinner icon="ripple" class="spinner-positive"></ion-spinner>'
});
