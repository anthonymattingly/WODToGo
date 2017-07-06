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


var i = Math.floor(Math.random() * movement1.length);
var j = Math.floor(Math.random() * movement2.length);
var k = Math.floor(Math.random() * movement3.length);

//code block below ensures movement is not duplicated
if(i==j || i==k || j==k){
var firstPrintOut = movement1[i+1];
var secondPrintOut = movement2[j-1];
var thirdPrintOut = movement3[k+2];     
} else {
var firstPrintOut = movement1[i];
var secondPrintOut = movement2[j];
var thirdPrintOut = movement3[k];   
}


$(document).ready(function(){
    $(".leftButton").click(function(){
    $(".firstMovement").append(firstPrintOut);
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

/*var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function (){
if(xhr.readyState === 4){
weatherFunction(xhr.onreadystatechange);
}
    

function weatherFunction(){
    var r = JSON.parse(xhr.responseText); //r holds value of JSON weather response
    var dis = "Current location: " + r.current_observation.display_location.full + "  <p>";
    var temp = r.current_observation.temperature_string+ "  <p>";
    document.getElementById("weather").innerHTML= dis;
    document.getElementById("temp").innerHTML= temp;
  }  //end weatherFunction
};   //end xhr.onreadystatechange

xhr.open("GET", "http://api.wunderground.com/api/8704dded63fc077d/conditions/q/KY/Louisville.json");
xhr.send();*/



/*getLocation();

function getLocation() {    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        alert("We can't find you.  Hopefully you know where you are.");
    }
}


function getCurrentPosition(position) {
      Geo.lat = position.coords.latitude;
      Geo.lng = position.coords.longitude;
}

function showPosition(position) {
    var geoLat = position.coords.latitude;
    var geoLong = position.coords.longitude;
    var key = "8704dded63fc077d";
    var ForecastURL = "http://api.wunderground.com/api/" + key + "/forecast/q/" + geoLat + "," + geoLong + ".json";
    var WeatherURL = "http://api.wunderground.com/api/" + key + "/conditions/q/" + geoLat + "," + geoLong + ".json";


    $.ajax({
        url : WeatherURL,
        dataType : "jsonp",
        success : function(parsed_json) {
        var temp_f = parsed_json['current_observation']['temp_f'];
        document.getElementById("current_temp").innerHTML = temp_f;
        }
    });

  $.ajax({
        url : ForecastURL,
        dataType : "jsonp",
        success : function(parsed_json) {
        var fore_high = parsed_json['forecast']['simpleforecast']['forecastday'][0]['high']['fahrenheit'];
        var fore_low = parsed_json['forecast']['simpleforecast']['forecastday'][0]['low']['fahrenheit'];
        document.getElementById("high1").innerHTML = fore_high;
        document.getElementById("low1").innerHTML = fore_low;
        
        } //end success 
    });    
    
} //ends showposition function*/