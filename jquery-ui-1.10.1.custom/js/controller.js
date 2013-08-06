    // declare a module
    var myAppModule = angular.module('UCDeviceList', []);

     
    //configure the module.
    // in this example we will create a greeting filter
    /*myAppModule.filter('index', function() {
    return function(name) {
    return 'Hello, ' + name + '!';
    };
    });
*/



function DeviceListController($scope, $http) {
    $http.get(serviceurl + 'devices/').success(function(data) {
        $scope.devices = data;
        $scope.limit = 20;
        $scope.orderProp = 'name';

        
        
       //console.log(data)
    });


    $http.get(serviceurl + 'system/').success(function(systems) {
        $scope.systemsdata = systems;

       //console.log(systems[2])
    });
    

}
			
function BoosterListController($scope,$http){
	 $http.get(serviceurl + 'devices/?system=booster').success(function(booster) {
        $scope.boosterDevices = booster;
        $scope.limit = 20;
        
       

        //console.log(systems[2])
        //console.log(booster)
    });
	 

}
function LinacListController($scope,$http){
	 $http.get(serviceurl + 'devices/?system=linac').success(function(linac) {
        $scope.linacDevices = linac;
        $scope.limit = 20;
                 //console.log(linac)
    });
	 

}
function BstListController($scope,$http){
	 $http.get(serviceurl + 'devices/?system=BST').success(function(bst) {
        $scope.BstDevices = bst;
        $scope.limit = 20;
                 //console.log(BST)
    });
	 
}
function LbtListController($scope,$http){
	 $http.get(serviceurl + 'devices/?system=lbt').success(function(lbt) {
        $scope.LbtDevices = lbt;
        $scope.limit = 20;
                 //console.log(lbt)
    });
	 
}
function StorageRingListController($scope,$http){
	 $http.get(serviceurl + 'devices/?system=storage Ring').success(function(storageRing) {
        $scope.storageRingDevices = storageRing;
        $scope.limit = 20;
                 //console.log(storageRing)
    });
	 
}
function listOfNamesController($scope,$http){

           $http.get(serviceurl + 'devices/?name=A1BD1').success(function(eachBoosterDevice){
            $scope.eachBoosterDevices = eachBoosterDevice;
                         });

}  

function loadDevicesControlller(devices){
    
    var searchQuery = serviceurl + 'devices/?name=A1BD1';
    console.log(searchQuery);

    $.getJSON(searchQuery, function(devices) {
        $(".log-last").remove();
       // repeatLogs("template_log", "load_logs", logs);
        appendAddMoreLog("load_logs");
        startListeningForLogClicks();
    });
}





