let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

/* all of this is called caching the DOM */
/* storing something for future use, storing all of these things in variables 
that we can use later. */
/* makes the coding and running of the program more eficient by eliminating 
the use of having to get the userpoint (right side) each time */

/* take the value that the user chooses to a random choice, compare the two
and display the result on the DOM */

/* first add some event listeners */

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomSelection = (Math.floor(Math.random() * 3));
    return choices [randomSelection];
    }

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "s") return "Scissors";
    return "Paper";
    }

function win(userChoice, computerChoice) {
    const userChoice_div =  document.getElementById(userChoice).classList; //added this const last minute to make //program a little bit more efficient in the win, lose and draw functions
    userScore++;
    userScore_span.innerHTML = userScore;
    //computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You Win!`;
    // Steps/drafts
    //document.getElementById('r')
    //but r is a hardcoded element and that's not what we want since it will only give the green colour when we ////click on the rock and we will have to hardcode for paper and scissors as well, so we use userChoice instead///(r,p or s)

    
    userChoice_div.add('green-glow'); /* don't need a period before green-glow because we know it's going to be a class */
    
    /* What we want to do is add a class of green-glow to whichever div the user clicked on (rock div, paper div, scissors div)

    /*classlist is a method that exists in the DOM, and when you do that it gives you an array of all the classes
    on that specific element, on that array we add our class */

    setTimeout(() => userChoice_div.remove('green-glow'), 600); 
    //wait for 0.6 seconds and remove the green-glow class
}

//setTimeout(function() {console.log("Hello")}, 3000); (the basic version of setting a timeout in the console)

function lose(userChoice, computerChoice) {
    const userChoice_div =  document.getElementById(userChoice).classList;
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lose.`;
    userChoice_div.add('red-glow');
    //setTimeout(function() { userChoice_div.remove('red-glow')}, 600); -> can be replaced by the following:
    setTimeout(() => userChoice_div.remove('red-glow'), 600); //no curly brackets because this is all on one line
}

function draw(userChoice, computerChoice) {
    const userChoice_div =  document.getElementById(userChoice).classList;
    result_p.innerHTML = `${convertToWord(userChoice)} ties ${convertToWord(computerChoice)}. It's a draw!`;
    userChoice_div.add('gray-glow');
    setTimeout(() => userChoice_div.remove('gray-glow'), 600);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "ps":
        case "rp":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "pp":
        case "rr":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main (){

    /*rock_div.addEventListener('click', function() {
        game("r");
    }) can be replaced by: */
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));

}

main();