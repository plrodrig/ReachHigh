angular
  .module('reachHigh')
  .controller('EducationController', function($scope, $location, $window, $rootScope, videos){

    //console.log("this be videos", videos);
    var vm = this;
    vm.videos = videos;

    $scope.test = function(param) {
      window.player1 = window.player1.loadVideoById(param);
    }

    $scope.isActive == function(route){
      return route === $location.path();
    }

  });
