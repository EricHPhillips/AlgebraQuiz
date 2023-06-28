"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Eric Phillips
      Date:   June 11th, 2023

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
let timeID;

// and the node list for questions
let questionList = document.querySelectorAll("div#quiz input");

// onclickevent handler to the startQuiz
startQuiz.onclick = function(){
overlay.className = "showquiz";

//function every 1 second (every 1000 milliseconds)
timeID = setInterval(function theInnerFunc () {
    countdown();
  }, 1000);
};

//countdown()function to update the quiz clock
function countdown(){

// create an if else statement that tests whether the value of the timeLeft variable is equal to 0
if(timeLeft === 0){

//clearing interval
clearInterval(timeID);

//Declare a variable named totalCorrect and set it equal to the value returned by the checkAnswers()
let totalCorrect = checkAnswers();

//If totalCorrect is equal to the length of the correctAnswers array then display an alert window congratulating the student on getting 100%
if(totalCorrect === correctAnswers.length){alert("Congratulations! You got 100% ");}

//Display an alert window indicating the number of incorrect answers out of the total number of questions on the quiz
else{
    alert("The number of incorrect answers you have are "+(questionList.length - totalCorrect) + " of five questions");
//change the value of the timeLeft variable to quizTime,
    timeLeft = quizTime;
//set quizClock.value to the value of the timeLeft variable, and
    quizClock.value = timeLeft;
//change the class attribute of the overlay object to “hidequiz”.
    overlay.className = 'hidequiz';
}}

//Otherwise, if the timeLeft variable is not equal 0, then: Decrease the value of timeLeft by 1.
else {
    timeLeft = timeLeft - 1;
    quizClock.value = timeLeft;
}
}

/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

