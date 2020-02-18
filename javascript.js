
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