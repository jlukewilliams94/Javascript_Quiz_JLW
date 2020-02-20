# Javascript_Quiz_JLW

Git Hub URL:

## https://jlukewilliams94.github.io/Javascript_Quiz_JLW/

This repository includes 2 HTML documents, a CSS styling document and 2 Javascript Documents. 

In this assignment the goal was to create a Javascript Quiz using Vanilla Javascript. The quiz's javascript had to meet the following criteria. 


## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```
## Some of the key Javascript Functions I used to meet the above acceptance criteria are:

1. Start Timer Function
This function is called when the user clicks the "Start Quiz" button on the home screen (index.html). Their is a stored variable called timeRemaining to store the amount of time the user is given to complete the quiz. The timer is reduced by 1s every second. When the clock equals 0, the timer is cleared and the end quiz function is called. A question is rendered as a result of the startTimer function being called when Start Timer button is "clicked"

var timeRemaining = 60;

//Timer function to start on Start Button click event. 
function startTimer () {
    timerInterval = setInterval(function() {
        //Removes 1 second from time remaining. 
        timeRemaining--;
        timer.textContent= timeRemaining;
    
        //When clock equal to zero, stops the clock. 
        if(timeRemaining === 0) {
            clearInterval(timerInterval)
            endQuiz()
        }
    
    }, 1000);
    // Call Function to Render Question when Start Button clicked.
    renderQuestion()
}

2. Every question asked with have a unique question number and the question will be derived from a set of objects stored within an array. 

Array Object Question e.g.

var jsQuestions = [{

    question: "Inside which HTML element do we put the Javascript?",
    optionA: '<javascript>',
    optionB: '<js>',
    optionC: '<scripting>',
    optionD: '<script>',
    correct: 'D',

}]

//Function stored to render new question.
function renderQuestion () {
    // Creates New Question Number for Each Individual Question. 
    questionNumber.textContent = ("Question # " + (questionValue + 1));
    //Generates next question (Object) in the Array. 
    var uniquequestion = jsQuestions[questionValue].question;
    currentQuestion.textContent = uniquequestion;
    //Generates OptionA in each Object in Array.
    var pickA = jsQuestions[questionValue].optionA;
    choiceA.textContent= pickA;
    //Generates OptionB in each Object in Array.
    var pickB = jsQuestions[questionValue].optionB;
    choiceB.textContent = pickB;
    //Generates OptionC in each Object in Array.
    var pickC = jsQuestions[questionValue].optionC;
    choiceC.textContent= pickC;
    //Generates OptionD in each Object in Array. 
    var pickD = jsQuestions[questionValue].optionD;
    choiceD.textContent = pickD;

    //Changes Quiz Questions CSS to Visible.
    quizQuestions.setAttribute("style", "visibility: visible");
    //Changes Start Button CSS to Hidden. 
    start.setAttribute("style", "visibility: hidden");
    //Changes Next Question Button CSS to Visible.
    newQuestion.setAttribute("style", "visibility: visible");

    // When Question Number is equal to 4 the Next Question Button is Hidden and Finish Button is Visible.
    if(questionValue === nQuestions - 1) {
        finish.setAttribute("style", "visibility: visible");
        newQuestion.setAttribute("style", "visibility: hidden")
    };

3. When the game ends the user will be given the option to submit their name with their score to the highscore page. The score is stored in the local storage in the web browser. The score and name is stored as an object within an array and sorted by score from high to low. 

//Stored Function to Store Inials and Quiz Score in Local Storage. 

function addToLeaderboard (event){
    //Prevents Page from Refreshing on click. 
    event.preventDefault();
    //Stores Userscore as a object
    var userScore = {
        points: score,
        name: initials.value
    };
    // Pushes Userscore to local storage
    highScores.push(userScore);
    //Stores the Highscores from Highest to Lowest. 
    highScores.sort((a, b) => b.points- a.points);
    //Stores only the top 5 Highest Scores. 
    highScores.splice(5);
    
    //Stores Highscores in Local Storage
    localStorage.setItem("highscores", JSON.stringify(highScores));
    window.location.assign("highscore.html");
};

