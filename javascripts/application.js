(function (angular) {
  'use strict';

  angular.module('logo', [
    'ng'
  ]).

    factory('contents', [
      '$http',

      function ($http) {
        var contents = {};

        $http.$get('README.html', function (data) {
          contents['data'] = data;
        });

        return contents;
      }
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
      'contents',

      function (scope, contents) {
        scope.text = contents.data;
      }
    ]);

}(this.angular));
