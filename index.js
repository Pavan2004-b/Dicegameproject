var player1=(Math.floor(Math.random()*6)+1);
var player2=(Math.floor(Math.random()*6)+1);
document.querySelectorAll("img")[0].setAttribute("src","images/dice"+player1+".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+player2+".png");
if(player1>player2){
    document.querySelector("h1").innerHTML="player1 is winner";
}
else if(player1<player2){
    document.querySelector("h1").innerHTML="player2 is winner";
}
else{
    document.querySelector("h1").innerHTML="draw match";
}