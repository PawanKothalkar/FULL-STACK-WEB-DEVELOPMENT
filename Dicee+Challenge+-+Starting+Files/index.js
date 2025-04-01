var randomnumber1= Math.floor(Math.random()*6+1);
var randomimg1="./images/dice"+randomnumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimg1);

var randomnumber2=Math.floor(Math.random()*6+1);
var randomimg2="./images/dice"+randomnumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimg2);

if(randomimg1>randomimg2)
{
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(randomimg2>randomimg1)
{
    document.querySelector("h1").innerHTML="player 2 wins";

}
else{
    document.querySelector("h1").innerHTML="draw";
}