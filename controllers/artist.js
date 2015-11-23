angular
  .module('itunes')
  .controller('ArtistController', function(id, $http, $route, $location){
    var vm = this;
    var url = 'https://itunes.apple.com/lookup?id=' + id + '&entity=album&callback=JSON_CALLBACK';

    $http.jsonp(url).then(function(response){

      vm.albums = [];
      vm.albums2 = [];
      var artist = response.data;
    //  console.log("Resonse from server: " + JSON.stringify(artist))
      if (artist === undefined || artist.resultCount === 0) {
        $location.path('/search');
      }

    //  console.log("promise resolved", artist.results);
      artist.results.forEach(function(a){
        //console.log
        if(a.wrapperType === 'collection'){
        //  console.log(a.collectionName);
          vm.albums.push(a.collectionName);
          vm.albums2.push(a);
        }
     });
   }, function(response) {
     console.log("Unable to communicate with iTunes API");
     $location.path('/search');
   });
   vm.favorite = function(album){
     console.log('saving...');
     console.log(album);
     localStorage.setItem(album.collectionId, JSON.stringify(album));
   };
});
