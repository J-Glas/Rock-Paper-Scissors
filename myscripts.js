function getComputerChoice() {
    var ComputerChoice = Math.floor((Math.random() * 3) + 1);
    if (ComputerChoice == 1) {
        console.log("Computer choice is: Rock")
        ComputerChoice = "rock";
    } else if (ComputerChoice == 2) {
        console.log("Computer choice is: Paper")
        ComputerChoice = "paper";
    } else if (ComputerChoice == 3) {
        ComputerChoice = "scissor";
        console.log("Computer choice is: Scissors")
    }
    return ComputerChoice;
}

var humanScore = 0;
var computerScore = 0;
var roundNumber = 1;

function getHumanChoice() {
    // var humanChoice = 0;
    var humanChoice = prompt("What's your choice: Rock, Paper or Scissors?");
    if (humanChoice == "Rock" || humanChoice == "rock") {
        humanChoice = "rock";
        console.log("Human choice is: Rock")
    } else if (humanChoice == "Paper" || humanChoice == "paper") {
        humanChoice = "paper";
        console.log("Human choice is: Paper")
    } else if (humanChoice == "Scissors" || humanChoice == "scissors") {
        humanChoice = "scissors";
        console.log("Human choice is: Scissors")
    }
    return humanChoice;
    // console.log("Human choice is:")
    // console.log(humanChoice)
}
function playGame() {
    function playRound() {
        for (var i = 1; i <= 5; i++) {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            console.log("Roundnumber:")
            console.log(roundNumber)
            if (humanSelection == "rock" && computerSelection == "rock") {
                console.log("You both choose Rock :(")
                roundNumber++;
                // getHumanChoice = prompt("Choose for next Round: Rock, Paper or Scissors?");
            } else if (humanSelection == "rock" && computerSelection == "paper") {
                console.log("Paper beats Rock, Computer scores!")
                roundNumber++;
                computerScore++;
            } else if (humanSelection == "rock" && computerSelection == "scissor") {
                console.log("Scissor beats Rock, Computer scores!")
                roundNumber++;
                computerScore++;
            } else if (humanSelection == "paper" && computerSelection == "rock") {
                console.log("Paper beats Rock, Human scores!")
                roundNumber++;
                humanScore++;
            } else if (humanSelection == "paper" && computerSelection == "paper") {
                console.log("You both choose Paper :(")
                roundNumber++;
            } else if (humanSelection == "paper" && computerSelection == "scissor") {
                console.log("Scissor beats Paper, Computer scores!")
                roundNumber++;
                computerScore++;
            } else if (humanSelection == "scissor" && computerSelection == "rock") {
                console.log("Rock beats Scissor, Computer scores!")
                roundNumber++;
                computerScore++;
            } else if (humanSelection == "scissor" && computerSelection == "paper") {
                console.log("Scissor beats Paper, Human scores!")
                roundNumber++;
            } else if (humanSelection == "scissor" && computerSelection == "scissor") {
                console.log("You both choose Scissor :(")
                roundNumber++;
            }
            console.log("Human score:")
            console.log(humanScore)
            console.log("Computer score:")
            console.log(computerScore)
            console.log("Roundnumber:")
            console.log(roundNumber)
        }
        if (humanScore > computerScore) {
            console.log("Humanity wins!")
        } else if (humanScore == computerScore) {
            console.log("It's a draw!")
        } else if (humanScore < computerScore) {
            console.log("Computer wins!")
        }
    }
    playRound();
}
playGame();

// console.log(playRound(roundNumber))




// getComputerChoice();
// getHumanChoice();