const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const btns = document.querySelectorAll('button');

let userChocie;
let computerChoice;
let result;

btns.forEach((btn) => btn.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  getComputerChoice();
  displayResult();
}))

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = 'paper';
  }
  if (randomNumber === 2) {
    computerChoice = 'rock';
  }
  if (randomNumber === 3) {
    computerChoice = 'scissors';
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function displayResult() {
  if (computerChoice === userChoice) {
    result = 'It is a draw!';
  }
  if (computerChoice === 'paper' && userChoice === 'scissors') {
    result = 'You won!';
  }
  if (computerChoice === 'scissors' && userChoice === 'paper') {
    result = 'You lost!';
  }
  if (computerChoice === 'paper' && userChoice === 'rock') {
    result = 'You lost!';
  }
  if (computerChoice === 'rock' && userChoice === 'paper') {
    result = 'You won!';
  }
  if (computerChoice === 'scissors' && userChoice === 'rock') {
    result = 'You won!';
  }
  if (computerChoice === 'rock' && userChoice === 'scissors') {
    result = 'You lost!';
  }
  resultDisplay.innerHTML = result;
}
