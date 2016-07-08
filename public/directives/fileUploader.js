/**
 * Wistia upload directive. This directive will use blueimp file upload behind the scenes
 * to upload videos into a wistia account.
 * After the video is uploaded, will show an embedded Wistia video player with the video that was uploaded.
 */
app.directive('wistiaFileUploader',
    function (apiValues, $sce) {
        return {
            restrict: 'A',
            templateUrl: '/directives/fileUploader.html',
            link: function (scope, element, attrs) {
                scope.url = '';
                scope.progress = 0;
                $('#fileupload').fileupload({
                    dataType: 'json',
                    url: apiValues.url + '?api_password=' + apiValues.password,
                    add: function (e, data) {
                        data.submit();
                    },
                    done: function (e, data) {
                        if (data.result.hashed_id) {
                            scope.$apply(function () {
                                scope.url = $sce.trustAsResourceUrl(apiValues.mediaUrl + data.result.hashed_id + '?videoFoam=true');
                            });
                        }
                    },
                    progressall: function (e, data) {
                        if (data.total > 0) {
                            scope.$apply(function () {
                                scope.progress = parseInt(data.loaded / data.total * 100, 10);
                            });
                        }
                    }
                });
               
            }
    };
});
