var request = require('request');
var qs = require('qs');

module.exports = {
  search: function (search, callback){
    var baseUrl = 'https://www.googleapis.com/youtube/v3/search';
    var url = baseUrl + '?' + qs.stringify({
      part: 'snippet',
      q: search,
      key: 'AIzaSyD94h-QeOqU9BtRbUbShOCOT_X1MiyDpr0',
      type: 'playlist'
    });
    console.log(url);
    request(url, function(error, response, body){
      if(!error && response.statusCode === 200){
        var json = JSON.parse(body);
        callback(json.items);
      }
    });
  }
};
