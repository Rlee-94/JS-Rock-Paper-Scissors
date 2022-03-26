
let playerScore = 0
let computerScore = 0

 //R,P,S is assigned to numbers 0-2 for cpu
function computerPlay () {
    const randomNumber = Math.floor(Math.random() * 3 );
    switch (randomNumber) {
        case 0:
        return 'rock';
        case 1:
        return 'paper';
        case 2:
        return 'scissors';
    };
};

//Simulating a round played and adding 1 to the winners score
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'The game was a tie!'
    };

    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'paper') {
            computerScore++;
            return 'Paper beats rock, the computer won!'
            
        } else {
            playerScore++;
            return 'Rock beats scissors, you won!'
        }
    }

    if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'scissors') {
            computerScore++;
            return 'Scissors beats paper, the computer won!'
            
        } else {
            playerScore++;
            return 'Paper beats rock, you won!'
        }
    }

    if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++;
            return 'Rock beats scissors, the computer won!'
            
        } else {
            playerScore++;
            return 'Scissors beats paper, you won!' 
        }
    }
};

//Set rounds to 5 
function game () {
    playRound()
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?")
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Your score: ${playerScore}`)
        console.log(`Computer score: ${computerScore}`)
    }
};

game()
