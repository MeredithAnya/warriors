var Quiz = function(){
  this.questions = getQuestions();
  this.points = 0;
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
  10: "Jason Thompson",
  11: "Festus Ezeli"
}

function getQuestions(){
  var questions = [];
  Object.keys(PLAYERS).forEach(function(playerNum){
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
    var num = Math.floor(Math.random() * (11 - 1)) + 1;
    while (seenNumbers.indexOf(num) !== -1){
      num = Math.floor(Math.random() * (11 - 1)) + 1;
    }
    question[PLAYERS[num]] = false;
    seenNumbers.push(num);
  }

  return question;
}


module.exports = Quiz;
