const submitButton = document.getElementById("submit-button");
const restartButton = document.getElementById("restart-button");
const resultDiv = document.getElementById("result");
const quizAnswers = document.getElementsByClassName("answer");

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
    //if (all checked) {
        resultDiv.classList.remove("hide");
        resultDiv.innerText = 'Result display here!';
    //}
    //else{
    //    alert('Please selcet an answer for every question')
    //}
   
    
}


restartButton.addEventListener("click", restartQuiz);

submitButton.addEventListener("click", calculateScore);
