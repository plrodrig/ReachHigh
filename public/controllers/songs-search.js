//global vars are bad
//too many can clash and create diifficult bugs
angular
  .module('itunes')
  .controller('SongsSearchController', function(iTunes) {
  var vm = this;


  vm.favorites = [];
  vm.previousSearches = [];
  vm.search = function() {

    vm.loading = true;
    vm.previousSearches.push(vm.artistSearch);
    iTunes.search(vm.artistSearch).then(function(songs) {
      vm.songs = song;
      vm.loading = false;
      vm.artistSearch = '';
    });
  };

  vm.favoriteSong = function(song) {
    vm.favorites.push(song);
    song.favorited = true;
  };
});
