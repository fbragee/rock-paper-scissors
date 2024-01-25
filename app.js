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

function playRound(player, computer) {
	if (player === computer) {
		return 'TIE, re-play round';
	} else if (player == 'rock' && computer == 'paper') {
		return 'You lose! Paper beats Rock';
	} else if (player == 'paper' && computer == 'scissors') {
		return 'You lose! Scissors beats Paper';
	} else if (player == 'scissors' && computer == 'rock') {
		return 'You lose! Rock beats Scissors!';
	} else if (player == 'rock' && computer == 'scissors') {
		return 'Computer Loses! Rock beats Scissors';
	} else if (player == 'paper' && computer == 'rock') {
		return 'Computer Loses! Paper beats Rock';
	} else if (player == 'scissors' && computer == 'paper') {
		return 'Computer Loses! Scissors beats Paper';
	}
}

// function game() {
// 	let computerScore = 0;
// 	let playerScore = 0;

// 	for (let i = 0; i < 5; i++) {
// 		const playerSelection = prompt(`Round ${i + 1} Choice?`);
// 		const computerSelection = getComputerChoice();
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
// 		} else {
// 			console.log(playRound(playerSelection, computerSelection));
// 			playerScore = playerScore + 0;
// 			computerScore = computerScore + 0;
// 		}
// 	}
// 	console.log(playerScore, computerScore);
// 	if (playerScore > computerScore) {
// 		console.log('You won!!!');
// 	} else if (computerScore > playerScore) {
// 		console.log('The computer wins...');
// 	} else {
// 		console.log("It's a tie!");
// 	}
// }

// game();
