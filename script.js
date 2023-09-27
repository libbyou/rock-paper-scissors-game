

var userChoice=["R" ,"P", "S"]

var wins=0

var loses=0

var tie=0
function play(){
console.log("userChoice")
    let answer= window.prompt("Enter R, P, or S");
    console.log (answer)


var index = Math.floor(Math.random() * userChoice.length);
  var computerChoice = userChoice[index];
  console.log(computerChoice);

  if (answer==computerChoice) {
    window.alert ("It's a tie!");
    tie++;
  } else if ((answer=="R" && computerChoice=="P")||(answer=="P" && computerChoice=="S") || (answer=="S" && computerChoice=="R")){
    window.alert("You win!");
    wins++;
  } else {
    window.alert ("You lost!");
    loses++;
  }

  window.alert ("Your wins " + wins + "Your loses " + loses + " Your ties" + tie);
}

