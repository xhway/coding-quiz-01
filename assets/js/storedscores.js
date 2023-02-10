var clearHighScoreBtn = document.querySelector(".btn-clear");
var scoreList = document.getElementById("score-list");

clearHighScoreBtn.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});

var storedScore = JSON.parse(localStorage.getItem("highScores"));
 var highScoreArea = document.querySelector("#highScoreList");
 
// //  function scorePage(){
// //     var playerData = { initials : inputStringEl, score: totalScore} 
// //     scoreIndex.push(playerData);
// //     localStorage.setItem("playerData", JSON.stringify(scoreIndex));
   
// //   };
function scorePage(){
     if (storedScore !== null)
               var scoreList = document.createElement("ol");
             scoreList.className = "scoreListClass";
        for ( var i = 0; i < storedScore.length;i++){
            var initials = storedScore[i].inputStringEl;
            var score = storedScore[i].totalScore
            var scoreEntry = document.createElement("li");
            scoreEntry.innerHTML = initials + " - " + score;
            scoreList.appendChild(scoreEntry);
        }
        highScoreArea.appendChild(scoreList);

    }



 scorePage()

// clearBtn.addEventListener("click", function(){
//     highScoreArea.innerHTML= " ";
//     window.localStorage.clear();
// });