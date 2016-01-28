(function(){
    'use script';
    describe('DashboardTest', DashboardTest);
    
    function DashboardTest() {
        var $httpBackend, $rootScope;
        
        beforeEach(module('admin.dashboard'));
        beforeEach(inject(function($injector) {
            $httpBackend = $injector.get('$httpBackend');
        })
    }
})()