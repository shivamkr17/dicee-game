
var randomNumber1=Math.floor(Math.random()*6)+1;

var randomImage= "dice"+randomNumber1+".png";
var randomImageSource="images/"+randomImage;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImage1= "dice"+randomNumber2+".png";
var randomImageSource1="images/"+randomImage1;

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource1);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins 🚩";
}

else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 Wins 🚩";
}
else if(randomNumber1=randomNumber2){
    document.querySelector("h1").innerHTML="Draw!";
}