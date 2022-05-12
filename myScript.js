
let userScore = 0
let computerScore = 0
let userChoice
let result


const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('game-result')
const possibleChoices = document.querySelectorAll('button')
const userScoreDisplay = document.getElementById('user-score')
const computerScoreDisplay = document.getElementById('computer-score')


//Assign RPS for cpu
function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        computerChoice = 'rock'
    }
    if (randomNumber === 1) {
        computerChoice = 'paper'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerText = computerChoice
};

//Game results
function playRound() {
    if (computerChoice === userChoice) {
        result = ('It\'s a draw!')
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        computerScore++
        result = ('rock beats scissors, you lose!')
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        computerScore++
        result = ('paper beats rock, you lose!')
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        computerScore++
        result = ('scissors beats paper, you lose!')
    }
    if (userChoice === 'rock' && computerChoice === 'scissors') {
        userScore++
        result = ('rock beats scissors, you win!')
    }
    if (userChoice === 'paper' && computerChoice === 'rock') {
        userScore++
        result = ('paper beats rock, you win!')
    }
    if (userChoice === 'scissors' && computerChoice === 'paper') {
        userScore++
        result = ('scissors beats paper, you win!')
    }

    resultDisplay.innerText = result
    userScoreDisplay.innerText = userScore
    computerScoreDisplay.innerText = computerScore

};

//Keep score until 5
function keepScore() {
    if (userScore === 5) {
        alert('Game Over. Congrats you won!')
        location.reload()
    }
    if (computerScore === 5) {
        alert('Game Over. Sorry you lost. ')
        location.reload()
    }
};

//When button is clicked, display in user choice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerText = userChoice
    computerPlay();
    playRound();
    keepScore();
}));