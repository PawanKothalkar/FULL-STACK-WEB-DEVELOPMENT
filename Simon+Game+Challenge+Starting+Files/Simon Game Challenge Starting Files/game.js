var buttonColours = ["red", "blue", "green", "yellow"];

var userClickedPattern=[];
var gamePattern =[];
var started=false;
var i=0;
$(document).keypress(function(){
    if(!started){
    $("h1").html("level 0");
    nextSequence();
    started=true;
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
    checkAnswer(userClickedPattern.length-1);
})

// $(".btn").click(function(){
    
// })

function playSound(name){
    var sound=new Audio("sounds/"+randomChosenColour+".mp3");
    sound.play();
    nextSequence();
}

function nextSequence(){
    userClickedPattern=[];
    i++;
    $("h1").html("Level "+i);
    randomNumber=Math.random()*4;
    randomNumber=Math.floor(randomNumber);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
    var sound=new Audio("sounds/"+randomChosenColour+".mp3");
    sound.play();
   // playSound(randomChosenColour);
}

function animatePress(currentColor) {

    //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
    $("#" + currentColor).addClass("pressed");
  
    //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("success");


    if(userClickedPattern.length === gamePattern.length){
        setTimeout(function(){
            nextSequence();
        },1000)
    }
}
    else {
        console.log("wronggg");
        var wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200)
        $("h1").html("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    i=0;
    gamePattern=[];
    started=false;
}



