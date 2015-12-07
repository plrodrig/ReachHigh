describe('timelineController', function() {
 var scope, $location, createController;
  beforeEach(inject(function($injector, $controller, $rootScope, $location){
    $location = $location;
        scope = $rootScope.$new();

        createController = function() {
            return $controller('TimelineController', {
                '$scope': scope
            });
        };

   }));
   it('TimelineController should have a method to check if the path is active', function() {
        var controller = createController();
        $location.path('/timeline');
        expect($location.path()).toBe('/timeline');
        expect(scope.isActive('/timeline')).toBe(true);
        expect(scope.isActive('/education')).toBe(false);
    });
});
