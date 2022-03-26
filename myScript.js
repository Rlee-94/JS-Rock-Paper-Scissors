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
    //Simulating a round played 
    if (playerSelection === computerSelection) {
        return 'The game was a tie!'
    };

    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'Paper beats rock, the computer won!'
        } else {
            return 'Rock beats scissors, you won!'
        }
    }

    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return 'Scissors beats paper, the computer won!'
        } else {
            return 'Paper beats rock, you won!'
        }
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'Rock beats scissors, the computer won!'
        } else {
            return 'Scissors beats paper, you won!'
        }
    }
};

//Will clean up later
playerSelection = 'paper';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));