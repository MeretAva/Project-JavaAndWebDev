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

let scoreWatson;
let scoreMilan;
let scoreChopo; 


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
    (Q2A1.checked || Q2A2.checked || Q2A3.checked) && (Q3A1.checked || Q3A2.checked || Q3A3.checked)) {
        resultDiv.classList.remove("hide");

        if (Q1A1.checked) {
            scoreWatson++;
        }
        else if (Q1A2.checked) {
            scoreMilan++;
        }
        else if (Q1A3.checked) {
            scoreChopo++;
        }
        else if (Q2A1.checked) {
            scoreWatson++;
        }
        else if (Q2A2.checked) {
            scoreMilan++;
        }
        else if (Q3A3.checked) {
            scoreChopo++;
        }
        else if (Q3A1.checked) {
            scoreWatson++;
        }
        else if (Q3A2.checked) {
            scoreMilan++;
        }
        else if (Q3A3.checked) {
            scoreChopo++;
        }

        if ((scoreWatson >= scoreMilan) && (scoreWatson >= scoreChopo)) {
            resultDiv.innerText = 'Congratulations! You are most like my horse Watson.';
        }
        else if ((scoreMilan >= scoreWatson) && (scoreMilan >= scoreChopo)) {
            resultDiv.innerText = 'Congratulations! You are most like my horse Milan.';
        } 
        else if ((scoreChopo >= scoreMilan) && (scoreChopo >= scoreWatson)) {
            resultDiv.innerText = 'Congratulations! You are most like my horse Chopo.';
        }
        
    }
    else{
       alert('Please selcet an answer for every question')
    }
   
    
}


restartButton.addEventListener("click", restartQuiz);

submitButton.addEventListener("click", calculateScore);
