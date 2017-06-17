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

var rand1 = Math.floor(Math.random() * movement1.length);
var rand2 = Math.floor(Math.random() * movement2.length);
var rand3 = Math.floor(Math.random() * movement3.length);

var firstPrintOut = movement1[rand1];
var secondPrintOut = movement2[rand2];
var thirdPrintOut = movement3[rand3];


/*var firstPrintOut = document.getElementsByClassName("firstMovement");
firstPrintOut.innerHTML = "I am changing the first movement";
alert(firstMovement.innerHTML);

var movementTwo = document.getElementsByClassName("secondMovement");
movementTwo.innerHTML = "I am changing the second movment";
alert(movementTwo.innerHTML);

var movementThree = document.getElementsByClassName("firstMovement");
movementThree.innerHTML = "I am changing the thrid movment";
alert(movementThree.innerHTML);*/

var $firstExercise = $("<span>Movement1k coming from the good stuff</span>");
var $secondExercise = $("<span>Movement2 coming from the good stuff</span>");
var $thirdExercise = $("<span>Movemen3 coming from the good stuff</span>");

$(document).ready(function(){
    $(".firstMovement").hide(); 
    $(".leftButton").click(function(){
    $("body").append($firstExercise);
    $(".armLeft").slideUp("fast");
    });
});


$(document).ready(function(){
    $(".secondMovement").hide();
    $(".middleButton").click(function(){
    $("body").append($secondExercise);
    $(".armMiddle").slideUp("fast");
    });
});

$(document).ready(function(){
    $(".thirdMovement").hide();
    $(".rightButton").click(function(){
    $("body").append($thirdExercise);
    $(".armRight").slideUp("fast");
    });
});



