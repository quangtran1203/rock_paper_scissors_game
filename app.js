// configure the behaviour of the score board
var userScore = 0;
var compScore = 0;
var userScore_span = document.getElementById("user-score");
var compScore_span = document.getElementById("comp-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_p = document.querySelector(".result > p");         // get the paragraph tag inside the div tag
var rock_div = document.getElementById("rock");
var paper_div = document.getElementById("paper");
var scissors_div = document.getElementById("scissors");


// what happens if we click on the rock button, for example
function compChoice() {
  var choices = ['rock', 'paper', 'scissors'];
  var random = Math.floor(Math.random() * 3);
  return choices[random];                        // generate a random number corresponding to a choice
}

function convert(word) {
  if (word === "rock") return "Rock";
  if (word === "paper") return "Paper";
  return "Scissors";
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  var smalluser = "user".fontsize(5).sub();          // create superscript / subscript for user and comp
  var smallcomp = "comp".fontsize(5).sub();
  result_p.innerHTML = convert(user) + smalluser + " beats " + convert(computer) + smallcomp + ". YOU WIN 🏆😁👍"
  document.getElementById(user).classList.add('green-glow');      // create a green glow on the border if the user wins
  setTimeout(function(){document.getElementById(user).classList.remove('green-glow')}, 1000);   // set how long after wnning the border will return to the original colour
}

function lose(user, computer) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  var smalluser = "user".fontsize(5).sub();
  var smallcomp = "comp".fontsize(5).sub();
  result_p.innerHTML = convert(user) + smalluser + " loses to " + convert(computer) + smallcomp + ". YOU LOSE 😖😭😵"
  document.getElementById(user).classList.add('red-glow');
  setTimeout(function(){document.getElementById(user).classList.remove('red-glow')}, 1000);
}

function draw(user, computer){
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  var smalluser = "user".fontsize(5).sub();
  var smallcomp = "comp".fontsize(5).sub();
  result_p.innerHTML = convert(user) + smalluser + " and " + convert(computer) + smallcomp + ". DRAW 🤡🤡🤡"
  document.getElementById(user).classList.add('grey-glow');
  setTimeout(function(){document.getElementById(user).classList.remove('grey-glow')}, 1000);
}



function game(userChoice) {
  var computerChoice = compChoice();
  switch(userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {                                            // this is the user's choice
  rock_div.addEventListener('click', function() {            // adding click event ... if clicked, display function
    game("rock");
  });
  paper_div.addEventListener('click', function() {
    game("paper");
  });
  scissors_div.addEventListener('click', function() {
    game("scissors");
  });
}
main();
