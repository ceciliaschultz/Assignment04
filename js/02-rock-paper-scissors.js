// Assignment 04
// Maria Cecilia Schultz
// The Rock, Paper, Scissors Game
// User is prompted for a choice (r=Rock, p=Paper  s=Scissors (q to Quit))
// If choice is invalid we will continue prompting until choice is valid (or user quits)
// A message will be displayed, whether the user wins, the computer wins or it ends up in a tie

alert('Welcome to the Rock, Paper, Scissors Game');

while (true) {

    userChoice = getUserChoice();

    // check if out of game
    if (userChoice == "q") {
        break;
    }

    // user did not quit, so continue
    let computerChoice = getComputerRockPaperScissorsChoice();


    // if the user and the computer choice are the same, just indicate it's a tie 
    let resultMessage = `You chose ${getRockPaperScissorsLabel(userChoice)}. The computer chose ${getRockPaperScissorsLabel(computerChoice)}.\n`;
    if (userChoice == computerChoice) {
        resultMessage += "It's a tie!";
    } else {
        // user wins in any of these 3 cases:
        // a) user is Rock and computer is Scissors
        // or b) user is Scissors and computer is Paper
        // or c) user is Paper and computer is Rock
        let userWins = (userChoice == "r" && computerChoice == "s")
            || (userChoice == "s" && computerChoice == "p")
            || (userChoice == "p" && computerChoice == "r");


        resultMessage += (userWins ? "Congratulations, you win!" : "The computer wins!");
    }
    alert(resultMessage);

}


// Prompt user to input a choice
// continue prompting if input is invalid (or user quits game)
function getUserChoice() {
    while (true) {
        let userChoice = prompt('Enter your choice (r=Rock, p=Paper  s=Scissors (q to Quit): ').toLowerCase();

        if (isRockPaperScissorsCodeValid(userChoice) || userChoice == "q") {
            return userChoice;
        }

    }
}


// Returns the label corresponding to the rock/paper/scissors code
// rpsCode must be the code used rock/paper/scissors, e.g.
// Assumes the code passed in is valid (r, p or s)
// corresponding to r= Rock, p= Paper, s=Scissors
function getRockPaperScissorsLabel(rpsCode) {

    if (!isRockPaperScissorsCodeValid(rpsCode)) {
        return "Invalid Code";
    }
    // code passed in is valid (r, p or s), continue
    let rpsLabel;
    switch (rpsCode.toLowerCase()) {
        case "r":
            rpsLabel = "Rock"; // rock
            break;
        case "p": // paper
            rpsLabel = "Paper";
            break;
        default:  // scissors
            rpsLabel = "Scissors";
            break;
    }
    return rpsLabel;
}


// simulates a rock paper scissors try fro the computer
function getComputerRockPaperScissorsChoice() {

    // simulate a rock, paper or scissors try by using a random number between 1 and 3 
    // 1= rock 2=paper, 3=scissors
    let computerTry = Math.floor(Math.random() * 3) + 1;

    let choice;
    switch (computerTry) {
        case 1:
            choice = "r"; // rock
            break;
        case 2: // paper
            choice = "p";
            break;
        default: // scissors
            choice = "s";
            break;
    }
    return choice;
}

function isRockPaperScissorsCodeValid(rpsCode) {
    let isValid = (rpsCode == "r" || rpsCode == "p" || rpsCode == "s");
    return isValid;
}