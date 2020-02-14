var start = document.querySelector("#start");
var timer = document.querySelector("#timer")

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

var visibility = document.querySelector("#visibility");

var submit = document.querySelector("#submit");

var score = 0;


 

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


//Start Time Function
var timeRemaining = 20;

    function startTimer () {
        timerInterval = setInterval(function() {
            //removes a second
            timeRemaining--;
            timer.textContent= timeRemaining;
        
            //Stops the clock with clearInterval
            if(timeRemaining === 0) {
                clearInterval(timerInterval)
                questionValue++;
                renderQuestion()
            }
        
          }, 1000);

}


function renderQuestion () {

    clearInterval(timerInterval)
    timeRemaining = 20
    startTimer()


        
        questionNumber.textContent = ("Question # " + (questionValue + 1));
        if(questionValue === 5){
            endQuiz();
        };

        if(questionValue === nQuestions - 1) {
            newQuestion.innerHTML = "Finish";
            newQuestion.setAttribute("href", "https://www.google.com");
        };
        
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

        newQuestion.setAttribute("style", "visibility: visible");
        visibility.setAttribute("style", "visibility: visible");
        console.log(score)

};

function nextQuestion() {

    clearInterval(timerInterval)

    var checkedOption = document.querySelector('input[type=radio]:checked');
    answer = checkedOption.value

    if(jsQuestions[questionValue].correct == answer){
        alert("that is correct");
        score+=1;
        questionValue++;


    }
    else{
        questionValue++;
    }
    
    
    renderQuestion()
    

};


function endQuiz(){
    clearInterval(timerInterval);
    questionNumber.textContent = ("Question # " + 5);
    //location.replace("https://www.google.com");
    alert("Your score is " + score + "/5")
    
}

function addToLeaderboard (event) {
    ProgressEv


}



console.log(jsQuestions);

console.log(nQuestions);
console.log(questionValue);


start.addEventListener("click", renderQuestion);
newQuestion.addEventListener("click", nextQuestion);
finish.addEventListener("click", endQuiz);
start.addEventListener("click", addToLeaderboard);




