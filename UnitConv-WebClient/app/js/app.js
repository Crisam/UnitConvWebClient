/* App Module */
    angular.module('UCDeviceList', []). //the name of the ngModule is UCDeviceList
    config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/Devices', {templateUrl: 'partials/devices-list.html', controller: DeviceListController}).
    when('/linacs', {templateUrl: 'partials/linac-list.html', controller: LinacListController}).
    when('/boosters', {templateUrl: 'partials/booster-list.html', controller: BoosterListController}).
    when('/bsts', {templateUrl: 'partials/bst-list.html', controller: BstListController}).
    when('/lbts', {templateUrl: 'partials/lbt-list.html', controller: LbtListController}).
    when('/storage_rings', {templateUrl: 'partials/storage_ring-list.html', controller: StorageRingListController}).

   // when('/songs/:', {templateUrl: 'partials/song-detail.html', controller: SongListController}).
    otherwise({redirectTo: '/devices'});
    }]);


/*
     config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    */