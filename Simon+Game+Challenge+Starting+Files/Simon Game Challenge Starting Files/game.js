var buttonColours = ["red", "blue", "green", "yellow"];

var userClickedPattern=[];
var gamePattern =[];
var started=false;
var level=0;
$(document).keypress(function(){
    if(!started){
    $("h1").html("level 0");
    nextSequence();
    //started=true;
    }
})
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");


    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
      }, 100);
}


$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    var sound=new Audio("sounds/"+userChosenColour+".mp3");
    sound.play();
    animatePress(userChosenColour);
})

// $(".btn").click(function(){
    
// })

function playSound(name){
    var sound=new Audio("sounds/"+randomChosenColour+".mp3");
    sound.play();
    nextSequence();
}

function nextSequence(){
    i++;
    $("h1").html("Level"+i);
    randomNumber=Math.random()*4;
    randomNumber=Math.floor(randomNumber);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var sound=new Audio("sounds/"+randomChosenColour+".mp3");
    sound.play();
}

// function animatePress(currentColor) {

//     //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
//     $("#" + currentColor).addClass("pressed");
  
//     //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
//     setTimeout(function () {
//       $("#" + currentColor).removeClass("pressed");
//     }, 100);
//   }



