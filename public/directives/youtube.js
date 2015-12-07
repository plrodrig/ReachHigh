angular
.module('itunes')
.directive('youtube', function($window, $rootScope) {
  return {
    restrict: "E",

    scope: {
      height:   "@",
      width:    "@",
      videoid:  "@"
    },

    template: '<div></div>',

    link: function(scope, element) {
      var player;
      console.log("this is the bit", element);
      $window.onYouTubeIframeAPIReady = function() {
          console.log("Youtube player ready!");
          player = new YT.Player(element.children()[0], {
          height: scope.height,
          width: scope.width,
          videoId: scope.videoid
        });
        window.player1 = player;
      };

      $window.onYouTubeIframeAPIReady();
    },
  }
});
