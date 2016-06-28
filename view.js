var Stats = require("./warriors.js");
var Quiz = require("./quiz.js")
require("./style.css")

var getStats = function(quizGame){
  var players = quizGame.questions[quizGame.currentQ];
  var playerName = "";
  debugger;
  Object.keys(players).forEach(function(player){
    if (players[player]){
      playerName = player;
    }
  });
  return Stats.names[playerName];
}

var displayStats = function(quizGame){
  var stats = getStats(quizGame);

  el = document.getElementById('stats');
  Object.keys(stats).forEach(function(statName){
    el = document.getElementById('question');
    newEl = document.createElement("li");
    newEl.className += "stats-item";
    text = document.createTextNode(statName + ": "+ stats[statName]);
    newEl.appendChild(text);
    el.appendChild(newEl);
  });
}

var start = function(quizGame){
  displayStats(quizGame);
  var count = 0;
  el = document.getElementById('question');
  Object.keys(quizGame.questions[0]).forEach(function(name){
    el = document.getElementById('question');
    newEl = document.createElement("li");
    newEl.className += "player" + count;
    text = document.createTextNode(name);
    newEl.appendChild(text);
    el.appendChild(newEl);

    count += 1;
  });
  checkGuess(quizGame);
}

var next = function(quizGame){
  el = document.getElementById('question');
  var child = document.getElementsByTagName('li');
  if (child[0]) {
    while (child[0]){
      child[0].parentNode.removeChild(child[0]);
    }
  }
  
  var num = quizGame.currentQ;
  quizGame.currentQ = num + 1;
  var count = 0;
  displayStats(quizGame);

  Object.keys(quizGame.questions[quizGame.currentQ]).forEach(function(name){
    el = document.getElementById('question');
    newEl = document.createElement("li");
    newEl.className += "player" + count;
    text = document.createTextNode(name);
    newEl.appendChild(text);
    el.appendChild(newEl);

    count += 1;
  });
}

var clicked = function(e){
  var quizGame = this;
  console.log("meow");
  var guess = e.target.innerHTML;
  if (quizGame.currentQ < 12){
    quizGame.checkGuess(guess);
    next(quizGame);
  } else {
    endQuiz(quizGame);
  }
};

var checkGuess = function(quizGame){
  el = document.getElementById('question');
  // el.addEventListener("click", clicked.bind(quizGame));
  el.onclick = clicked.bind(quizGame);
}

var endQuiz = function(quizGame){
  el = document.getElementById('question');
  debugger;
  // el.removeEventListener("click", clicked, false);
  el.onclick = null;
}

document.addEventListener("DOMContentLoaded", function () {
  var quizGame = new Quiz();

  start(quizGame);
  // checkGuess(quizGame);
});
