var Stats = require("./warriors.js");
var Quiz = require("./quiz.js")
require("./style.css")


document.addEventListener("DOMContentLoaded", function () {
  var quizGame = new Quiz();
  var next = function(quizGame){
    debugger;
    var child = document.getElementsByTagName('li');
    if (child[0]) {
      while (child[0]){
        child[0].parentNode.removeChild(child[0]);
      }
    }
    var num = quizGame.currentQ;
    el = document.getElementById('question');
    Object.keys(quizGame.questions[num]).forEach(function(name){
      el = document.getElementById('question');
      newEl = document.createElement("li");
      text = document.createTextNode(name);
      newEl.appendChild(text);
      el.appendChild(newEl);
    });
    quizGame.currentQ = num + 1;
  }

  document.addEventListener("click", function(e){
    next(quizGame);
  });

});
