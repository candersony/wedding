'use strict';

angular.module('weddingApp')
  .controller('PhotoUpload', function ($scope, $upload) {

    $scope.uploaderName = null;

    $scope.$watch('uploaderName', function(uploaderName){
      $scope.showFileUploader = !!uploaderName && uploaderName.length > 1;
    });

    $scope.showFileUploader = false;
    $scope.dropSupported = true;

    $scope.files = [];

    function FileView(file, uploaderName){
      this.file = file;
      this.uploaderName = uploaderName;
    }

    FileView.prototype.startUpload = function(){
      var fileName = this.uploaderName.replace(/[\s#']/, '-') + '--' + this.file.name;

      $upload.upload({
        url: 'http://photo-upload.melindaandcraig.com.s3-eu-west-1.amazonaws.com',
        method: 'POST',
        data : {
          key: fileName,
          AWSAccessKeyId: 'AKIAILQOOG7N7YXJUVIQ',
          acl: 'private',
          policy: 'ewogICJleHBpcmF0aW9uIjogIjIwMjAtMDEtMDFUMDA6MDA6MDBaIiwKICAiY29uZGl0aW9ucyI6IFsKICAgIHsiYnVja2V0IjogInBob3RvLXVwbG9hZC5tZWxpbmRhYW5kY3JhaWcuY29tIn0sCiAgICBbInN0YXJ0cy13aXRoIiwgIiRrZXkiLCAiIl0sCiAgICB7ImFjbCI6ICJwcml2YXRlIn0sCiAgICBbInN0YXJ0cy13aXRoIiwgIiRDb250ZW50LVR5cGUiLCAiIl0sCiAgICBbInN0YXJ0cy13aXRoIiwgIiRmaWxlbmFtZSIsICIiXSwKICAgIFsiY29udGVudC1sZW5ndGgtcmFuZ2UiLCAwLCA1MjQyODgwMDBdCiAgXQp9',
          signature: 'Z81Ijk1mS0ULgplVgz8mNLECy+Q=',
          'Content-Type': this.file.type !== '' ? this.file.type : 'application/octet-stream',
          filename: fileName
        },
        file: this.file
      })
      .progress(this.updateProgress())
      .success(this.uploadSuccess())
      .error(this.uploadFailed());
    };

    FileView.prototype.updateProgress = function() {
      var self = this;
      return function(event) {
        self.progress = parseInt(100.0 * event.loaded / event.total) + '%';
      };
    };

    FileView.prototype.uploadSuccess = function() {
      var self = this;
      return function() {
        self.uploadCompelte = true;
      };
    };

    FileView.prototype.uploadFailed = function() {
      var self = this;
      return function(data, status, headers, config) {
        self.uploadCompelte = false;
        self.errorOccured = true;
        self.error = {
          data: data,
          status: status,
          headers: headers,
          config: config
        }
      };
    };

    $scope.onFileSelect = function($files) {

      angular.forEach($files, function(file){
        $scope.files.push(new FileView(file, $scope.uploaderName));
      });
    };
  });
