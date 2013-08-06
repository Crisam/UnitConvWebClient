



        var serviceurl = "http://localhost:8000/MagData/";
        function DeviceListController($scope, $http) {
        $http.get(serviceurl  + 'devices/').success(function(devices) {
        $scope.devices = devices;
            //console.log(data)



        //$scope.orderProp = 'system';

    });
    $.getJSON(serviceurl + "system/", function(systems){
        $scope.systems = systems;
    });
       /* for (var i=0, len=systemsarray.length; i < len; i++)
        {

        }


        //new array is exclusive array
   // $http.get(serviceurl  + 'devices/?system=Linac').success(function(linacSystemsdata) {
     //   $scope.linacs = exclusivelinacSystemsdata;
      //  });
        //console.log(linacSystemsdata);

       // console.log(exclusivelinacSystemsdata);

    // system data can be Booster System array only
  //  $http.get(serviceurl  + 'system/?name=Booster').success(function(boosterSystemsdata) {
    //        $scope.boosterSystemsdata = exclusiveboosterSystemsdata;
       // });


    /* system data can be LBT system array only
    $http.get(serviceurl  + 'system/?name=LBT').success(function(lbtSystemsdata) {
            $scope.lbtSystemsdata = exclusivelbtSystemsdata;
    });*/
    /* system data is BST
    $http.get(serviceurl  + 'system/?name=BST').success(function(bstSystemsdata) {
             $scope.bstSystemsdata = exclusiveBstSystemsdata;
    });*/
    /*  if system data is storage Ring
    $http.get(serviceurl  + 'system/?name=storage Ring').success(function(storageRingSystemsdata) {
            $scope.storageRingSystemsdata = exclusivestorageRingSystemsdata; //this will result
    });
     */
/*system data is null
    $http.get(serviceurl  + 'system/?name=null').success(function(missingSystemsdata) {
            $scope.missingSytemsdata = exclusivemissingSytemsdata;//if system data is null this will result
 });
 */

            //console.log(systemsdata);



        /*
        $('#systemsList').append('<option>'+systemsarray[0]+'</option>');
        $('#systemsList').append('<option>'+systemsarray[1]+'</option>');
        $('#systemsList').append('<option>'+systemsarray[2]+'</option>');
        $('#systemsList').append('<option>'+systemsarray[3]+'</option>');
        $('#systemsList').append('<option>'+systemsarray[4]+'</option>');
        $('#systemsList').append('<option>'+systemsarray[5]+'</option>');
     */


}