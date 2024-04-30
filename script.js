//Getting Elements from the index.html file to use in the script.js file
const submitButton = document.getElementById("submit-button");
const restartButton = document.getElementById("restart-button");
const resultDiv = document.getElementById("result");
const quizAnswers = document.getElementsByClassName("answer");
const Q1A1 = document.getElementById("Q1A1");
const Q1A2 = document.getElementById("Q1A2");
const Q1A3 = document.getElementById("Q1A3");
const Q2A1 = document.getElementById("Q2A1");
const Q2A2 = document.getElementById("Q2A2");
const Q2A3 = document.getElementById("Q2A3");
const Q3A1 = document.getElementById("Q3A1");
const Q3A2 = document.getElementById("Q3A2");
const Q3A3 = document.getElementById("Q3A3");
const Q4A1 = document.getElementById("Q4A1");
const Q4A2 = document.getElementById("Q4A2");
const Q4A3 = document.getElementById("Q4A3");
const Q5A1 = document.getElementById("Q5A1");
const Q5A2 = document.getElementById("Q5A2");
const Q5A3 = document.getElementById("Q5A3");

//defining variables used in functions
let scoreWatson;
let scoreMilan;
let scoreChopo;

//restarting the Quiz when the website is fisrt started
restartQuiz();

//unchecking all radio buttons by irrating through all radio buttons
function uncheckAll() {
  for (let answer of quizAnswers) {
    answer.checked = false;
  }
}

//function to restart the quiz
function restartQuiz() {
  //unchecking all radio buttons
  uncheckAll();
  //setting the scores to 0
  scoreWatson = 0;
  scoreMilan = 0;
  scoreChopo = 0;
  //hiding the result division
  resultDiv.classList.add("hide");
}

//function to calculate the score
function calculateScore() {
  //checking that all radio buttons have been answered
  if (
    (Q1A1.checked || Q1A2.checked || Q1A3.checked) &&
    (Q2A1.checked || Q2A2.checked || Q2A3.checked) &&
    (Q3A1.checked || Q3A2.checked || Q3A3.checked) &&
    (Q4A1.checked || Q4A2.checked || Q4A3.checked) &&
    (Q5A1.checked || Q5A2.checked || Q5A3.checked)
  ) {
    //unhiding the divison class
    resultDiv.classList.remove("hide");

    //incrementing each score if the correct answer has been selected
    scoreWatson +=
      Q1A1.checked + Q2A1.checked + Q3A1.checked + Q4A1.checked + Q5A1.checked;
    scoreMilan +=
      Q1A2.checked + Q2A2.checked + Q3A2.checked + Q4A2.checked + Q5A2.checked;
    scoreChopo +=
      Q1A3.checked + Q2A3.checked + Q3A3.checked + Q4A3.checked + Q5A3.checked;

    //finding the largest score
    let maxScore = Math.max(scoreWatson, scoreChopo, scoreMilan);

    //displaying the correct result in the result division
    if (scoreWatson == scoreMilan) {
      resultDiv.innerText =
        "Oh wow! You resemble both Watson and Milan equally. Their biggest similarity is that they are extreely loyal and kind-hearted. They will love anyone they meet on the spot. ";
    } else if (scoreWatson == scoreChopo) {
      resultDiv.innerText =
        "Oh wow! You resemble both Watson and Chopo equally. Their biggest similarity is that they both act extremely tough but as soon as they get scared they could not be more grateful for any support they can get.";
    } else if (scoreMilan == scoreChopo) {
      resultDiv.innerText =
        "Oh wow! You resemble both Milan and Chopo equally. Their biggest similarity as that they love relaxing more than exercise. They enjoy their afternoon naps in the sun together.";
    } else if (scoreWatson == maxScore) {
      resultDiv.innerText =
        "Congratulations! You are most like my horse Watson. Watson is the tallest and most active horse I know. He is always on the move and ready to accomplish new challenges. Although he might need a bit of extra support when encountering scary situations outside of the barn.";
    } else if (scoreMilan == maxScore) {
      resultDiv.innerText =
        "Congratulations! You are most like my horse Milan. Milan has the kindest soul out of any of my horses. He is the biggest sweatheart I know and always willing to please anyone he meets. And on top of that, the only thing missing for Milan to look like a real life unicorn is a horn.";
    } else if (scoreChopo == maxScore) {
      resultDiv.innerText =
        "Congratulations! You are most like my horse Chopo. Chopo has a beautiful chocolate colour and a shiny coat. At first he might seem a bit grumpy but once he has gotten to know someone he won't leave their side again. He is most likely the coolest horse I own.";
    }

    //fetching the API to display information in the result divison
    getAPI();
  }
  //alert the user if questions have been left unanswered
  else {
    alert("Please selcet an answer for every question");
  }
}

// import React from "https://esm.run/react@18";
// import { createRoot } from "https://esm.run/react-dom@18/client";
// import confetti from "https://esm.run/canvas-confetti@1";

// //ADD SOURCE

//   function onClick() {
//     confetti({
//       particleCount: 150,
//       spread: 60
//     });

//   return (
//     <button className="button" onClick={onClick}>
//       <span>🐴</span>
//       <span>Submit</span>
//     </button>
//   );
// }

// createRoot(document.getElementById("confetti-button")).render(<App />);

// //ADD SOURCE
// function getAPI() {
//     fetch('https://animals-by-api-ninjas.p.rapidapi.com/v1/animals?name=horse', {
//         'method' : 'GET',
//         'headers': {
//             'X-RapidAPI-Key': '99062e5ffcmshc5f2fab3fb9324ep1da829jsnc938f065eeca',
//             'X-RapidAPI-Host': 'animals-by-api-ninjas.p.rapidapi.com'
//         }
//     })
//     .then(response => response.json());
//     .then(response =>
//         {console.log(response);
//     })
//     .catch(err => {
//         console.log(err);
//     });
// }

//Animals by API Ninjas: https://rapidapi.com/apininjas/api/animals-by-api-ninjas/
// function getAPI() {
//     const url = 'https://animals-by-api-ninjas.p.rapidapi.com/v1/animals?name=horse';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '99062e5ffcmshc5f2fab3fb9324ep1da829jsnc938f065eeca',
// 		'X-RapidAPI-Host': 'animals-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }

restartButton.addEventListener("click", restartQuiz);

submitButton.addEventListener("click", calculateScore);
