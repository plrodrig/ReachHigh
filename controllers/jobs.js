angular
  .module('itunes')
  .controller('JobsController', function(jobs){
    console.log(jobs);
    var vm =  this;
    vm.jobs = jobs;
  });
