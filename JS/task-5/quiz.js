const questions = document.getElementById("questions");
const optionsVal = document.getElementById("options");
const scoreDisplay = document.getElementById("score");
const restartBtn = document.getElementById("restart");

let index = 0;
let questionArray = [];
let score = 0;
let selectedAnswer = null;

fetch("question.json")
  .then((response) => response.json())
  .then((data) => {
    questionArray = data.questions;
    loadQuestion();
  })
  .catch((error) => console.error("Error loading questions:", error));

function loadQuestion() {
  if (index < questionArray.length) {
    const { question, answers, correctAnswer } = questionArray[index];
    questions.innerText = question;
    optionsVal.innerHTML = "";
    selectedAnswer = null;

    answers.forEach((answer) => {
      let option = document.createElement("input");
      let label = document.createElement("label");
      let br = document.createElement("br");

      option.type = "radio";
      option.name = "answer";
      option.value = answer;
      option.onclick = () => {
        selectedAnswer = answer;
      };

      label.innerText = answer;

      optionsVal.append(option, label, br);
    });
  } else {
    displayScore();
  }
}

function changeQuestion() {
  if (selectedAnswer != null) {
    if (selectedAnswer === questionArray[index].correctAnswer) {
      score++;
    }
    index++;
    loadQuestion();
  }
  else{
    alert("Add the value clearly!!")
  }
}

function displayScore() {
  questions.innerText = "Quiz Completed!";
  optionsVal.innerHTML = "";
  document.getElementById("next").style.display = "none";

  scoreDisplay.innerText = `Your score: ${score} / ${questionArray.length}`;
  restartBtn.style.display = "block";
}

function restartQuiz() {
  index = 0;
  score = 0;
  document.getElementById("next").style.display = "block";
  restartBtn.style.display = "none";
  scoreDisplay.innerText = "";
  loadQuestion();
}

restartBtn.addEventListener("click", () => {
    restartQuiz();
})