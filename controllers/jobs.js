angular
  .module('itunes')
  .controller('JobsController', function(jobs, Glassdoor){
    console.log(jobs);
    var vm =  this;
    vm.jobs = jobs;
    vm.search = function() {
      console.log("DERP");
      //modify glassdoor
      Glassdoor.findAllJobs().then(function(songs) {
        console.log(songs);
        vm.jobs = songs;
        //clear out data structure&textbox
      });
    };
  });
