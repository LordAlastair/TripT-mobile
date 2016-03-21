angular
.module('app.routes', [])
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('menu-fornecedores', {
    url: '/menu-fornecedores',
    templateUrl: 'templates/menu-fornecedores.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'SignupCtrl'
  })

  .state('menu-fornecedores.veiculos', {
    url: '/veiculos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/veiculos.html',
        controller: 'VeiculosCtrl'
      }
    }
  })

  .state('menu-fornecedores.veiculo', {
    url: '/veiculo/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/veiculo.html',
        controller: 'VeiculoCtrl'
      }
    }
  })


  $urlRouterProvider.otherwise('/login')
});
