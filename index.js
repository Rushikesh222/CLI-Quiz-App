var readLineSync = require("readline-sync")
var score = 0;
var userName = readLineSync.question("What is Your Name? ")
console.log("Welcome " + userName + " Do You Know Rushikesh? ")
console.log(userName + " If You Type Wrong Answer then You Will Get -1 And Right Answer Will Give You 1 Point ")
function play(question, answer) {
  var userAnswer = readLineSync.question(question)
  if (userAnswer === answer) {
    console.log("Right")
    score = score + 1
  } else {
    console.log("Wrong!")
    score = score - 1
  }
  console.log("current score:", score);
  console.log("-------")
}
var question = [{
  question: "Which is My Favourite Movie? ",
  answer: "Infinity War",
}, {
  question: "Which is My Favourite Game? ",
  answer: "Cricket",
}, {
  question: "Whick Anime I Like Most ? ",
  answer: "Attack on titan",
}, {
  question: "Which is My Favourite Dish To Eat ? ",
  answer: "chicken chilli",
}, {
  question: "Which Bollywood Series I Most Like  ? ",
  answer: "Asur",
}, {
  question: "Whick Thing Makes Me Happy? ",
  answer: "great",
},]
for (i = 0; i < question.length; i++) {
  var currentQuestion = question[i]
  play(currentQuestion.question, currentQuestion.answer)
}
console.log("YAY! You Scored", score)