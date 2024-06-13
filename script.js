let humanScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

let getComputerChoice = () => choices[Math.floor(Math.random() * 3)];

let playRound = (humanChoice, computerChoice) => {
  console.log(`Human plays: ${humanChoice}\nComputer plays: ${computerChoice}`);
  if (humanChoice === computerChoice) {
    displayWinner.textContent = "It's a tie!";
    return;
  }
  const winningConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (computerChoice === winningConditions[humanChoice]) {
    humanScore += 5;
    displayWinner.textContent = "User wins!";
  } else {
    computerScore += 5;
    displayWinner.textContent = "Computer wins!";
  }
};

let playGame = (humanChoice) => {
  let computerChoice = getComputerChoice();
  displayMoves.textContent = `Computer: ${computerChoice}`;
  playRound(humanChoice, computerChoice);
  console.log(`Human score: ${humanScore}\nComputer score: ${computerScore}`);
};

let winnerContainer = document.querySelector(".results");
let displayWinner = document.createElement("p");
let displayMoves = document.createElement("p");
winnerContainer.appendChild(displayMoves);
winnerContainer.appendChild(displayWinner);
