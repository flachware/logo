(function (angular) {
  'use strict';

  angular.module('logo', [
    'ng'
  ]).

    factory('contents', [
      '$http',

      function ($http) {
        var contents = {};

        $http.get('README.html').then(function (response) {
          contents['data'] = response.data;
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
        scope.contents = contents;
      }
    ]);

}(this.angular));
