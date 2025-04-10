
    var noOfButtons=$("button").length;

//for(var i=0;i<noOfButtons;i++){
    // document.querySelectorAll("button")[i].addEventListener("click",function(){
    //     document.querySelector("h1").style.color="purple";
    // })

//}


    // or


    // $("button").click(function(){
    //     $("h1").css("color","purple");
    // })

    // $("input").keypress(function(event){
    //     $("h1").text(event.key);
    // })


    // $("h1").mouseover(function(){
    //     $("h1").css("color","red");
    // })

    // $("h1").before("<button>new</button>");
    // $("h1").after("<button>new</button>");
    // $("h1").prepend("<button>new</button>");
    // $("h1").append("<button>new</button>");


    $("button").on("click",function(){
        $("h1").css("color","red");
        //$("h1").slideUp();
        $("h1").slideUp().slideDown().animate({opacity: "50%"});
    })
   
