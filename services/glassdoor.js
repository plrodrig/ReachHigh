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
     //'&format=json&v=1&action=jobs-stats&returnStates=true&admLevelRequested=1&callback=JSON_CALLBACK';
     '&format=json&v=1&action=jobs-prog&countryId=1&jobTitle=software&callback=JSON_CALLBACK';

     return $http.jsonp(url).then(function(response) {
        return response.data.response;
     });
   },//end findAllJobs function
   findASelectedJobPath: function(jobTitle){
     console.log("Val of jobtitle", jobTitle);
     //if(jobTitle === "" || jobTitle === 'Undefined'){
        //console.log("Not valid");
       //jobTitle = "software";
     //}
     console.log("The correct find All");
     var base = 'http://api.glassdoor.com/api/api.htm?';
     //var ip = '68.181.206.254';
     var ip ='192.168.43.42';
     var tp = 48886;
     var tk = 'eedS6gVRSCm';
    // var useragent = 'Mozilla/5.0';
    var useragent = 'Mozilla/%2F4.0';
     var url = base + 't.p=' + tp + '&t.k=' + tk + '&userip=' + ip + '&useragent=' + useragent +
     //'&format=json&v=1&action=jobs-stats&returnStates=true&admLevelRequested=1&callback=JSON_CALLBACK';
     '&format=json&v=1&action=jobs-prog&countryId=1&jobTitle=' + jobTitle + '&callback=JSON_CALLBACK';

     return $http.jsonp(url).then(function(response) {
        return response.data.response;
     });
   }
 };
});
/*http://api.glassdoor.com/api/api.htm?t.p=48886&t.k=eedS6gVRSCm&userip=192.168.43.42&useragent=&format=json&v=1&action=jobs-stats&admLevelRequested=1&returnEmployers=true&returnJobTitles=true&city=los-angeles(/)
/*

http://api.glassdoor.com/api/api.htm?t.p=48886&t.k=eedS6gVRSCm&userip=0.0.0.0&useragent=&format=json&v=1&action=jobs-prog&countryId=1&jobTitle=software

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
