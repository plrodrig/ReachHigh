angular
 .module('itunes')
 .factory('Glassdoor', function($http) {
 return {
   findAllJobs: function() {
     var base = 'http://api.glassdoor.com/api/api.htm?';
     //var ip = '68.181.206.254';
     var ip ='192.168.43.42';
     var tp = 48886;
     var tk = 'eedS6gVRSCm';
    // var useragent = 'Mozilla/5.0';
    var useragent = 'Mozilla/%2F4.0';
     var url = base + 't.p=' + tp + '&t.k=' + tk + '&userip=' + ip + '&useragent=' + useragent +
     '&format=json&v=1&action=jobs-stats&returnStates=true&admLevelRequested=1&callback=JSON_CALLBACK';

     return $http.jsonp(url).then(function(response) {
        return response.data;
     });
   }//end findAllJobs function
 };
});

/*

http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=48886&t.k=eedS6gVRSCm&action=employers&q=pharmaceuticals&userip=192.168.43.42&useragent=Mozilla/%2F4.0

 angular
 	.module('itunes')
 	.factory('iTunes', function($http) {
  return {
    search: function(artist) {
      var url = 'https://itunes.apple.com/search?term='+ artist +'&callback=JSON_CALLBACK';

      return $http.jsonp(url).then(function(response) {
    //    console.log(response);
         return response.data.results;
      });
    }
  };
});*/


/*
angular
 .module('itunes')
 .factory('Glassdoor', function($http) {
 return {
   findAllJobs: function() {
     var base = 'http://api.glassdoor.com/api/api.htm?';
     //var ip = '68.181.206.254';
     var ip ='192.168.43.42';
     var tp = 48886;
     var tk = 'eedS6gVRSCm';
    // var useragent = 'Mozilla/5.0';
    var useragent = 'Mozilla/%2F4.0';
     var url = base + 't.p=' + tp + '&t.k=' + tk + '&userip=' + ip + '&useragent=' + useragent +
     '&format=json&v=1&action=jobs-stats&returnStates=true&admLevelRequested=1';

     return $http.get(url).then(function(response) {
        return response.data;
     });
   }//end findAllJobs function
 };
});
*/
