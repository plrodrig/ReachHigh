angular
  .module('itunes')
  .controller('JobsController', function(jobs, selectedJobs,  Glassdoor){
  //  console.log(jobs);
    var vm =  this;
    vm.jobs = jobs;
    vm.selectedJobs = selectedJobs;
    vm.search = function() {
      Glassdoor.findAllJobs().then(function(songs) {
//        console.log(songs);
        vm.jobs = songs;
      });
    };
    vm.findAllJobs = function() {
      Glassdoor.findASelectedJobPath(vm.jobSearch).then(function(jobs) {
        //console.log(jobs);
        vm.pickedJobs = jobs;
      });
    };
  });
