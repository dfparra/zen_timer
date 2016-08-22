(function() {
  angular.module('ngZen')
          .controller('SimpleController', SimpleController);

  SimpleController.$inject = ['$scope'];

  function SimpleController($scope){
    $scope.message = 'HEY ANGULAR WORKS!';
  }
}());
