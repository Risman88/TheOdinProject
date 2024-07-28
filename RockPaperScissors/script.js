document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#container");

  function createButton(text, id) {
    const button = document.createElement("button");
    button.textContent = text;
    button.setAttribute("id", id);
    return button;
  }

  const rockButton = createButton("Rock", "rock");
  const paperButton = createButton("Paper", "paper");
  const scissorsButton = createButton("Scissors", "scissors");

  container.appendChild(rockButton);
  container.appendChild(paperButton);
  container.appendChild(scissorsButton);

  function createDiv(classText, id) {
    const div = document.createElement("div");
    div.classList.add = classText;
    div.setAttribute("id", id);
    return div;
  }

  function createPara(text, id) {
    const p = document.createElement("p");
    p.textContent = text;
    p.setAttribute("id", id);
    return p;
  }
  const detailsDiv = createDiv("details", "details");
  const scoreDiv = createDiv("score", "score");
  const choiceDiv = createDiv("choice", "choice");
  const gameDiv = createDiv("game", "game");

  container.appendChild(detailsDiv);
  detailsDiv.appendChild(choiceDiv);
  detailsDiv.appendChild(scoreDiv);
  container.appendChild(gameDiv);

  const humanChoicePara = createPara("Your Choice: -", "humanChoice");
  const computerChoicePara = createPara("Computer Choice: -", "computerChoice");
  const humanScorePara = createPara("Your Score: 0", "humanScore");
  const computerScorePara = createPara("Computer Score: 0", "computerScore");

  choiceDiv.appendChild(humanChoicePara);
  choiceDiv.appendChild(computerChoicePara);
  scoreDiv.appendChild(humanScorePara);
  scoreDiv.appendChild(computerScorePara);

  const resetButton = createButton("Reset Game", "reset");

  gameDiv.appendChild(resetButton);

  resetButton.addEventListener("click", resetGame);
  rockButton.addEventListener("click", () => playGame("rock"));
  paperButton.addEventListener("click", () => playGame("paper"));
  scissorsButton.addEventListener("click", () => playGame("scissors"));

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

  let humanChoice = "";

  function updateChoice(humanChoice, computerChoice) {
    document.getElementById(
      "humanChoice"
    ).textContent = `Your Choice: ${humanChoice}`;
    document.getElementById(
      "computerChoice"
    ).textContent = `Computer Choice: ${computerChoice}`;
  }

  let humanScore = 0;
  let computerScore = 0;

  function updateScore(humanScore, computerScore) {
    document.getElementById(
      "humanScore"
    ).textContent = `Your Score: ${humanScore}`;
    document.getElementById(
      "computerScore"
    ).textContent = `Computer Score: ${computerScore}`;
  }

  function playGame(humanChoice) {
    if ((humanScore < 5) && (computerScore < 5)){
      const humanSelection = humanChoice;
      console.log(humanChoice);
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
      updateChoice(humanSelection, computerSelection);
      updateScore(humanScore, computerScore);
      if ((humanScore >= 5)) {
        alert("You become The Winner! Congratulations! Let's play again by clicking Reset Game button");
      } else if ((computerScore >= 5)) {
        alert("You lose! Better luck next time! Let's play again by clicking Reset Game button")
      } else {
        return;
      }
    } else {
      alert("Game already end! Click Reset Game button to play again!")
    }
  }

  function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateScore(0, 0);
    updateChoice("-", "-");
    alert("Game reset. Ready to play again!");
    console.log("Game reset. Ready to play again!");
  }
});
