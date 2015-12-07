angular
  .module('reachHigh')
  .factory('KhanAcademy', function($http){
    return {
      findAllEduVideos: function(){
        	return $http.get('https://www.khanacademy.org/api/v1/playlists/access-to-college/videos').then(function(response){
          	return response.data;
        	});
      }
    }
  });
