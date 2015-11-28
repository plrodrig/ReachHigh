angular
  .module('itunes')
  .factory('Sokanu', function($http){
    return {
      findAllCareers: function(){
        //	return $http.get('http://www.khanacademy.org/api/v1/playlists/access-to-college/videos').then(function(response){
          //	return response.data;
        	//});
      }
    }
  });
