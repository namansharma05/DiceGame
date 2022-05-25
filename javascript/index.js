var number1 = Math.floor(Math.random()*6)+1;
var number2 = Math.floor(Math.random()*6)+1;

// change heading

if(number1 > number2){
    document.querySelector("h1").textContent = "Player 1 Won!";
} else if(number1 < number2){
    document.querySelector("h1").textContent = "Player 2 Won!";
} else {
    document.querySelector("h1").textContent = "Draw";
}

// change dice

if(number1 == 1){
    document.querySelector(".dice1").setAttribute("src","images/dice1.png"); 
}
else if(number1 == 2){
    document.querySelector(".dice1").setAttribute("src","images/dice2.png"); 
}
else if(number1 == 3){
    document.querySelector(".dice1").setAttribute("src","images/dice3.png"); 
}
else if(number1 == 4){
    document.querySelector(".dice1").setAttribute("src","images/dice4.png"); 
}
else if(number1 == 5){
    document.querySelector(".dice1").setAttribute("src","images/dice5.png"); 
}
else{
    document.querySelector(".dice1").setAttribute("src","images/dice6.png"); 
}

if(number2 == 1){
    document.querySelector(".dice2").setAttribute("src","images/dice1.png"); 
}
else if(number2 == 2){
    document.querySelector(".dice2").setAttribute("src","images/dice2.png"); 
}
else if(number2 == 3){
    document.querySelector(".dice2").setAttribute("src","images/dice3.png"); 
}
else if(number2 == 4){
    document.querySelector(".dice2").setAttribute("src","images/dice4.png"); 
}
else if(number2 == 5){
    document.querySelector(".dice2").setAttribute("src","images/dice5.png"); 
}
else{
    document.querySelector(".dice2").setAttribute("src","images/dice6.png"); 
}