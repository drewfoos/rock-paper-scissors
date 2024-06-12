let humanScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

let getComputerChoice = () => choices[Math.floor(Math.random() * 3)];

let getHumanChoice = () => {
  let choice = prompt("Enter rock, paper, scissors (or 1,2,3)");

  if (!isNaN(choice) && choice >= 0 && choice <= 2) {
    return choices[choice];
  } else {
    choice = choice.toLowerCase();
    if (choices.includes(choice)) {
      return choice;
    }
  }
  alert(
    "Invalid choice. Please enter rock, paper, or scissors (or 0 for rock, 1 for paper, 2 for scissors)"
  );
  return getHumanChoice();
};

let playRound = (humanChoice, computerChoice) => {
  console.log(`Human plays: ${humanChoice}\nComputer plays: ${computerChoice}`);
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return;
  }
  const winningConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (computerChoice === winningConditions[humanChoice]) {
    humanScore += 5;
    console.log("Human wins this round!");
  } else {
    computerScore += 5;
    console.log("Computer wins this round!");
  }
};

let playGame = () => {
  for (i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Human score: ${humanScore}\nComputer score: ${computerScore}`);
  }
  if (computerScore > humanScore) {
    console.log("Computer wins overall!!!");
  } else {
    console.log("Human wins overall!!!");
  }
};

playGame();
