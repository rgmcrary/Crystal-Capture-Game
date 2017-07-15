// Variables ####

var randNum;
var currentTally;
var wins = 0;
var losses = 0;

// Gameplay #####

var game = {



  // Random number generator #####

  start: function() {
    currentTally = 0;
    $("#score").text(currentTally);
    //$("#winLosses").text("");

    randNum = this.getRandomNumber(19, 120);
    $("#diamond").val(this.getRandomNumber(1, 12));
    $("#sapphire").val(this.getRandomNumber(1, 12));
    $("#ruby").val(this.getRandomNumber(1, 12));
    $("#emerald").val(this.getRandomNumber(1, 12));
    $("#targetNumber").text(randNum);
  },

  getRandomNumber: function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  takeTurn: function(event) {
    // Game Loop ################`
    // Score Tally #####

    var guess = parseInt(event.target.value);
    currentTally = guess + currentTally;
    $("#score").text(currentTally);

    //  Playing Conditions
    if (currentTally === randNum) {
      wins++;
      game.updateDisplay("YOU DID IT!!!", "win");
      game.start();
    } else if (currentTally > randNum) {
      losses++;
      game.updateDisplay("TOUGH LUCK...BETTER LUCK NEXT TIME", "loss");
      game.start();
    }
  },
  // Win/Loss Scoring #####

  updateDisplay: function(resultText, updateType) {
    alert(resultText);
    if (updateType === "win") {
      $("#wins").text(wins);
    } else {
      $("#losses").text(losses);
    }
  }
};

$(document).ready(function() {
  game.start();
  $("#diamond").on("click", game.takeTurn);
  $("#sapphire").on("click", game.takeTurn);
  $("#ruby").on("click", game.takeTurn);
  $("#emerald").on("click", game.takeTurn);
});

// Buttons #####

// make the updateDisplay an alert

// can use any layout as long as it works as required
