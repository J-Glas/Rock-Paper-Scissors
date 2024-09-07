let humanChoice = "";

document.getElementById("playRock").addEventListener("click", function () {
  console.log("Human choice is: Rock");
  humanChoice = "rock";
  playRound();
});

document.getElementById("playPaper").addEventListener("click", function () {
  console.log("Human choice is: Paper");
  humanChoice = "paper";
  playRound();
});

document.getElementById("playScissors").addEventListener("click", function () {
  console.log("Human choice is: Scissors");
  humanChoice = "scissors";
  playRound();
});

function getComputerChoice() {
  var ComputerChoice = Math.floor(Math.random() * 3 + 1);
  if (ComputerChoice == 1) {
    return "rock";
  } else if (ComputerChoice == 2) {
    return "paper";
  } else if (ComputerChoice == 3) {
    return "scissors";
  }
}

let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;

function playRound() {
  let computerSelection = getComputerChoice();
  document.getElementById(
    "round-number"
  ).innerText = `Roundnumber: ${roundNumber}`;

  if (humanChoice == "rock" && computerSelection == "rock") {
    document.getElementById("result").innerText = "You both choose Rock :(";
  } else if (humanChoice == "rock" && computerSelection == "paper") {
    document.getElementById("result").innerText =
      "Paper beats Rock, Computer scores!";
    computerScore++;
  } else if (humanChoice == "rock" && computerSelection == "scissor") {
    document.getElementById("result").innerText =
      "Rock beats Scissor, Human scores!";
    humanScore++;
  } else if (humanChoice == "paper" && computerSelection == "rock") {
    document.getElementById("result").innerText =
      "Paper beats Rock, Human scores!";
    humanScore++;
  } else if (humanChoice == "paper" && computerSelection == "paper") {
    document.getElementById("result").innerText = "You both choose Paper :(";
  } else if (humanChoice == "paper" && computerSelection == "scissor") {
    document.getElementById("result").innerText =
      "Scissor beats Paper, Computer scores!";
    computerScore++;
  } else if (humanChoice == "scissor" && computerSelection == "rock") {
    document.getElementById("result").innerText =
      "Rock beats Scissor, Computer scores!";
    computerScore++;
  } else if (humanChoice == "scissor" && computerSelection == "paper") {
    document.getElementById("result").innerText =
      "Scissor beats Paper, Human scores!";
    humanScore++;
  } else if (humanChoice == "scissor" && computerSelection == "scissor") {
    document.getElementById("result").innerText = "You both choose Scissor :(";
  }

  document.getElementById(
    "human-score"
  ).innerText = `Human score: ${humanScore}`;
  document.getElementById(
    "computer-score"
  ).innerText = `Computer score: ${computerScore}`;
  document.getElementById(
    "round-number"
  ).innerText = `Roundnumber: ${roundNumber}`;

  if (humanScore >= 5) {
    document.getElementById("game-result").innerText = "Humanity wins!";
    disableButtons();
  } else if (computerScore >= 5) {
    document.getElementById("game-result").innerText = "Computer wins!";
    disableButtons();
  }
  roundNumber++;
  function disableButtons() {
    document.getElementById("playRock").disabled = true;
    document.getElementById("playPaper").disabled = true;
    document.getElementById("playScissors").disabled = true;
  }
}
