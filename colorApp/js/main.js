var myApp = angular.module('myModule', []);

var colorArray = ['blue', 'green', 'thistle', 'pink', 'red', 'yellow', 'lightcoral',
 'aqua', 'chartreuse','darkcyan', 'darkolivegreen','darksalmon','indianred','lightblue',
 'turquoise', 'lightseagreen','lightskyblue','cornflowerblue'];

myApp.controller('colorController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
  $scope.color = colorArray;
}]);