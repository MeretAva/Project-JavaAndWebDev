const submitButton = document.getElementById("submit-button");
const restartButton = document.getElementById("restart-button");
const resultDiv = document.getElementById("result");
const quizAnswers = document.getElementsByClassName("answer");
const Q1A1 = document.getElementById('Q1A1');
const Q1A2 = document.getElementById('Q1A2');
const Q1A3 = document.getElementById('Q1A3');
const Q2A1 = document.getElementById('Q2A1');
const Q2A2 = document.getElementById('Q2A2');
const Q2A3 = document.getElementById('Q2A3');
const Q3A1 = document.getElementById('Q3A1');
const Q3A2 = document.getElementById('Q3A2');
const Q3A3 = document.getElementById('Q3A3');
const Q4A1 = document.getElementById('Q4A1');
const Q4A2 = document.getElementById('Q4A2');
const Q4A3 = document.getElementById('Q4A3');
const Q5A1 = document.getElementById('Q5A1');
const Q5A2 = document.getElementById('Q5A2');
const Q5A3 = document.getElementById('Q5A3');

let scoreWatson;
let scoreMilan;
let scoreChopo; 

restartQuiz();


function uncheckAll() {
    for (let answer of quizAnswers) {  
        answer.checked = false;
    }
}

function restartQuiz() {
    uncheckAll();
    scoreWatson = 0;
    scoreMilan = 0;
    scoreChopo = 0;
    resultDiv.classList.add("hide");
}

function calculateScore() {
    if ((Q1A1.checked || Q1A2.checked || Q1A3.checked) && 
    (Q2A1.checked || Q2A2.checked || Q2A3.checked) && (Q3A1.checked || Q3A2.checked || Q3A3.checked) &&
    (Q4A1.checked || Q4A2.checked || Q4A3.checked) && (Q5A1.checked || Q5A2.checked || Q5A3.checked)) {
        resultDiv.classList.remove("hide");

        scoreWatson += (Q1A1.checked + Q2A1.checked + Q3A1.checked + Q4A1.checked + Q5A1.checked);
        scoreMilan += (Q1A2.checked + Q2A2.checked + Q3A2.checked + Q4A2.checked + Q5A2.checked);
        scoreChopo += (Q1A3.checked + Q2A3.checked + Q3A3.checked + Q4A3.checked + Q5A3.checked);


        console.log(scoreWatson, scoreChopo, scoreMilan);
    
        let maxScore = Math.max(scoreWatson, scoreChopo, scoreMilan);
        
        if (scoreWatson == scoreMilan) {
            resultDiv.innerText = 'Oh wow! You resemble both Watson and Milan equally.';
        }
        else if (scoreWatson == scoreChopo) {
            resultDiv.innerText = 'Oh wow! You resemble both Watson and Chopo equally.';
        }
        else if (scoreMilan == scoreChopo) {
            resultDiv.innerText = 'Oh wow! You resemble both Milan and Chopo equally.';
        }
        else if (scoreWatson == maxScore) {
            resultDiv.innerText = 'Congratulations! You are most like my horse Watson.';
        }
        else if (scoreMilan == maxScore) {
            resultDiv.innerText = 'Congratulations! You are most like my horse Milan.';
        } 
        else if (scoreChopo == maxScore) {
            resultDiv.innerText = 'Congratulations! You are most like my horse Chopo.';
        }
        
        
    }
    else{
       alert('Please selcet an answer for every question')
    }
    
}

restartButton.addEventListener("click", restartQuiz);

submitButton.addEventListener("click", calculateScore);
