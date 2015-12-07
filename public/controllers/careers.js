angular
  .module('itunes')
  .controller('CareersController', function(assessment){
    console.log(assessment);
    var vm =  this;
    vm.assessment = assessment;

  
  });
