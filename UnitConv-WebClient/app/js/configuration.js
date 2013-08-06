
 //var myAppModule = angular.module('UCDeviceList', ["kendo.directives"]);
     
/* 
 * Configuration file for setting global variables
 * 
 * @author: Dejan Dežman <dejan.dezman@cosylab.com>
 */

               //http://localhost:8080/Olog/resources/
             //
// For accessing the REST service
var serviceurl = "http://localhost:8000/magnets/";

// For all the dates shown in client
// Mormat docs can be found at http://momentjs.com/docs/#/displaying/format/
var dateFormat = "MMMM Do YYYY, h:mm a";

// How many devices do you want to load per request?
var numberOfLogsPerLoad = 10;

// Set the name of the cookie that holds selected filters
 