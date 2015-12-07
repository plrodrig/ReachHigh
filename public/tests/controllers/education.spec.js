describe('EducationController', function() {
 var scope, $location, createController;
  beforeEach(inject(function($injector, $controller, $rootScope, $location){
    $location = $location;
        scope = $rootScope.$new();

        createController = function() {
            return $controller('EducationController', {
                '$scope': scope
            });
        };

   }));
   it('EducationController should have a method to check if the path is active', function() {
        var controller = createController();
        $location.path('/education');
        expect($location.path()).toBe('/education');
        expect(scope.isActive('/education')).toBe(true);
        expect(scope.isActive('/timeline')).toBe(false);
    });
});
