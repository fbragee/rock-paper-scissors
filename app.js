function getComputerChoice() {
	let random = Math.random() * 9;
	if (random > 3 && random < 6) {
		return 'PAPER';
	} else if (random > 6 && random < 9) {
		return 'SCISSORS';
	} else {
		return 'ROCK';
	}
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection == 'rock' && computerSelection == 'rock') {
		return 'TIE, re-play round';
	} else if (playerSelection == 'paper' && computerSelection == 'paper') {
		return 'TIE, re-play round';
	} else if (
		playerSelection == 'scissors' &&
		computerSelection == 'scissors'
	) {
		return 'TIE, re-play round';
	} else if (playerSelection == 'rock' && computerSelection == 'paper') {
		return 'You lose! Paper beats Rock';
	} else if (playerSelection == 'paper' && computerSelection == 'scissors') {
		return 'You lose! Scissors beats Paper';
	} else if (playerSelection == 'scissors' && computerSelection == 'rock') {
		return 'You lose! Rock beats Scissors!';
	} else if (playerSelection == 'rock' && computerSelection == 'scissors') {
		return 'Computer loses! Rock beats Scissors';
	} else if (playerSelection == 'paper' && computerSelection == 'rock') {
		return 'Computer Loses';
	}
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
