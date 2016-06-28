var Quiz = function(){
  this.questions = getQuestions();
  this.points = 0;
  this.currentQ = 0;
}

PLAYERS = {
  1: "Stephen Curry",
  2: "Draymond Green",
  3: "Andrew Bogut",
  4: "Andre Iguodala",
  5: "Harrison Barnes",
  6: "Klay Thompson",
  7: "Ian Clark",
  8: "Marreese Speights",
  9: "Leandro Barbosa",
  10: "Brandon Rush",
  11: "Festus Ezeli",
  12: "Shaun Livingston",
  13: "Anderson Varejao"
}

if (Array.prototype.shuffle === undefined){
  Array.prototype.shuffle = function() {
    for (var i = 0; i < this.length; i++) {
      var randIdx = Math.floor(Math.random() * this.length - i) + i;
      var temp = this[i];
      this[i] = this[randIdx];
      this[randIdx] = temp;
    }

    return this;
  };
}

function getQuestions(){
  var questions = [];
  Object.keys(PLAYERS).shuffle().forEach(function(playerNum){
    questions.push(makeQuestion(playerNum));
  });
  return questions;
}

function makeQuestion(playerNum) {
  var playerName = PLAYERS[playerNum];
  var question = {}
  question[playerName] = true;
  var seenNumbers = [parseInt(playerNum)];
  for (var i = 0; i < 3; i++) {
    var num = Math.floor(Math.random() * (13 - 1)) + 1;
    while (seenNumbers.indexOf(num) !== -1){
      num = Math.floor(Math.random() * (13 - 1)) + 1;
    }
    question[PLAYERS[num]] = false;
    seenNumbers.push(num);
  }

  return question;
}

Quiz.prototype.checkGuess = function(guess) {
  var question = this.questions[this.currentQ];
  if (question[guess] === true){
    this.points += 1;
    console.log("correct");
  }
  return this.points;
};


module.exports = Quiz;
