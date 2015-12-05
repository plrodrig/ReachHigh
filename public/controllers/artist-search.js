angular
  .module('itunes')
  .controller('ArtistSearchController', function(iTunes, $location){
    var vm = this;
    vm.favorites = [];
    vm.previousSearches = [];
    vm.search = function() {
      //use jsonp request, get data, and bind to view in angular
      //console.log('searching...', vm.artistSearch);

      vm.loading = true;
      vm.previousSearches.push(vm.artistSearch);
      iTunes.search(vm.artistSearch).then(function(songs) {
      //  console.log("inside itunes", songs;
        vm.songs = songs[0];
//console.log(songs);
        if(songs === undefined || songs.length === 0){
            $location.path('/search');
        }else{

          $location.path('/artists/' + songs[0].artistId);
        }



        //vm.id = songs.artistId;
      //  console.log("id", id);
        vm.loading = false;
        vm.artistSearch = '';
      });
    };

    vm.favoriteSong = function(song) {
      vm.favorites.push(song);
      song.favorited = true;
    };

  });
