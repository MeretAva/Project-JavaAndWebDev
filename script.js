const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");
const resultDiv = document.getElementById("result");

let shuffledQuestions, currentQuestionIndex, score;

const questions = [
    {
        question: "Q1",
        answers: [
            {text: "A1", correct: true},
            {text: "A2", correct: true},
            {text: "A3", correct: true},
        ]
    },

    {
        question: "Q2",
        answers: [
            {text: "A1", correct: true},
            {text: "A2", correct: true},
            {text: "A3", correct: true},
        ]
    },

    {
        question: "Q3",
        answers: [
            {text: "A1", correct: true},
            {text: "A2", correct: true},
            {text: "A3", correct: true},
        ]
    },

    {
        question: "Q4",
        answers: [
            {text: "A1", correct: true},
            {text: "A2", correct: true},
            {text: "A3", correct: true},
        ]
    },

    {
        question: "Q5",
        answers: [
            {text: "A1", correct: true},
            {text: "A2", correct: true},
            {text: "A3", correct: true},
        ]
    },
]

startQuiz();

function startQuiz() {
    score = 0;
    questionContainer.style.display = "flex";
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    nextButton.classList.remove("hide");
    restartButton.classList.add("hide");
    resultDiv.classList.add("hide");
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer, index) => {
        const inputGroup = document.createElement("div");
        inputGroup.classList.add("input-group");

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.id = "answer" + index;
        radio.name = "answer";
        radio.value = index;

        const label = document.createElement("label");
        label.htmlFor = "answer" + index;
        label.innerText = answer.text;

        inputGroup.appendChild(radio);
        inputGroup.appendChild(label);
        answerButtons.appendChild(inputGroup);
    });
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

nextButton.addEventListener("click", () => {
    const answerIndex = Array.from(
        answerButtons.querySelectorAll("input")
    ).findIndex((radio) => radio.checked);
    if (answerIndex !== - 1) {
        if (shuffledQuestions[currentQuestionIndex].answers[answerIndex].
            correct) {
            score++;
        }
        currentQuestionIndex++;
        if (shuffledQuestions.length > currentQuestionIndex) {
            setNextQuestion();
        } else {
            endQuiz();
        }
    } else {
        alert("Please slect an answer.");
    }
});

restartButton.addEventListener("click", startQuiz);

function endQuiz() {
    questionContainer.style.display="none";
    nextButton.classList.add("hide");
    restartButton.classList.remove("hide");
    resultDiv.classList.remove("hide");
    resultDiv.innerText = 'Result display: ${score} / ${shuffledQuestions.length}';
}