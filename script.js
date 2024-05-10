//Getting Elements from the index.html file to use in the script.js file
const submitButton = document.getElementById("submit-button");
const restartButton = document.getElementById("restart-button");
const resultDiv = document.getElementById("result");
const APIDiv = document.getElementById("APIcontent");
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

//the following code is from W3 schools (https://www.w3schools.com/howto/howto_js_accordion.asp)
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    //Toggle between adding and removing the "active" class, to highlight the button that controls the panel
    this.classList.toggle("active");

    //Toggle between hiding and showing the active panel
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//restarting the Quiz when the website is fisrt started
resetQuiz();

//prompts the user to enter their favourite horse in order to display the correct text
function askFavouriteHorse() {
  let favHorse = prompt(
    "Which one of my horses is your favourite?.",
    "Watson, Milan or Chopo"
  );
  let text;
  switch (favHorse) {
    case "Watson":
      text =
        "Watson is secretly my favourite too! Now start the quiz to see if you are most like him.";
      break;
    case "Milan":
      text =
        "Everyone loves Milan, he is such a sweetheart! Now start the quiz to see if you are most like him.";
      break;
    case "Chopo":
      text =
        "Chopo's charcter is so unique! Now start the quiz to see if you are most like him.";
      break;
    default:
      text =
        "Seems like you are not sure yet which one of my horses is your favourite. Now start the quiz to see which one you are most like!";
  }
  document.getElementById("favHorseText").innerHTML = text;
}

//unchecking all radio buttons by irrating through all radio buttons
function uncheckAll() {
  for (let answer of quizAnswers) {
    answer.checked = false;
  }
}

//function to restart the quiz
function resetQuiz() {
  //unchecking all radio buttons
  uncheckAll();
  //setting the scores to 0
  scoreWatson = 0;
  scoreMilan = 0;
  scoreChopo = 0;
  //hiding the result division
  resultDiv.classList.add("hide");
  APIDiv.classList.add("hide");
}

//reloads the entire wensite and resets the quiz
function restartQuiz() {
  resetQuiz();
  window.location.reload();
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
    //unhiding the divisons for the results and the API content
    resultDiv.classList.remove("hide");
    APIDiv.classList.remove("hide");

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
    if (maxScore == scoreWatson && maxScore == scoreMilan) {
      resultDiv.innerText =
        "Oh wow! You resemble both Watson and Milan equally. Their biggest similarity is that they are extreely loyal and kind-hearted. They will love anyone they meet on the spot. ";
    } else if (maxScore == scoreWatson && maxScore == scoreChopo) {
      resultDiv.innerText =
        "Oh wow! You resemble both Watson and Chopo equally. Their biggest similarity is that they both act extremely tough but as soon as they get scared they could not be more grateful for any support they can get.";
    } else if (maxScore == scoreMilan && maxScore == scoreChopo) {
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
  }
  //alert the user if questions have been left unanswered
  else {
    alert("Please selcet an answer for every question");
  }
}

//Adding event listeners to both buttons
restartButton.addEventListener("click", restartQuiz);
submitButton.addEventListener("click", calculateScore);

//Following code based and adapted from API Ninjas (https://rapidapi.com/apininjas/api/animals-by-api-ninjas)
//Accessing the Animals API by API Ninjas
const url =
  "https://animals-by-api-ninjas.p.rapidapi.com/v1/animals?name=Horse";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "99062e5ffcmshc5f2fab3fb9324ep1da829jsnc938f065eeca",
    "X-RapidAPI-Host": "animals-by-api-ninjas.p.rapidapi.com",
  },
};

//Calling the function to fetch the content from the API
fetchData();

//function to fetch data from the API
async function fetchData() {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const horseData = data.filter((item) => item.name === "Horse")[0];

    //Adding the keys and values of Taxonomy to a list by iterating through the keys
    const taxonomy = horseData.taxonomy;
    for (const key of Object.keys(taxonomy)) {
      const node = document.createElement("li");
      const textnode = document.createTextNode(
        `${key.replaceAll("_", " ")}: ${taxonomy[key]}`
      );
      node.appendChild(textnode);
      document.getElementById("horseTaxonomy").appendChild(node);
    }

    //Adding the keys and values of Characteristics to a list by iterating through the keys
    const characteristics = horseData.characteristics;
    for (const key of Object.keys(characteristics)) {
      const node = document.createElement("li");
      const textnode = document.createTextNode(
        `${key.replaceAll("_", " ")}: ${characteristics[key]}`
      );
      node.appendChild(textnode);
      document.getElementById("horseCharacteristics").appendChild(node);
    }
  } catch (error) {
    console.error(error);
  }
}
