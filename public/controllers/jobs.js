angular
  .module('itunes')
  .controller('JobsController', function(jobs, selectedJobs,  Glassdoor, iTunes){
    console.log(jobs);
    var vm =  this;
    vm.jobs = jobs;
    vm.selectedJobs = selectedJobs;
    vm.search = function() {
      console.log("DERP");
      //modify glassdoor
      Glassdoor.findAllJobs().then(function(songs) {
        console.log(songs);
        vm.jobs = songs;
        //clear out data structure&textbox
      });
    };
    /*Find's the user's specified job. This is different From Glassdoor.findAllJobs because
    that one is tied to Sokanu's Search Results*/
    vm.findAllJobs = function() {
      Glassdoor.findASelectedJobPath(vm.jobSearch).then(function(jobs) {
        console.log("inside itunes", jobs);
        vm.pickedJobs = jobs;
      });
    };
  });
