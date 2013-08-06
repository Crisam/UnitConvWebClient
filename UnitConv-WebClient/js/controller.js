    // declare a module
    var myAppModule = angular.module('UCDeviceList', []);
     
    // configure the module.
    // in this example we will create a greeting filter
    /*myAppModule.filter('index', function() {
    return function(name) {
    return 'Hello, ' + name + '!';
    };
    });
*/


function DeviceListController($scope, $http) {
    $http.get('http://localhost:8000/magnets/devices/').success(function(data) {
        $scope.devices = data;
       // console.log(data)
    });


    $http.get('http://localhost:8000/magnets/system/').success(function(systems) {
        $scope.systemsdata = systems;

     //   console.log(systems)
    });
    

}
			
function BoosterListController($scope,$http){
	 $http.get('http://localhost:8000/magnets/devices/?system=booster').success(function(booster) {
        $scope.boosterDevices = booster;
       // console.log(booster)
    });
	 

}
function LinacListController($scope,$http){
	 $http.get('http://localhost:8000/magnets/devices/?system=linac').success(function(linac) {
        $scope.linacDevices = linac;
       // console.log(linac)
    });
	 

}
function BstListController($scope,$http){
	 $http.get('http://localhost:8000/magnets/devices/?system=BST').success(function(bst) {
        $scope.BstDevices = bst;
       // console.log(linac)
    });
	 
}
function LbtListController($scope,$http){
	 $http.get('http://localhost:8000/magnets/devices/?system=lbt').success(function(lbt) {
        $scope.LbtDevices = lbt;
       // console.log(lbt)
    });
	 
}
function StorageRingListController($scope,$http){
	 $http.get('http://localhost:8000/magnets/devices/?system=storage Ring').success(function(storageRing) {
        $scope.storageRingDevices = storageRing;
       // console.log(storageRing)
    });
	 
}




