// Random Quiz

// Event Listener (Mark Quiz)
document.getElementById('mark-quiz').addEventListener('click', markQuiz);

//global variables
let score;

// Event Function
function markQuiz() {
    // Initialize Score
     score = 0;

    //mark questions
    markQuestion(1, "canada");
    markQuestion(2, "cardinal");
    markQuestion(3, "tai lung");
    markQuestion(4, "pickleball");

    // Display Quiz Results
    document.getElementById('quiz-score').innerHTML = score;
    document.getElementById('quiz-percent').innerHTML = Math.round(score / 4 * 100);
}

//define & invoke - local variables - organized - efficiency
function markQuestion(qNum, correctAnswer) {
    let userAnswer = document.getElementById("answer" + qNum).value;
    userAnswer = userAnswer.toLowerCase();

    let resultEl = document.getElementById("result" + qNum);
    if (userAnswer === correctAnswer) {
        resultEl.innerHTML = 'Correct';
        resultEl.style.color = 'green';
        score++;
    } else {
        resultEl.innerHTML = 'Incorrect';
        resultEl.style.color = 'red';
    }
}
