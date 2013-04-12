(function (angular) {
  'use strict';
  
  angular.module('logo').
  
    directive('BadgeBuilder', [
      function () {
        return {
          templateUrl: 'partials/builder'
        };
      }
    ]).

    controller('DownloadsController', [
      '$scope',

      function (scope) {
        scope.text = 'Test';
      }
    ]);
  
}(this.angular));
