
let playerScore = 0
let computerScore = 0
let userChoice

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('game-result')
const possibleChoices = document.querySelectorAll('button')

//When button is clicked, display in user choice
 possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
 }));

