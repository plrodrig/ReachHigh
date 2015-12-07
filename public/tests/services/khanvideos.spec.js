describe("khanvideos service", function(){
  beforeEach(module('reachHigh'));
  beforeEach(inject(function($injector){
    videos = $injector.get('videos');
    $httpBackend = $injector.get('$httpBackend');
  }));

  it("findAllEduVideos() should return an array of videos", function(){
    videos.findAllEduVideos().then(function(allVideos){
      expect(allVideos.length).toEqual(6);
    });
    $httpBackend.flush();
  });
});
