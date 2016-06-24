/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Stats = __webpack_require__(1);
	var Quiz = __webpack_require__(2)


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


/***/ },
/* 1 */
/***/ function(module, exports) {

	// function NBAPLayer(stats) {
	//   this.name = stats[name];
	//   this.fgp = stats[fgp];
	//   this.tpp = stats[tpp];
	//   this.ftp = stats[ftp];
	//   this.reb = stats[reb];
	//   this.ast = stats[ast];
	//   this.pts = stats[pts];
	// }

	bogutStats = {
	  name: "Andrew Bogut",
	  fpg: "62.3",
	  tpp: "0.00",
	  ftp: "35.7",
	  reb: "5.7",
	  ast: "1.4",
	  pts: "4.6"
	}

	barnesStats = {
	  name: "Harrison Barnes",
	  fpg: "38.5",
	  tpp: "34.2",
	  ftp: "76.5",
	  reb: "4.7",
	  ast: "1.3",
	  pts: "9.0"
	}

	greenStats = {
	  name: "Draymond Green",
	  fpg: "43.1",
	  tpp: "36.5",
	  ftp: "73.8",
	  reb: "9.9",
	  ast: "6.0",
	  pts: "15.4"
	}

	stats = {
	  "Andrew Bogut": bogutStats,
	  "Harrison Barnes": barnesStats,
	  "Draymond Green": greenStats
	}
	module.exports.names = stats;
	// module.exports.bogutStats = bogutStats;
	// module.exports.barnesStats = barnesStats;
	// module.exports.greenStats = greenStats;


/***/ },
/* 2 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);