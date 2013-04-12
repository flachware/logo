(function (angular) {
  'use strict';
  
  angular.module('logo').
  
    controller('DownloadsController', [
      '$scope',

      function (scope) {
        scope.text = 'Test';
      }
    ]);
  
}(this.angular));
