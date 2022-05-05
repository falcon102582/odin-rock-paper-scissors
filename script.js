const weapon =["paper", "rock", "scissors"];

let rock = document.getElementById("player-rock");
let paper = document.getElementById("player-paper");
let scissors = document.getElementById("player-scissors")
let computerRock = document.getElementById("computer-rock");
let computerPaper = document.getElementById("computer-paper");
let computerScissors = document.getElementById("computer-scissors");
let resetButton = document.getElementById("reset");

let playerScore = 0;
let computerScore = 0;
let result = document.getElementById("result");
let score = document.getElementById("score");
score.innerHTML=`Player: ${playerScore}   Computer: ${computerScore}`;

function computerPlay() {
    let i = weapon[Math.floor(Math.random() * 3)];
    computerRock.style = null;
    computerPaper.style = null;
    computerScissors.style = null;
    if(i === "paper"){
        computerPaper.style = "border: 4px red solid";
    }else if(i === "rock"){
        computerRock.style =  "border: 4px red solid";
    }else{
        computerScissors.style =  "border: 4px red solid";
    }
    return i;
}


function resultShown(){
    if(playerScore===5 || computerScore===5){
        return resetButton.style="display:inline;"
    }
}

resetButton.addEventListener("click", function(){
    playerScore=0;
    computerScore=0;
    score.innerHTML=`Player: ${playerScore}   Computer: ${computerScore}`;
    return resetButton.style="display:none;"
});

rock.addEventListener("click" , function (){
    if(playerScore<5 && computerScore<5){
        let x = computerPlay(); 

        if(x === "paper"){
            computerScore++;
            result.innerHTML="Computer win!";
            resultShown();
            return score.innerHTML=`Player: ${playerScore}   Computer: ${computerScore}`
        }else if(x === "scissors"){
            playerScore ++;
            result.innerHTML="Player win!";
            resultShown();
            return score.innerHTML=`Player: ${playerScore}   Computer: ${computerScore}`
        }else{
            result.innerHTML="Draw";
            return
        }
    }else{
        return resetButton.style="display:inline;"
    }
})

paper.addEventListener("click" , function (){
    if(playerScore<5 && computerScore<5){
        let x = computerPlay(); 

        if(x === "paper"){
            result.innerHTML="Draw";
            return
        }else if(x === "scissors"){
            computerScore++;
            result.innerHTML="Computer win!";
            resultShown();
            return score.innerHTML=`Player: ${playerScore}   Computer: ${computerScore}`
        }else{
            playerScore ++;
            result.innerHTML="Player win!";
            resultShown();
            return score.innerHTML=`Player: ${playerScore}   Computer: ${computerScore}`
        }
    }
})

scissors.addEventListener("click" , function (){
    if(playerScore<5 && computerScore<5){
        let x = computerPlay(); 

        if(x === "paper"){
            playerScore ++;
            result.innerHTML="Player win!";
            resultShown();
            return score.innerHTML=`Player: ${playerScore}   Computer: ${computerScore}`
        }else if(x === "scissors"){
            result.innerHTML="Draw";
            return
        }else{
            computerScore++;
            result.innerHTML="Computer win!";
            resultShown();
            return score.innerHTML=`Player: ${playerScore}   Computer: ${computerScore}`
        }
    }
})


