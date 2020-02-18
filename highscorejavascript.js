var highScoreList = document.querySelector("#highScoreList");
var highScores= JSON.parse(localStorage.getItem("highscores")) || [];


console.log(highScores)


for (var i = 0; i < highScores.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = highScores[i].name + "  " +highScores[i].points;
    highScoreList.append(listItem);
};