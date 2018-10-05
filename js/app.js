angular.module('thetixs', [])
  .controller("tixsAppCtrl", tixsController);

function tixsController(){
  //esta función es mi controlador
  var scope = this;
  var scope.countries = [];
$http({
  method: 'GET',
  url: 'https://restcountries.eu/rest/v1/all'
}).then(function successCallback(response) {

  scope.countries = response.data;
  console.log("Success",response);
  
}, function errorCallback(response) {

  console.log("Error Countries",response);
  
});


  scope.total = 0;

  scope.cuanto = 0;

  scope.sumar = function(){
    scope.total += parseInt(scope.cuanto);
  }
  scope.restar = function(){
    scope.total -= parseInt(scope.cuanto);
  }
};