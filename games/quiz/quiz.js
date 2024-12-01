const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 1
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
        answer: 1
    },
    {
        question: "What is the color of the sky?",
        options: ["Green", "Blue", "Red", "Yellow"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestion.question;
    document.getElementById('option0').innerText = currentQuestion.options[0];
    document.getElementById('option1').innerText = currentQuestion.options[1];
    document.getElementById('option2').innerText = currentQuestion.options[2];
    document.getElementById('option3').innerText = currentQuestion.options[3];
    document.getElementById('result').innerText = '';
    document.getElementById('nextButton').style.display = 'none';
}

function selectOption(index) {
    const currentQuestion = questions[currentQuestionIndex];
    if (index === currentQuestion.answer) {
        score++;
        document.getElementById('result').innerText = "Correct!";
    } else {
        document.getElementById('result').innerText = "Wrong!";
    }
    document.getElementById('nextButton').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.querySelector('.quiz-container').innerHTML = `<h1>Quiz Finished!</h1><p>Your score: ${score} out of ${questions.length}</p>`;
    }
}

window.onload = loadQuestion;