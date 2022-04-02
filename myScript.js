
let playerScore = 0
let computerScore = 0
let userChoice
let result


const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('game-result')
const possibleChoices = document.querySelectorAll('button')
const playerScoreDisplay = document.getElementById('user-score')
const computerScoreDisplay = document.getElementById('computer-score')

//When button is clicked, display in user choice
 possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    computerPlay();
    playRound();
 }));

 //Assign RPS for cpu
 function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3 );
    
    if (randomNumber === 0) {
        computerChoice = 'rock'
    }
    if (randomNumber === 1) {
        computerChoice = 'paper'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
};

//Game results
function playRound() {
    if (computerChoice === userChoice) {
        result = (`It\'s a draw! \n
        Player Score: ${playerScore} Computer Score: ${computerScore}`) 
    }

    if (computerChoice === 'rock' &&  userChoice === 'scissors') {
        computerScore++
        result = ('rock beats scissors, you lose!')
    }
    if (computerChoice === 'paper' &&  userChoice === 'rock') {
        computerScore++
        result = ('rock beats scissors, you lose!')
    }
    if (computerChoice === 'scissors' &&  userChoice === 'paper') {
        computerScore++
        result = ('rock beats scissors, you lose!')
    }

    if (userChoice === 'rock' &&  computerChoice === 'scissors') {
        playerScore++
        result = ('rock beats scissors, you lose!')
    }
    if (userChoice === 'paper' &&  computerChoice === 'rock') {
        playerScore++
        result = ('rock beats scissors, you lose!')
    }
    if (userChoice === 'scissors' &&  computerChoice === 'paper') {
        playerScore++
        result = ('rock beats scissors, you lose!')
    }

    resultDisplay.innerHTML = result
    playerScoreDisplay.innerHTML = playerScore
    computerScoreDisplay.innerHTML = computerScore
};

//Keep score