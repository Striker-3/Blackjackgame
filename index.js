
let message = "";
let mess = document.getElementById("message");
let first = Math.floor(Math.random() * 10);
 let second = Math.floor(Math.random() * 10);
 let cards = [first,second];
 let card = document.getElementById("card");
 let summ = document.getElementById("sum");
let sum;

let Blackjack = false;
let isalive = true;

let player = {
    names : "Nish",
    chips : 151
}

let play = document.querySelector("#player");
play.textContent = player.names + " : " + " $ " + player.chips;
function startgame(){
  sum = 0;
    for(let i=0;i<cards.length;i++){
        sum += cards[i];
    }
    

    card.textContent = "Cards: " + cards;
    summ.textContent ="Sum: "+ sum;
    
   
    if(sum <= 20){
      message = "Do you want to draw a new card? 🤨";
    }
    else if(sum === 21){
        message = "Wohoo! You've got a Blackjack! 🤩";
        Blackjack = true;
    }
    else {
        message = "You are out of game 🙁";
        isalive = false;
    }
   mess.textContent = message;
}


function newc(){
    if(isalive === true && Blackjack === false){
        let num = Math.floor(Math.random() * 10);
        cards.push(num);
        startgame();
    }
    
   
}