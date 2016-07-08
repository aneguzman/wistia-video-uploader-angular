describe('Unit testing WistiaFileUpload directive', function () {

    var $compile, $rootScope;

    // Load the wistiaFileUpload module, which contains the directive
    beforeEach(module('wistiaUploader'));

    beforeEach(module('public/directives/fileUploader.html'));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$rootScope_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('Replaces the element with the appropriate content', function() {
        // Compile a piece of HTML containing the directive
        var element = $compile("<div wistia-file-uploader></div>")($rootScope);
        // fire all the watches
        $rootScope.$digest();

        // Check that the compiled element contains the templated content
        expect(element.find('form')).toBeDefined();
        expect(element.find('form').attr('id')).toBe('fileupload');
        expect(element.find('input').attr('name')).toBe('files[]');
    });
    
})