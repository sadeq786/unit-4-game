// GOALS
// Randomly generate a number that has a value between 18 and 120.
// Assign a random value to each crystal between 1 and 12. 
// We then reveal the computer's pick and the tally in the html
// Determine which crystal has been clicked
// Add crystal value to tally and display new tally
// If tally = computerNumber, wins++ and restart game
// If tally > computerNumber, losses++ and restart game

$(document).ready(function() {
    // All JavaScript and Jquery code goes in here

    // Initial Variables
    var wins = 0;
    var losses = 0;
    var tally = 0;
    
    // Randomly generate a number that has a value between 18 and 120.
    var computerNumber = Math.floor(Math.random()*(103)+18);
    
    // console.log computer's pick
    console.log(computerNumber);

    // Assign a random value to each crystal between 1 and 12.
    var crystalOne = Math.floor(Math.random()*(12)+1);
    console.log("crystalOne is " + crystalOne);
    var crystalTwo = Math.floor(Math.random()*(12)+1);
    console.log("crystalTwo is " + crystalTwo);
    var crystalThree = Math.floor(Math.random()*(12)+1);
    console.log("crystalThree is " + crystalThree);
    var crystalFour = Math.floor(Math.random()*(12)+1);
    console.log("crystalFour is " + crystalFour);

    // We then reveal the computer's pick in the html
    $("#computerNumberSpan").text(computerNumber);

    // We also reveal the current tally value in the html
    $("#tallySpan").text(tally);


    $(".resize").on("click", function() {

        // Determine which crystal has been clicked
        // Value attribute in HTML stores a string value. ParseInt() converts that string value into an integer. 
        
        var userChoice = parseInt($(this).attr("value"));
        console.log("User Choice is: " + userChoice);
        
        // Add crystal value to tally and display new tally
        
        if (userChoice === 1) {
            tally += crystalOne;
            console.log("Tally Value: " + tally);
            $("#tallySpan").text(tally);
        } else  if (userChoice === 2) {
            tally += crystalTwo;
            console.log("Tally Value: " + tally);
            $("#tallySpan").text(tally);
        } else  if (userChoice === 3) {
            tally += crystalThree;
            console.log("Tally Value: " + tally);
            $("#tallySpan").text(tally);
        } else  if (userChoice === 4) {
            tally += crystalFour;
            console.log("Tally Value: " + tally);
            $("#tallySpan").text(tally);
        }

        // If tally = computerNumber, wins++ and restart game, display new wins. 
        // If tally > computerNumber, losses++ and restart game, display new losses.

        if (tally === computerNumber) {
            wins++;
            restartGame();
        } else if (tally > computerNumber) {
            losses++;
            restartGame();
        }

        // Restarting the game
        function restartGame() {
            tally = 0;
            computerNumber = Math.floor(Math.random()*(103)+18);
            crystalOne = Math.floor(Math.random()*(12)+1);
            console.log("crystalOne is " + crystalOne);
            crystalTwo = Math.floor(Math.random()*(12)+1);
            console.log("crystalTwo is " + crystalTwo);
            crystalThree = Math.floor(Math.random()*(12)+1);
            console.log("crystalThree is " + crystalThree);
            crystalFour = Math.floor(Math.random()*(12)+1);
            console.log("crystalFour is " + crystalFour);
        }
        
        // If tally < computerNumber, wait for next click. This is automatic. 

        $("#winsSpan").text(wins);
        $("#lossesSpan").text(losses);
        $("#tallySpan").text(tally);
        $("#computerNumberSpan").text(computerNumber);
        
    });
});
