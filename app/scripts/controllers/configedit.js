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
    $scope.config = {
        title: '',
        dataSource: '',
        map: {},
        content: [],
        indicator: [],

      };


    $scope.addContent = function() {
      $scope.config.content.push({});
    }
    $scope.addIndicator = function() {
      $scope.config.indicator.push({data:[{}]});
    }
    $scope.addData = function(index) {
      console.log($scope.config.indicator, index)
      $scope.config.indicator[index].data.push({});
    }

    $scope.addContent();
    $scope.addIndicator();

    $scope.submit = function() {
      var content = {}

      for (var i in $scope.config.content) {
        content[camelize($scope.config.content[i].title)] = $scope.config.content[i];
      }
      $scope.config.content = content;
      $http.post('https://api.github.com/gists', {
        'files': {
          'config.json': {
            'content': JSON.stringify($scope.config)
          }
        }
      }).
        success(function(data, status, headers) {
          alert(data.html_url)
          console.log("Data", data);
        });
    };

    function camelize(str) {
      return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
        return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
      }).replace(/\s+/g, '');
    }
  });
