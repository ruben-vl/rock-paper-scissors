function computerPlay() {
    let rnd = Math.floor(Math.random()*3);
    switch (rnd) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
        default:
            return Error("Something wrong in the random generator.");
    }
}

function playRound(playerSelection, computerSelection) {
    player = playerSelection.toUpperCase();
    if (player == computerSelection) {
        return `Draw! You both played ${playerSelection}.`;
    }
    switch (player) {
        case "ROCK":
            switch (computerSelection) {
                case "PAPER":
                    return "You Lose! Paper beats Rock.";
                case "SCISSORS":
                    return "You Win! Rock beats Scissors.";
            }
            break;
        case "PAPER":
            switch (computerSelection) {
                case "ROCK":
                    return "You Win! Paper beats Rock.";
                case "SCISSORS":
                    return "You Lose! Scissors beats Paper.";
            }
            break;
        case "SCISSORS":
            switch (computerSelection) {
                case "ROCK":
                    return "You Lose! Rock beats Scissors.";
                case "PAPER":
                    return "You Win! Scissors beats Paper.";
            }
            break;
        default:
            return Error("Not a valid move.");
            break;
    }
}

// const playerSelection = prompt("Move?");
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

function game() {
    let playerCount = 0;
    let computerCount = 0;
    for (let i = 1; i <= 5; i++) {
        console.log(`round ${i}`);
        player = prompt("Move?");
        computer = computerPlay();
        result = playRound(player,computer);
        console.log(result);
        if (result.includes("Win")) {
            playerCount++;
        } else if (result.includes("Lose")) {
            computerCount++;
        }
    }
    console.log(`You scored ${playerCount} point(s).`);
    console.log(`The computer scored ${computerCount} point(s).`);
    if (playerCount > computerCount) {
        return "You Win!";
    } else if (computerCount > playerCount) {
        return "You Lose!";
    } else {
        return "It's a draw!";
    }

}

console.log(game());