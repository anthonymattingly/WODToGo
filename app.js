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




