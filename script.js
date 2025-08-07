function getComputerChoice() {
    let choice = Math.round(Math.random() * 4);
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const userResult = prompt("Enter your choice: Rock, Paper or Scissors?");
    return userResult.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, userChoice) {
    userChoice = userChoice.toLowerCase();
    if (userChoice === computerChoice) {
        console.log(`It is a tie!, You both chose ${userChoice}`);
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`Yay!, You win! ${userChoice} beats ${computerChoice} `);
    } else {
        computerScore++;
        console.log(`Oops! You lose! ${computerChoice} beats ${userChoice}`);
    }

    console.log(`Score => You: ${humanScore} | Computer: ${computerScore}`);
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        console.log(`--- Round ${round} ---`);
        const human = getHumanChoice();
        const computer = getComputerChoice();
        playRound(computer, human);
    }

    console.log("=== Game Over ===");

    if (humanScore > computerScore) {
        console.log("You win the game! 🎉");
    } else if (computerScore > humanScore) {
        console.log("Computer wns the ame! 😞");
    } else {
        console.log("It's a tie game! Repeat the game!");
    }
}

// Start the game
playGame();
