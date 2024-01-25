// Random number generator chooses the choice of the computer
function getComputerChoice() {
	let random = Math.random() * 9;
	if (random > 3 && random < 6) {
		return 'paper';
	} else if (random > 6 && random < 9) {
		return 'scissors';
	} else {
		return 'rock';
	}
}

// Scores are stored outside the function, otherwise each time it's called with a button they get reset
let computerScore = 0;
let playerScore = 0;

// Game function, the loop works until the score of both are under 5
// Score increases after each round
// When score reaches 5, the winner is displayed and score is reset
function playRound(player, computer) {
	for (i = 0; playerScore < 5 && computerScore < 5; i++) {
		if (player === computer) {
			console.log(playerScore, computerScore);
			return 'TIE, re-play round';
		} else if (player == 'rock' && computer == 'paper') {
			computerScore++;
			console.log(playerScore, computerScore);
			return 'You lose! Paper beats Rock';
		} else if (player == 'paper' && computer == 'scissors') {
			computerScore++;
			console.log(playerScore, computerScore);
			return 'You lose! Scissors beats Paper';
		} else if (player == 'scissors' && computer == 'rock') {
			computerScore++;
			console.log(playerScore, computerScore);
			return 'You lose! Rock beats Scissors!';
		} else if (player == 'rock' && computer == 'scissors') {
			playerScore++;
			console.log(playerScore, computerScore);
			return 'Computer Loses! Rock beats Scissors';
		} else if (player == 'paper' && computer == 'rock') {
			playerScore++;
			console.log(playerScore, computerScore);
			return 'Computer Loses! Paper beats Rock';
		} else if (player == 'scissors' && computer == 'paper') {
			playerScore++;
			console.log(playerScore, computerScore);
			return 'Computer Loses! Scissors beats Paper';
		}
	}
	if (playerScore === 5) {
		console.log('You won!!!');
		playerScore = 0;
		computerScore = 0;
	} else if (computerScore === 5) {
		console.log('The computer wins...');
		playerScore = 0;
		computerScore = 0;
	} else {
		console.log("It's a tie!");
		playerScore = 0;
		computerScore = 0;
	}
}

// Button selectors
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

// The user selects its move through the three buttons
rockButton.addEventListener('click', () => {
	let playerSelection = 'rock';
	const computerSelection = getComputerChoice();
	console.log(playRound(playerSelection, computerSelection));
});

paperButton.addEventListener('click', () => {
	let playerSelection = 'paper';
	const computerSelection = getComputerChoice();
	console.log(playRound(playerSelection, computerSelection));
});

scissorsButton.addEventListener('click', () => {
	let playerSelection = 'scissors';
	const computerSelection = getComputerChoice();
	console.log(playRound(playerSelection, computerSelection));
});

// function game() {
// 	for (let i = 0; playerScore < 5 && computerScore < 5; i++) {
// 		if (
// 			playRound(playerSelection, computerSelection) ==
// 				'Computer Loses! Paper beats Rock' ||
// 			playRound(playerSelection, computerSelection) ==
// 				'Computer Loses! Scissors beats Paper' ||
// 			playRound(playerSelection, computerSelection) ==
// 				'Computer loses! Rock beats Scissors'
// 		) {
// 			console.log(playRound(playerSelection, computerSelection));
// 			playerScore++;
// 			console.log(playerScore, computerScore);
// 		} else if (
// 			playRound(playerSelection, computerSelection) ==
// 				'You lose! Paper beats Rock' ||
// 			playRound(playerSelection, computerSelection) ==
// 				'You lose! Scissors beats Paper' ||
// 			playRound(playerSelection, computerSelection) ==
// 				'You lose! Rock beats Scissors'
// 		) {
// 			console.log(playRound(playerSelection, computerSelection));
// 			computerScore++;
// 			console.log(playerScore, computerScore);
// 		} else {
// 			console.log(playRound(playerSelection, computerSelection));
// 			playerScore = playerScore + 0;
// 			computerScore = computerScore + 0;
// 			console.log(playerScore, computerScore);
// 		}
// 	}
// 	console.log(playerScore, computerScore);
// }

const playerScoreText = document.querySelector('.playerScore');
const computerScoreText = document.querySelector('.computerScore');
