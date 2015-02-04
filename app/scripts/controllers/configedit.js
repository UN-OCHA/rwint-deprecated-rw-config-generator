'use strict';

/**
 * @ngdoc function
 * @name rwConfigGeneratorApp.controller:ConfigeditCtrl
 * @description
 * # ConfigeditCtrl
 * Controller of the rwConfigGeneratorApp
 */
angular.module('rwConfigGeneratorApp')
  .controller('ConfigeditCtrl', function ($scope, $http) {
    $scope.content = [
      {
        title: 'foo',
        indicator: [
          {
            "figure": 40
          }
        ]
      },
      {
        title: 'bar'
      }
    ];

    $scope.submit = function() {
      console.log($scope.content);
      $http.post('https://api.github.com/gists', {
        "files": {
          "config.json": {
            "content": JSON.stringify($scope.content)
          }
        }
      }).
        success(function(data, status, headers) {
          console.log("Data", data);
        });
    };
  });
