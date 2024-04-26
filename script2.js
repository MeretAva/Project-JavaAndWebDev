const submitButton = document.getElementById("submit-button");
const restartButton = document.getElementById("restart-button");
const resultDiv = document.getElementById("result");
const quizAnswers = document.getElementsByClassName("answer")

let score; 

function uncheckAll() {
    for (let answer of quizAnswers) {  
        answer.checked = false;
    }
}

function restartQuiz() {
    uncheckAll();
    score = 0;
    resultDiv.classList.add("hide");
}

function calculateScore() {
    
}


restartButton.addEventListener("click", restartQuiz);

submitButton.addEventListener("click", resultDiv.classList.remove("hide"));
