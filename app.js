function getComputerChoice() {
	let random = Math.random() * 9;
	if (random > 3 && random < 6) {
		return 'PAPER';
	} else if (random > 6 && random < 9) {
		return 'ScisSors';
	} else {
		return 'rock';
	}
}

function playRound(playerSelection, computerSelection) {
	let player = playerSelection.toLowerCase();
	let computer = computerSelection.toLowerCase();
	if (player === computer) {
		return 'TIE, re-play round';
	} else if (player == 'rock' && computer == 'paper') {
		return 'You lose! Paper beats Rock';
	} else if (player == 'paper' && computer == 'scissors') {
		return 'You lose! Scissors beats Paper';
	} else if (player == 'scissors' && computer == 'rock') {
		return 'You lose! Rock beats Scissors!';
	} else if (player == 'rock' && computer == 'scissors') {
		return 'Computer loses! Rock beats Scissors';
	} else if (player == 'paper' && computer == 'rock') {
		return 'Computer loses! Paper beats Rock';
	} else if (player == 'scissors' && computer == 'paper') {
		return 'Computer loses! Scissors beats Paper';
	}
}

function game() {
	let score = 0;
	let win = 0,
		tie = 0,
		lose = 0;

	for (let i = 0; i < 5; i++) {
		const playerSelection = prompt(`Round${i + 1} Choice?`);
		const computerSelection = getComputerChoice();
		if (
			playRound(playerSelection, computerSelection) ==
				'Computer Loses! Paper beats Rock' ||
			playRound(playerSelection, computerSelection) ==
				'Computer Loses! Scissors beats Paper' ||
			playRound(playerSelection, computerSelection) ==
				'Computer loses! Rock beats Scissors'
		) {
			playerScore++;
		} else if (
			playRound(playerSelection, computerSelection) ==
				'You lose! Paper beats Rock' ||
			playRound(playerSelection, computerSelection) ==
				'You lose! Scissors beats Paper' ||
			playRound(playerSelection, computerSelection) ==
				'You lose! Rock beats Scissors'
		) {
			computerScore++;
		} else {
			playerScore = playerScore + 0;
			computerScore = computerScore + 0;
		}
	}

	if (playerScore === 5) {
		console.log('You won!!!');
	} else if (computerScore === 5) {
		console.log('The computer wins...');
	}
}
