/*start of wod to go JS*/


var movement1 = movement2 = movement3 = [
    "25 Air Squats",
    "15 Burpees",
    "30 Push Ups",
    "50 Sit Ups",
    "25 Lunges",
    "1 minute Forearm Plank",
    "30 Second Max Effort Tuck Jump"  
];

//Function to shuffle array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
} //end shuffle function

//Will call the shuffle function on array with variable of movement 1 and retrieve first three items
var movement = shuffle(movement1); 
var firstPrintOut = movement1[0];
var secondPrintOut = movement1[1];
var thirdPrintOut = movement1[2];


$(document).ready(function(){
    $(".leftButton").click(function(){
    $(".firstMovement").append(firstPrintOut);//.firstMovement is class  name in HTML
    $(".armLeft").slideUp("fast");
    $(".leftButton").attr("disabled",true);//disables button after clicked once
    });
});


$(document).ready(function(){
   $(".middleButton").click(function(){
    $(".secondMovement").append(secondPrintOut); //.secondMovement is class name in HTML
    $(".armMiddle").slideUp("fast");
    $(".middleButton").attr("disabled",true);//disables button after clicked once
    });
});

$(document).ready(function(){
    $(".rightButton").click(function(){
    $(".thirdMovement").append(thirdPrintOut); //.thirdMovement is class name in HTML
    $(".armRight").slideUp("fast");
    $(".rightButton").attr("disabled",true);//disables button after clicked once
    });
});

///Weather AJAX Request Below

getLocation();

function getLocation() {    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        alert("We can't find you.  Hopefully you know where you are.");
    }
};


function getCurrentPosition(position) {
      Geo.lat = position.coords.latitude;
      Geo.lng = position.coords.longitude;
}

function showPosition(position) {
    var geoLat = position.coords.latitude;
    var geoLong = position.coords.longitude;
    var key = "8704dded63fc077d";
    var WeatherURL = "http://api.wunderground.com/api/" + key + "/conditions/q/" + geoLat + "," + geoLong + ".json";


    $.ajax({
        url : WeatherURL,
        dataType : "jsonp",
        success : function(parsed_json) {
        var location = parsed_json['current_observation']['display_location']['city'];
        document.getElementById("location").innerHTML = location;
        var temp_f = parsed_json['current_observation']['temp_f'] +" F in ";
            document.getElementById("current_temp").innerHTML = temp_f;
        
        } //end success
    }); //end ajax
    
} //ends showposition function