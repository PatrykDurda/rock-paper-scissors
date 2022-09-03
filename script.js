//WELCOME MESSAGE
console.log ("Welcome to Rock, Paper, Scissors game!\nHere in Console,\nyou'll play 5 rounds against\n------------\nPOWERFUL Computer!\n------------\nGood Luck, Have Fun!\n------------\n------------\n------------")

// GETTING USER INPUT
let playerSelection = prompt("Let's play rock, paper, scissors!\nText your choice here!");

console.log ("You choose " + playerSelection.toLowerCase());

// GETTING COMPUTER INPUT
let computerChoice = ["rock", "paper", "scissors"];
let computerSelection = computerChoice[Math.floor(Math.random()*3)];
console.log("The computer choose " + computerSelection);

    // SCORES
    let playerScore=0;
    let computerScore=0;
    let tieScore=0;
    
    // RESULTS
    const win="YOU WIN THIS ROUND!\n------------\n------------\n------------\nNext round!\n------------";
    const lose="YOU LOSE THIS ROUND!\n------------\n------------\n------------\nNext round!\n------------";
    const tie= "THIS ROUND IS A TIE!\n------------\n------------\n------------\nNext round!\n------------";

    //PLAY ROUND
    console.log(playRound(playerSelection, computerSelection));

    // DECLARE WINNER
    function playRound(playerSelection, computerSelection) {
        if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors" || playerSelection.toLowerCase() == "paper" && computerSelection == "rock" || playerSelection.toLowerCase() == "scissors" && computerSelection == "paper"){
           playerScore++;
          return win;
        }
        else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper" || playerSelection.toLowerCase() == "scissors" && computerSelection == "rock" || playerSelection.toLowerCase() == "paper" && computerSelection == "scissors"){
          computerScore++;
          return lose;
        }
          else if (playerSelection.toLowerCase() == computerSelection){
         tieScore++;
          return tie;
        } 
        else {
          return "Error! You need to input rock, paper or scissors!";
        
        }
    } 

// LOOP
function game() {
       
    for (let i = 0; i <4; i++) {
        //UPDATING PLAYER'S INPUT
        const playerSelection = prompt("Let's play rock, paper, scissors!\nText your choice here!").toLowerCase();
        if(computerChoice.includes(playerSelection) === false) {
            alert("Error! You need to input rock, paper or scissors!\nTry again!");
            i--;
        }
        console.log ("You choose " +playerSelection.toLowerCase() + "!");
        //UPDATING COMPUTER'S INPUT
        computerChoice = ["rock","paper","scissors"];
        computerSelection= computerChoice[Math.floor(Math.random()*3)];
        //DEFINING COMPUTER'S INPUT
        console.log("The computer choose " + computerSelection + "!");
   
        console.log(playRound(playerSelection, computerSelection)); 
    }
     if (playerScore>computerScore){
        return "YOU WON THIS GAME!";
      }
        if (playerScore==computerScore){
          return "THIS GAME IS A TIE!";
        }
       else{
        return "YOU LOST THIS GAME!";
      }
   }
   // PLAY LOOP
   console.log(game());
   // FINAL SCORE
   console.log( "Your final score is " + playerScore + " wins, " + computerScore + " loses and " + tieScore + " draws.");
   // SUM UP NUMBER OF GAMES 
   score = playerScore + computerScore + tieScore;
   // GAME OVER MESSAGE
   console.log("You played " + score +" rounds in total.\n -------\nGame over.");