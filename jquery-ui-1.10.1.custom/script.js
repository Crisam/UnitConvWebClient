


  

/*


   $.getJSON('http://localhost:8000/magnets/devices/',function(data){
                var searchField = $('#search').val();
             
                // console.log(data);
                var output = '<ul class = "searchresults">' ;
                $.each(data,function(key,val){
                    output += '<li>';
                    output += '<h2>' + val.name + '</h2>';
                    output += '</li>';
                });
                output += '</ul>';
                $('#update').html(output);
                //console.log(output);
        });






--------------------------------
$('#search').keyup(function(){
var serviceurl = 'http://localhost:8000/magnets/devices/';
$.getJSON(serviceurl, function(data){
         var output = '<ul class = "searchresults">';
         $.each(data,function(key,val){
            output += '<li>' ;
            output += '<h2>' + val.name + '</h2>'  ;   
            output += '</li>' ;
            
         });
            output += '</ul>'
            $('#update').html(output);     //console.log(data);
});//get JSON
});


    var searchQuery = serviceurl + 'devices/?system=' //+ nameOfSystem ;//+ numberOfLogsPerLoad + '&page=' + page;
    console.log(searchQuery);

    $.getJSON(searchQuery, function(devices) {
        //$(".log-last").remove();
        //repeatLogs("template_log", "load_logs", logs);
        //appendAddMoreLog("load_logs");
        startListeningForLogClicks();
    });
}
function activateSearch(){
    // Simple search
    $("#search-button").click(function(e){
        var searchQuery = $("#search-query").val();
        
        if(searchQuery === ""){
           // page = 1;
            //loadLogs(page);
        
        } else {
            searchForDevices('search=' + searchQuery);
        }
    });
}

function searchFordevices(searchQuery) {
    searchQuery = serviceurl + searchQuery + 'devices/?system='//+ 'logs?' + searchQuery + 'limit=' + numberOfLogsPerLoad + '&page=' + page;
    console.log(searchQuery);
    
    // Load logs
    $.getJSON(searchQuery, function(logs) {
        $(".log-last").remove();
        $(".log").remove();
        repeatLogs("template_log", "load_logs", logs);
        startListeningForLogClicks();
    });
}

function buildSearchLanguage(value){
    
    var searchString = "";
    var filterType = "";
    var remainder = "";
    
    var re = new RegExp("(tag:|logbook:|from:|to:)(.*)", "i");
    var searchParts = re.exec(value);
    
    if(searchParts === null) {
        searchString = value;
    
    } else {
        filterType = searchParts[1];
        searchString = value.split(filterType)[0];
        remainder = searchParts[2];
    }
    
    return [searchString, filterType, remainder];
}

function parseSearchQuery(){
    var value = $("#search-query").val();
    
    var parsedStringParts = buildSearchLanguage(value);
    console.log(parsedStringParts);
    
    while (parsedStringParts[1] !== "") {
        parsedStringParts = buildSearchLanguage(parsedStringParts[2]);
        //console.log(parsedStringParts);
    }
}

/**
 * Generate search input string and search query
 * @param {type} dataArray currently selected logbooks and tags
 * @returns {undefined}
 *
function generateSearchQuery(dataArray) {
    var value = $("#search-query").val();
    var queryString = "";
    
    var parsedStringParts = buildSearchLanguage(value);
    
    var newValue = parsedStringParts[0];
    
    // Append general search to a search query
    if(newValue !== ""){
        queryString += "search=" + newValue + '&';
    }
    
    // If at least one logbook is selected, append logbook part to a search query
    if(dataArray['list'] !== undefined && dataArray['list'].length !== 0){
        newValue += "logbook: " + dataArray['list'] + ' ';
        queryString += "logbook=" + dataArray['list'] + '&';
    }
    
    // If at least one tag is selected, append tag part to a search query
    if(dataArray['list2'] !== undefined && dataArray['list2'].length !== 0){
        newValue += "tag: " + dataArray['list2'] + ' ';
        queryString += "tag=" + dataArray['list2'] + '&';
    }
    
    $("#search-query").val(newValue);
    searchForLogs(queryString);
}

*/
