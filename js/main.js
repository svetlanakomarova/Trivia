/*
 * name: Svetlana Komarova
 * assignment: Assignment 1
 * February 5, 2021
 * 
 * This program presents: 
 * the user with trivia “question cards” one at a time, 
 * along with a list of options(answers) to choose from.
 */

var currentCard = 1;// display the current question
var correct = 0;    // keep track of user's answers

function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;

    if (currentCard === 1) {
        // if answer is correct
        if (question1 === "Indian") {
            // add to the number of correct answers
            correct++;
        }
        // display next question
        document.getElementById("q1").style.display = "none";
        document.getElementById("q2").style.display = "block";
    }
    if (currentCard === 2) {
        // if answer is correct
        if (question2 === "Octopus") {
            // add to the number of correct answers
            correct++;
        }
        // display next question
        document.getElementById("q2").style.display = "none";
        document.getElementById("q3").style.display = "block";
        //change button title on the last page
        document.getElementById("button").value = "Get Score";
    }
    if (currentCard === 3) {
        // if answer is correct
        if (question3 === "Pizza") {
            // add to the number of correct answers
            correct++;
        }
        // on submit, show the results
        document.getElementById("after_submit").style.display = "block";
    }
    // move to next question
    currentCard++;

    // calculate the result
    var messages = ["Great job!", "That's just okay.", "You really need to do better."];
    var range;

    if (correct < 1) {
        range = 2;
    }
    if (correct > 0 && correct < 3) {
        range = 1;
    }
    if (correct > 2) {
        range = 0;
    }

    // display an appropriate message
    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}

function help() {

    alert('Choose one answer and click "Next question". \n\
At the end of the Quiz, select "Get Score". \n\
Reload the page to restart the game.');
}


