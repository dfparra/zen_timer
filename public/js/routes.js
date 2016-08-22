(function() {
  angular.module('ngZen')
          .config(RouteConfig);

  RouteConfig.$inject = ['$routeProvider'];

  function RouteConfig($routeProvider){
    $routeProvider

    .when('/', {
      templateUrl: 'html/views/home.html',
      controller: 'HomeController'
    })
    .otherwise({
      redirectTo: '/'
    });



  }
}());
