var Stats = require("./warriors.js");
var Quiz = require("./quiz.js")


document.addEventListener("DOMContentLoaded", function () {
  var quizGame = new Quiz();
  var next = function(quizGame){
    debugger;
    var child = document.getElementsByTagName('li');
    if (child[0]) {
      var len = Object.keys(child).length;
      for (var i = 0; i < len.length; i++) {
        console.log(child);
        child[i].parentNode.removeChild(child[i]);
      }
    }
    var num = quizGame.currentQ;
    el = document.getElementById('game');
    Object.keys(quizGame.questions[num]).forEach(function(name){
      el = document.getElementById('game');
      newEl = document.createElement("li");
      text = document.createTextNode(name);
      newEl.appendChild(text);
      el.appendChild(newEl);
    });
    quizGame.currentQ = num + 1;
    console.log(quizGame.currentQ);
  }

  document.addEventListener("click", function(e){
    next(quizGame);
  });

});
