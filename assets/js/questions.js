var startButton = document.querySelector(".start-button");
var timer;
let timerCount = 60;
const quiz = document.querySelector("#quiz");
const timeEl = document.querySelector(".timer-count");
var questionBox =document.querySelector("#question");
var choices = document.querySelector("#choices");
let feedback = document.querySelector("#feedback");
let score = document.querySelector("#totalScore");
var scoreIndex = [];
var storedScore = JSON.parse(localStorage.getItem("playerData"));


let totalScore = 0;
let quesIndex = 0;
var timeExpired; 
let questionArrayOrder;
var saveButton = document.getElementById("save-button");

// list of all questions, choices, and answers
var questions = [
  {
    title: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts',
  },
  {
    title: 'The condition in an if / else statement is enclosed within ____.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    answer: 'parentheses',
  },
  {
    title: 'Arrays in JavaScript can be used to store ____.',
    choices: [
      'numbers and strings',
      'other arrays',
      'booleans',
      'all of the above',
    ],
    answer: 'all of the above',
  },
  {
    title:
      'String values must be enclosed within ____ when being assigned to variables.',
    choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    answer: 'quotes',
  },
  {
    title:
      'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
    answer: 'console.log',
  },

];  
let ques = questions[quesIndex];
var lastQuestion = questions.length - 1;



function countdown() {
}
function questionsOrder(arr){
  let arrIndex = [];
  for (let i = 0; i < arr.length; i++) {
    arrIndex.push(i);
    
  }
  return arrIndex
}
//start quiz
function startQuiz() {
  quiz.classList.remove("hide")
  quesIndex = 0;
  questionArrayOrder = (questionsOrder(questions))
  startButton.disabled = true;
  startTimer()
  renderQuestions(questions, questionArrayOrder[quesIndex])
  
}

//starts timer
function startTimer() {


  timerInterval = setInterval(function () {
    timerCount--;
    
    timeEl.textContent = timerCount;

    if (timerCount === 0) {

      clearInterval(timerInterval);
    
    }

  }, 1000);

}


startButton.addEventListener("click", startQuiz);

startButton.setAttribute("style", "background-color: black; color: gold;");

choices.setAttribute("style", "background-color: black; color: gold;");

//Function to show questions
function renderQuestions(arr, index ) {

  questionBox.innerHTML = arr[index].title

  let but;
  
  let currentAnswerArr = arr[index].choices

  for(let i = 0; i <currentAnswerArr.length; i++){
    but = document.createElement('button');
    but.classList.add('answer-btn')
    but.textContent = currentAnswerArr[i]

    but.addEventListener('click', checkAnswer)
    choices.appendChild(but)
  }

 
}

function clearQuestions(){
  questionBox.innerHTML = '';
  while(choices.hasChildNodes()){
    choices.removeChild(choices.childNodes[0])
  }
}
function saveScore(){
 var highScores = JSON.parse(window.localStorage.getItem("highScores"))||[]; 
 var initials = initialsInput.value.trim();
 if(initials !==""){
  var newScore = {
    score, initials
  };
  
 }
  
}

function scorePage(){
  var playerData = { initials : inputStringEl, score: totalScore} 
  scoreIndex.push(playerData);
  localStorage.getItem("highScores", JSON.stringify(scoreIndex));
  location.href = "./highscores.html";
};
//end quiz if timer runs out or last question is answered
function endQuiz(){

  clearQuestions()


 }
function checkAnswer(e){
  let selectedAnswer = e.target;
  let rightAnswer =  questions[questionArrayOrder[quesIndex]].answer;

  if(selectedAnswer.textContent == rightAnswer){
     //User receives 20 points for correct answer
    totalScore += 20
    score.textContent = 'Score: ' + totalScore;
    feedback.textContent = 'Correct!'

   
    console.log(totalScore)
  }
  else{
    //Fifteen seconds deducted
    timerCount -= 15
    timeEl.textContent = timerCount;
    feedback.textContent = 'Incorrect!'
    
    
    
}
setTimeout(function(){
  feedback.textContent = ""
},1000);
  
  clearQuestions()
  
  quesIndex++
  if(quesIndex < questions.length){
    renderQuestions(questions, questionArrayOrder[quesIndex])
  }
  else{
    //takes the user to the final page
    
   

  }
  saveBtn.addEventListener("click", function(){
    saveScore();
  })
}










    
   
      
  

