(function (angular) {
  'use strict';

  angular.module('logo', [
    'ng'
  ]).

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
