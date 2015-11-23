angular
  .module('itunes')
  .controller('EducationController', function(videos){
    console.log(videos);
    var vm =  this;
    vm.videos = videos;
  });
