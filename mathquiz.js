var grid = new Grid({rows: 3, cols: 3});







var r1, r2;

var button = document.querySelector("#checkAnswer");
var answerInput = document.querySelector("#answer");

var checkAnswer = function () {
  var answer = r1 + r2;
  var userAnswer = answerInput.value;
  userAnswer = parseInt(userAnswer, 10);
  if (answer === userAnswer) {
    alert("correct");
  } else {
    alert("wrong");
  }
  };

  button.onclick = checkAnswer;

  var makeProblem = function () {
    var numA = document.querySelector("#a");
    r1 = Math.floor(Math.random() * 100);
    numA.innerHTML = r1;

  var numB = document.querySelector("#b");
  r2 = Math.floor(Math.random() * 100);
  numB.innerHTML = r2;

  answerInput.value = "";
};

makeProblem();
