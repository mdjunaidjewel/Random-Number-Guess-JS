// Guess The number of Function area
function guessThenumber(userInput){
    let randomNumber;
    let attemps = 0;
    let maxAttemps;
    let range;

    // Set input base Parameters
    switch(userInput){
        case "easy":
            range = 10;
            maxAttemps = 5;
            randomNumber = Math.floor (Math.random() * 10) +1 ;
            // Range 1-10
            break;    
        case "medium":
            range = 100;
            maxAttemps = 7;
            randomNumber = Math.floor (Math.random() * 100) +1 ;
            // Range 1-100
            break;    
        case "hard":
            range = 1000;
            maxAttemps = 10;
            randomNumber = Math.floor (Math.random() * 1000) +1 ;
            // Range 1-1000
            break;
        default:
            console.error("Invalid Typing, Please choose Option:'easy, medium or hard'");
    }
    // Get user input and check the guess number
    while(attemps < maxAttemps){
        let guess = parseInt(prompt(`Guess a number between 1 and ${range}. You have ${maxAttemps - attemps} attemps left`));
        attemps++;
        if (guess === randomNumber){
            console.log("Congratulation! You guess the number in ",attemps, "attemps");
            break;
        }
        else if (guess < randomNumber) {
            console.log("Your guess number is low, So try Again!");
        }
        else {
            console.log("Your guess number is High, So try Again!");
        }
    }
    if (maxAttemps === attemps){
        console.log("Sorry You run the number of attemps. The number was",randomNumber);
    }


}
// Get user Input
let userInput = prompt("Choose your Option (easy, medium or hard ? )").toLowerCase();

guessThenumber(userInput)
