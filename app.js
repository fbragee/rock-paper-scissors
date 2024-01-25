// Random number generator chooses the move of the computer
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

const playerScoreText = document.querySelector('.playerScore');
const computerScoreText = document.querySelector('.computerScore');
const currentWinnerText = document.querySelector('.currentWinner');
const finalWinnerText = document.querySelector('.finalWinner');

// Game function, the loop works until the score of both are under 5
// Score increases after each round
// When score reaches 5, the winner is displayed and score is reset
function playRound(player, computer) {
	for (i = 0; playerScore < 5 && computerScore < 5; i++) {
		if (player === computer) {
			playerScoreText.innerText = `Player Score : ${playerScore}`;
			computerScoreText.innerText = `Computer Score : ${computerScore}`;
			currentWinnerText.innerText = 'TIE, re-play round';
		} else if (player == 'rock' && computer == 'paper') {
			computerScore++;
			playerScoreText.innerText = `Player Score : ${playerScore}`;
			computerScoreText.innerText = `Computer Score : ${computerScore}`;
			currentWinnerText.innerText = 'You lose! Paper beats Rock';
		} else if (player == 'paper' && computer == 'scissors') {
			computerScore++;
			playerScoreText.innerText = `Player Score : ${playerScore}`;
			computerScoreText.innerText = `Computer Score : ${computerScore}`;
			currentWinnerText.innerText = 'You lose! Scissors beats Paper';
		} else if (player == 'scissors' && computer == 'rock') {
			computerScore++;
			playerScoreText.innerText = `Player Score : ${playerScore}`;
			computerScoreText.innerText = `Computer Score : ${computerScore}`;
			currentWinnerText.innerText = 'You lose! Rock beats Scissors!';
		} else if (player == 'rock' && computer == 'scissors') {
			playerScore++;
			playerScoreText.innerText = `Player Score : ${playerScore}`;
			computerScoreText.innerText = `Computer Score : ${computerScore}`;
			currentWinnerText.innerText = 'Computer Loses! Rock beats Scissors';
		} else if (player == 'paper' && computer == 'rock') {
			playerScore++;
			playerScoreText.innerText = `Player Score : ${playerScore}`;
			computerScoreText.innerText = `Computer Score : ${computerScore}`;
			currentWinnerText.innerText = 'Computer Loses! Paper beats Rock';
		} else if (player == 'scissors' && computer == 'paper') {
			playerScore++;
			playerScoreText.innerText = `Player Score : ${playerScore}`;
			computerScoreText.innerText = `Computer Score : ${computerScore}`;
			currentWinnerText.innerText =
				'Computer Loses! Scissors beats Paper';
		}
		return playerScore, computerScore;
	}
	if (playerScore === 5) {
		finalWinnerText.innerText = 'You won!!!';
		playerScore = 0;
		computerScore = 0;
	} else if (computerScore === 5) {
		finalWinnerText.innerText = 'The computer wins...';
		playerScore = 0;
		computerScore = 0;
	} else {
		finalWinnerText.innerText = "It's a tie!";
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
