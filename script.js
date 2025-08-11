let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return `It is a tie!, You both chose ${userChoice}`;
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `Yay!, You win! ${userChoice} beats ${computerChoice} `;
    } else {
        computerScore++;
        return `Oops! You lose! ${computerChoice} beats ${userChoice}`;
    }
}

function updateScore() {
    document.getElementById("player-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;
}

function checkWinner() {
    if (humanScore === 5) {
        document.getElementById("results").textContent = "🎉 You win the game!";
        disableButtons();
    } else if (computerScore === 5) {
        document.getElementById("results").textContent =
            "😞 Computer wins the game!";
        disableButtons();
    }
}

function disableButtons() {
    document
        .querySelectorAll("button[data-choice]")
        .forEach((btn) => (btn.disabled = true));
}

document.querySelectorAll("button[data-choice]").forEach((button) => {
    button.addEventListener("click", () => {
        const userChoice = button.getAttribute("data-choice");
        const computerChoice = getComputerChoice();
        const result = playRound(userChoice, computerChoice);
        document.getElementById("results").textContent = result;
        updateScore();
        checkWinner();
    });
});
