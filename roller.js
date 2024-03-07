


function loadDice(){
    var diceImage = document.getElementById("diceface");
    var i = 0;
    var loader = ["Dice1.png",
    "Dice2.png",
    "Dice3.png",
    "Dice4.png",
    "Dice5.png",
    "Dice6.png"];
    var timer = setInterval(function(){
        if (i >= loader.length){
            clearInterval(timer); //stops the timer
            return;
        }
        diceImage.src = loader[i++];  
    }, 100);
    
    
    setTimeout(rollDice,700);// Delays the function by .7s
        }





function rollDice(values){  
    
   values = Math.floor(Math.random() * 6) + 1;
   
   var diceImage = document.getElementById("diceface");

   
  
   diceImage.src = 'Dice'+values+'.png'
   console.log(values);
}
