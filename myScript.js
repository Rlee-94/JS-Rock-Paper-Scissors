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

};