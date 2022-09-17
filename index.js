var readLineSync = require("readline-sync")
var score = 0;
var userName = readLineSync.question("What is Your Name? ")
console.log("Welcome " + userName + " Do You Know Rushikesh? ")
console.log(userName + " If You Type Wrong Answer then You Will Get -1 And Right Answer Will Give You 1 Point ")
console.log(userName + " Important notice first letter is capital and some answer have space")
var highScore = {
  name: "Tejas",
  score: 5,

}

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
  question: "Which is My Favourite Movie in Avenger? ",
  answer: "Infinity War",
}, {
  question: "Which is My Favourite Game? ",
  answer: "Cricket",
}, {
  question: "Whick Anime I Like Most ? ",
  answer: "Attack On Titan",
}, {
  question: "Which is My Favourite Dish To Eat ? ",
  answer: "Chicken Chilli",
}, {
  question: "Which Bollywood Series I Most Like  ? ",
  answer: "Asur",
}, {
  question: "Whick Thing Makes Me Happy? ",
  answer: "Paying Cricket",
},]
for (i = 0; i < question.length; i++) {
  var currentQuestion = question[i]
  play(currentQuestion.question, currentQuestion.answer)
}
if (highScore.score = score.value) {
  console.log("you score higher than " + highScore.name + " My friend" + userName)
} else {
  console.log("you score less than " + highScore.name + " My friend " + userName)
}
console.log("YAY! You Scored", score)
