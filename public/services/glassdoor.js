angular
 .module('reachHigh')
 .factory('Glassdoor', function($http) {
 return {
   findAllJobs: function() {
     var base = 'https://api.glassdoor.com/api/api.htm?';
     var ip ='192.168.43.42';
     var tp = 48886;
     var tk = 'eedS6gVRSCm';
    var useragent = 'Mozilla/%2F4.0';
     var url = base + 't.p=' + tp + '&t.k=' + tk + '&userip=' + ip + '&useragent=' + useragent +
     '&format=json&v=1&action=jobs-prog&countryId=1&jobTitle=software&callback=JSON_CALLBACK';

     return $http.jsonp(url).then(function(response) {
        return response.data.response;
     });
   },
   findASelectedJobPath: function(jobTitle){
     var base = 'https://api.glassdoor.com/api/api.htm?';
     var ip ='192.168.43.42';
     var tp = 48886;
     var tk = 'eedS6gVRSCm';
    var useragent = 'Mozilla/%2F4.0';
     var url = base + 't.p=' + tp + '&t.k=' + tk + '&userip=' + ip + '&useragent=' + useragent +
     '&format=json&v=1&action=jobs-prog&countryId=1&jobTitle=' + jobTitle + '&callback=JSON_CALLBACK';
  //   console.log(url);
     return $http.jsonp(url).then(function(response) {
        return response.data.response;
     });
   }
 };
});
