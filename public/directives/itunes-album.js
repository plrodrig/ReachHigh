angular
  .module('itunes')
  .directive('itunesAlbum', function(){
    //DDO directive definition object
    return {
      restrict: 'E',
      templateUrl: '/templates/directives/itunes-album.html',
      //isolate scope
      scope:{
        album: '=',
        click: '&'
      },
    };
  });
