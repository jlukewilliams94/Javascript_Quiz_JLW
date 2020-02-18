
// Array of Questions and Answers. Each Question is stored as an object. 
var jsQuestions = [{

    question: "Inside which HTML element do we put the Javascript?",
    optionA: '<javascript>',
    optionB: '<js>',
    optionC: '<scripting>',
    optionD: '<script>',
    correct: 'D',

},

{
    question: 'How do you write Hello World in an alert box?',
    optionA: 'msg("Hello World")',
    optionB: 'alert("Hello World")',
    optionC: 'msgBox("Hello World")',
    optionD: 'yell("Hello World")',
    correct: 'B',

},

{
    question: 'How do you write an IF statement in Javascript?',
    optionA: 'if i===5 then',
    optionB: 'if i==5',
    optionC: 'if (i==5)',
    optionD: 'if i=5 then',
    correct: 'C',
},

{             
    question: 'Which is the correct way to a Javascript Array',
    optionA: 'var colors = ["red","blue", "green"]',
    optionB: 'var colors = 1 = ("red"), 2=("blue"), 3=("green")',
    optionC: 'var colors = (1:"red",2:"blue",3:"green")',
    optionD: 'var colors = "red","blue","green"',
    correct: 'A',
},

{
    question: 'Which event listener will cause the function to run when the user clicks their mouse?',
    optionA: 'runFunction.addEventListener("hover", function() {}',
    optionB: 'runFunction.addEventListener("toggle", function() {}',
    optionC: 'runFunction.addEventListener("click", function() {}',
    optionD: 'runFunction.addEventListener("press", function() {}',
    correct: 'C',

}]

// Variable set to the length of the Questions Array. 
var nQuestions= jsQuestions.length;
// Global Time Interval Variable
var timerInterval
//Variable sets the Question Value to 0.
var questionValue = 0;
// Variable sets the Quiz Time to 60 seconds.
var timeRemaining = 60;
// Variable sets the initial score to 0 points.
var score = 0;
//Sets a constant to retrieve highscores in local storage. 
const highScores = JSON.parse(localStorage.getItem("highscores")) || [];
// Sets a constant to the highest score on quiz of 5 points. 
const maxHighScore = 5;

// Stored Variables to retrieve ID's from document. 
var start = document.querySelector("#start");
var timer = document.querySelector("#timer")
var quizQuestions = document.querySelector("#quiz-questions")
var questionNumber = document.querySelector("#question-number")
var currentQuestion = document.querySelector("#current-question");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");
var newQuestion = document.querySelector("#nextQuestion");
var finish = document.querySelector("#finish");
var submit = document.querySelector("#submit");
var initials = document.querySelector("#initials")
var hsform = document.querySelector("#hsform");
var myscore = document.querySelector("#score");

//Timer function to start on Start Button click event. 
function startTimer () {
    timerInterval = setInterval(function() {
        //Removes 1 second from time remaining. 
        timeRemaining--;
        timer.textContent= timeRemaining;
    
        //When clock equal to zero, stops the clock. 
        if(timeRemaining === 0) {
            clearInterval(timerInterval)

        }
    
    }, 1000);
    // Call Function to Render Question when Start Button clicked.
    renderQuestion()
}

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

    

};

//Stored Function to cyle to next question when Next Question button is clicked. 
function nextQuestion() {

    //Stores the quiz takers input.
    var checkedOption = document.querySelector('input[type=radio]:checked');
    var answer = checkedOption.value
    // When the stored quiz takers answer is equal to arrays object answer score incrrease by 1, question number increases by 1 and user is alerted of correct answer. 
    if(jsQuestions[questionValue].correct == answer){
    score+=1;
    questionValue++;
    alert("That was correct!");
}
    //When the stored quiz takers answer is not equal to array ojects answer question value increase by 1 and user is alerted of incorrect answer. 
    else{
    questionValue++;
    timeRemaining-=10;
    alert("Sorry that was incorrect!");
}
    //Calls function to render question. 
    renderQuestion()

};



//Start Timer Event Listener.
start.addEventListener("click", startTimer);
//New Question Event Listener
newQuestion.addEventListener("click", nextQuestion);