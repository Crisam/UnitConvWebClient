'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }]);
      function PhoneListCtrl($scope) {
    $scope.phones = [
    {"name": "Nexus S",
    "snippet": "Fast just got faster with Nexus S."},
    {"name": "Motorola XOOM™ with Wi-Fi",
    "snippet": "The Next, Next Generation tablet."},
    {"name": "MOTOROLA XOOM™",
    "snippet": "The Next, Next Generation tablet."}
    ];
    }
        function HelloCntl($scope) {
    $scope.hello = 'World';
    }