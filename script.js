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
        answer: [
            {text: "A1", correct: true},
            {text: "A2", correct: true},
            {text: "A3", correct: true},
        ]
    },

    {
        question: "Q2",
        answer: [
            {text: "A1", correct: true},
            {text: "A2", correct: true},
            {text: "A3", correct: true},
        ]
    },

    {
        question: "A3",
        answer: [
            {text: "Blue", correct: true},
            {text: "Pink", correct: true},
            {text: "Black", correct: true},
        ]
    },

    {
        question: "What is your favourite colour?",
        answer: [
            {text: "Blue", correct: true},
            {text: "Pink", correct: true},
            {text: "Black", correct: true},
        ]
    },

    {
        question: "What is your favourite colour?",
        answer: [
            {text: "Blue", correct: true},
            {text: "Pink", correct: true},
            {text: "Black", correct: true},
        ]
    },
]