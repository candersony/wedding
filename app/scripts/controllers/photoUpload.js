'use strict';

angular.module('weddingApp')
  .controller('PhotoUpload', function ($scope, $upload) {

    $scope.uploaderName = null;

    $scope.log = '';

    function fileUploadProgress(evt) {
      var message = 'percent: ' + parseInt(100.0 * evt.loaded / evt.total);
      console.log(message);
      $scope.log += '\n' + message;
    }
    function fileUploadSuccess (data, status, headers, config) {
      // file is uploaded successfully
      console.log(data, status, headers, config);
      $scope.log += 'success::' + JSON.stringify(data) + JSON.stringify(status) + JSON.stringify(headers) + JSON.stringify(config);
    }

    function errorHandler(data, status, headers, config){
      console.log(data, status, headers, config);
      $scope.log += 'error::' + JSON.stringify(data, null, 2) + ' ## ' + JSON.stringify(status, null, 2) + ' ## ' + JSON.stringify(headers, null, 2) + ' ## ' + JSON.stringify(config, null, 2);
    }

    $scope.$watch('name', function(name){
      $scope.showFileUploader = !!name && name.length > 1;
    });

    $scope.showFileUploader = false;
    $scope.dropSupported = true;
    $scope.onFileSelect = function($files) {
      //$files: an array of files selected, each file has name, size, and type.
      for (var i = 0; i < $files.length; i++) {
        var file = $files[i],
          fileName = $scope.name.replace(/[\s#']/, '-') + '--' + file.name;

        $scope.upload = $upload.upload({
          url: 'http://photo-upload.melindaandcraig.com.s3-eu-west-1.amazonaws.com',
          method: 'POST',
          data : {
            key: fileName,
            AWSAccessKeyId: 'AKIAILQOOG7N7YXJUVIQ',
            acl: 'private',
            policy: 'ewogICJleHBpcmF0aW9uIjogIjIwMjAtMDEtMDFUMDA6MDA6MDBaIiwKICAiY29uZGl0aW9ucyI6IFsKICAgIHsiYnVja2V0IjogInBob3RvLXVwbG9hZC5tZWxpbmRhYW5kY3JhaWcuY29tIn0sCiAgICBbInN0YXJ0cy13aXRoIiwgIiRrZXkiLCAiIl0sCiAgICB7ImFjbCI6ICJwcml2YXRlIn0sCiAgICBbInN0YXJ0cy13aXRoIiwgIiRDb250ZW50LVR5cGUiLCAiIl0sCiAgICBbInN0YXJ0cy13aXRoIiwgIiRmaWxlbmFtZSIsICIiXSwKICAgIFsiY29udGVudC1sZW5ndGgtcmFuZ2UiLCAwLCA1MjQyODgwMDBdCiAgXQp9',
            signature: 'Z81Ijk1mS0ULgplVgz8mNLECy+Q=',
            'Content-Type': file.type !== '' ? file.type : 'application/octet-stream',
            filename: fileName
          },
          file: file
        })
        .progress(fileUploadProgress)
        .success(fileUploadSuccess)
        .error(errorHandler);
      }
    };
  });
