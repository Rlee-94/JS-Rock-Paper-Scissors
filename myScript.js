
let playerScore = 0
let computerScore = 0


function computerPlay () {
    //R,P,S is assigned to numbers 0-2 for cpu
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

function playRound(playerSelection, computerSelection) {
    //Simulating a round played and adding 1 to the winners score
    const computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        return 'The game was a tie!'
    };

    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'paper') {
            return 'Paper beats rock, the computer won!'
            computerScore++;
        } else {
            return 'Rock beats scissors, you won!'
            playerScore++;
        }
    }

    if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'scissors') {
            return 'Scissors beats paper, the computer won!'
            computerScore++;
        } else {
            return 'Paper beats rock, you won!'
            playerScore++;
        }
    }

    if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'rock') {
            return 'Rock beats scissors, the computer won!'
            computerScore++;
        } else {
            return 'Scissors beats paper, you won!'
            playerScore++;
        }
    }
};

//Will clean up later
playerSelection = 'pApER';
console.log(playRound(playerSelection, computerSelection));
