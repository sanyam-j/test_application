
//Factory
// test.factory('Home', ['$resource',function($resource){
//   return $resource("/", {},{
//     query: { method: 'GET', isArray: true },
//   })
// }]);


//Controllers
test.controller("HomeController", ['$scope', function($scope){

  $scope.text_1 = "skjlndkj;kjdbnkj ksdnk;s km.j.j"

}]);

//Routes
test.config([
  '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when("/",{
      templateUrl: 'home/index.html'
    });
    $routeProvider.otherwise({
      redirectTo: '/'
    });
  }
]);
