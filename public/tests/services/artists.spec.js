/*describe("artists service", function() {
  var artists, $httpBackend;

  beforeEach(module('music-app'));
  beforeEach(inject(function($injector) {
    artists = $injector.get('artists');
    $httpBackend = $injector.get('$httpBackend');

    $httpBackend
      .whenGET('https://itp-api.herokuapp.com/artists')
      .respond(200, {
        artists: [
          {
            id: 1,
            artistName: "The Offspring"
          },
          {
            id: 2,
            artistName: "Pennywise"
          },
          {
            id: 3,
            artistName: "Eminem"
          }
        ]
      });
  }));

  it("findAll() should return an array of artists", function() {
    artists.findAll().then(function(allArtists) {
      expect(allArtists.length).toEqual(3);
    });

    $httpBackend.flush();
  });
});*/
