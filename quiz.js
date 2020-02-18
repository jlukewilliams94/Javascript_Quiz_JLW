


////////////
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

var correct = document.querySelector("#yes");

var incorrect = document.querySelector("#no");

var submit = document.querySelector("#submit");

var initials = document.querySelector("#initials")

var hsform = document.querySelector("#hsform");

var myscore = document.querySelector("#score");


var score = 0;

const highScores = JSON.parse(localStorage.getItem("highscores")) || [];
console.log(highScores)

const maxHighScore = 5;
 

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

 



var nQuestions= jsQuestions.length;

var timerInterval

var questionValue = 0;

var timeRemaining = 60;

//Start Time Function

    function startTimer () {
        timerInterval = setInterval(function() {
            //removes a second
            timeRemaining--;
            timer.textContent= timeRemaining;
        
            //Stops the clock with clearInterval
            if(timeRemaining === 0) {
                clearInterval(timerInterval)
                endQuiz()

            }
        
        }, 1000);

        renderQuestion()
}




    function renderQuestion () {
        
        questionNumber.textContent = ("Question # " + (questionValue + 1));
        
        var uniquequestion = jsQuestions[questionValue].question;
        currentQuestion.textContent = uniquequestion;


        var pickA = jsQuestions[questionValue].optionA;
        choiceA.textContent= pickA;
        
        var pickB = jsQuestions[questionValue].optionB;
        choiceB.textContent = pickB;
        
        var pickC = jsQuestions[questionValue].optionC;
        choiceC.textContent= pickC;

        var pickD = jsQuestions[questionValue].optionD;
        choiceD.textContent = pickD;
    
        quizQuestions.setAttribute("style", "visibility: visible");
        start.setAttribute("style", "visibility: hidden");
        newQuestion.setAttribute("style", "visibility: visible");


        console.log(score)

        if(questionValue === nQuestions - 1) {
            finish.setAttribute("style", "visibility: visible");
            newQuestion.setAttribute("style", "visibility: hidden")
        };

        

};

function nextQuestion() {

    var checkedOption = document.querySelector('input[type=radio]:checked');
    var answer = checkedOption.value

    if(jsQuestions[questionValue].correct == answer){
        score+=1;
        questionValue++;
        //alert("That was correct!");
    }

    else{
        questionValue++;
        timeRemaining-=10;
        //alert("Sorry that was incorrect!");
    }
    
    renderQuestion()
    

};

function finishQuiz (){
    clearInterval(timerInterval);

    var checkedOption = document.querySelector('input[type=radio]:checked');
    var answer = checkedOption.value 
    if(jsQuestions[questionValue].correct == answer){
        score+=1;
        questionValue++;
        alert("That was correct!");
    }
    myscore.textContent = ("Congradulations you got " + score + " out of 5");
    hsform.setAttribute("style", "visibility: visible");
    quizQuestions.setAttribute("style", "visibility: hidden");
    timer.setAttribute("style", "visibility: hidden");
    newQuestion.setAttribute("style", "visibility: hidden");
    finish.setAttribute("style", "visibility: hidden");
    

}


function endQuiz(){
    clearInterval(timerInterval);

    myscore.textContent = ("Congradulations you got " + score + " out of 5");
    hsform.setAttribute("style", "visibility: visible");
    quizQuestions.setAttribute("style", "visibility: hidden");
    timer.setAttribute("style", "visibility: hidden");
    newQuestion.setAttribute("style", "visibility: hidden");
    
};

function addToLeaderboard (event){
    event.preventDefault();
    console.log("clicked submit");
    var userScore = {
        points: score,
        name: initials.value
    }

    highScores.push(userScore);
    highScores.sort((a, b) => b.points- a.points);
    highScores.splice(5)
    
    console.log(highScores);
    localStorage.setItem("highscores", JSON.stringify(highScores));
    window.location.assign("highscore.html");
};




start.addEventListener("click", startTimer);
newQuestion.addEventListener("click", nextQuestion);
finish.addEventListener("click", finishQuiz);
submit.addEventListener("click", addToLeaderboard);






//Stores ID from document as a variable
var highScoreList = document.querySelector("#highScoreList");
//Retrieved highscores from local storage as a variable. 
var highScores= JSON.parse(localStorage.getItem("highscores")) || [];


//For Loop to generate a ordered list of highscores. 
for (var i = 0; i < highScores.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = highScores[i].name + "  " +highScores[i].points;
    highScoreList.append(listItem);
};