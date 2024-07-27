function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3 + 1);
  if (computerChoice === 1) {
    computerChoice = "rock";
  } else if (computerChoice === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  console.log(computerChoice);
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = "";
  let userInput = prompt("Input your guess: (rock/paper/scissors)");
  lowercased = userInput.toLowerCase();
  if (lowercased === "rock" || lowercased === "paper") {
    humanChoice = lowercased;
  } else {
    humanChoice = "scissors";
  }
  console.log(humanChoice);
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    function playRound(humanChoice, computerChoice) {
      if (humanChoice === computerChoice) {
        console.log("It's tie!");
      } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
      ) {
        console.log("Human Win");
        humanScore++;
      } else {
        console.log("Computer Win");
        computerScore++;
      }
    }
    playRound(humanSelection, computerSelection);
    console.log(humanScore);
    console.log(computerScore);
  }
  if (humanScore > computerScore) {
    console.log(
      "Congrats, Human are the winner. Refresh the pages to play again"
    );
  } else if (computerScore > humanScore) {
    console.log(
      "You lost, better luck next time. Refresh the pages to play again"
    );
  } else {
    console.log("Human & Computer was a tie. Refresh the pages to play again");
  }
}

playGame();
