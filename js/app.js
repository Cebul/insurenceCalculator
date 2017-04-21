var myApp = angular.module('myApp', []);

myApp.controller('OptionCtrl', function OptionCtrl($scope) {

  $scope.rates = [
    {id: 1, compar: '100-­1000 PLN',amount: 20},
    {id: 2, compar: '1001­-3000 PLN',amount: 70},
    {id: 3, compar: '3001­-6000 PLN',amount: 130},
    {id: 4, compar: '6001­-9000 PLN',amount: 180},
    {id: 5, compar: '9001­-20000 PLN',amount: 200}
  ];
  $scope.misches = [ 
    {id:1, description: 'Bezszkodowe ubezpieczenie', discount: 0.95},
    {id:2, description: 'Wystąpienie szkody w okresie ubezpieczenia', discount: 1.08 }
  ];
  $scope.payments = [
    {id:1, description:'Jednorazowa', discount: 0.98},
    {id:2, description:'Dwie raty', discount: 1},
    {id:3, description:'Cztery raty', discount: 1.04}
  ];

  $scope.quota = function($scope) {
    var x;
    var quo = '';
    for(x in $scope.rates) {
      quo = x.amount;
      
    }
    return quo;
  }

  $scope.result = function() {
    var data = {
      rat: $scope.rat.amount,
      misch: $scope.misch.discount,
      payment: $scope.payment.discount
    }

    $scope.myResult = Math.ceil((data.rat*data.misch)*data.payment) + " PLN";
  }

});