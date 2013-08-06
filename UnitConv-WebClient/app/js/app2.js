var myApp = angular.module('myApp', []);

myApp.factory('Avengers', function () {
    var Avengers = {};
    Avengers.cast = [{
        Name: "Robert Downey Jr.",
        Character: "Tony Stark / Iron Man"
    }, {
        Name: "Chris Evans",
        Character: "Steve Rogers / Captain America}"
    }, {
        Name: "Mark Ruffalo",
        Character: "Bruce Banner / The Hulk"
    }, {
        Name: "Chris Hemsworth",
        Character: "Thor"
    }, {
        Name: "Scarlett Johansson",
        Character: "Natasha Romanoff / Black Widow"
    }, {
        Name: "Jeremy Renner",
        Character: "Clint Barton / Hawkeye"
    }, {
        Name: "Tom Hiddleston",
        Character: "Loki"
    }, {
        Name: "Clark Gregg",
        Character: "Agent Phil Coulson"
    }, {
        Name: "Cobie Smulders",
        Character: "Agent Maria Hill"
    }, {
        Name: "Stellan Skarsgard",
        Character: "Selvig"
    }, {
        Name: "Samuel L. Jackson",
        Character: "Nick Fury"
    }, {
        Name: "Gwyneth Paltrow",
        Character: "Pepper Potts"
    }, {
        Name: "Paul Bettany",
        Character: "Jarvis (voice)"
    }, {
        Name: "Alexis Denisof",
        Character: "The Other"
    }, {
        Name: "Tina Benko",
        Character: "NASA Scientist"
    }].sort(function (x, y) {
            return ((x.Name == y.Name) ? 0 : ((x.Name > y.Name) ? 1 : -1))
        });

    return Avengers;
});

function AvengersCtrl($scope, Avengers) {
    $scope.avengers = Avengers;

    $scope.castKeys = getUniqueKeys($scope.avengers.cast);

    $scope.castKeysValue = $scope.castKeys[0];

    $scope.totalKeys = $scope.castKeys.length;

}

function getUniqueKeys(arr) {
    var key, keys = [];
    var L = arr.length;
    for (var i = 0; i < L; i++) {
        var obj = arr[i];
        for (var j in obj) {
            if (keys.indexOf(j) < 0) {
                keys.push(j);
            }
        }
    }
    //console.log(keys);

    return keys;
}