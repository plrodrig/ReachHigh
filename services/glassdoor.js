angular
 .module('itunes')
 .factory('Glassdoor', function($http) {
 return {
   findAllJobs: function() {
     var base = 'http://api.glassdoor.com/api/api.htm?';
     var ip = '68.181.206.254';
     var tp = 48886;
     var tk = 'eedS6gVRSCm';
     var useragent = 'Mozilla/5.0';
     var url = base + 't.p=' + tp + '&t.k=' + tk + '&userip=' + ip + '&useragent=' + useragent +
     '&format=json&v=1&action=jobs-stats&returnStates=true&admLevelRequested=1';

     return $http.get(url).then(function(response) {
        return response.data;
     });
   }//end findAllJobs function
 };
});
/*angular
  .module('itunes')
  .factory('Glassdoor', function($http){
    return {
      findAllJobs: function(){
        return $http
        .get('http://api.glassdoor.com/api/api.htm?', {
          params:
            {
              t.k:eedS6gVRSCms
             }
        });
      }
    }
*/
