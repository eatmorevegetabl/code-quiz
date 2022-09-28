var startButton = document.getElementById('strt-btn');
var questionContainerEl = document.getElementById('question-container');
var questionEl = document.getElementById('question');
var answerButtons = document.getElementById('answer-btns');
var answerButton1 = document.getElementById('0');
var answerButton2 = document.getElementById('1');
var answerButton3 = document.getElementById('2');
var answerButton4 = document.getElementById('3');
var scoreEl = document.getElementById('score');
var timeEl = document.getElementById('time');
var questionIndex = 0;
var secondsLeft = 75;
var count = 0;


startButton.addEventListener('click', startQuiz);
answerButtons.addEventListener('click', selectAnswer);
answerButtons.addEventListener('click', nextQuestion);


function startQuiz() {
  startButton.classList.add('hide');
  questionContainerEl.classList.remove('hide');
  scoreEl.classList.remove('hide');
  timeEl.classList.remove('hide');
  setTime();
  nextQuestion();
}

function nextQuestion() {
  if (count <= 5) {
    answerButton1.textContent = questions[questionIndex].answers[0].text;
    answerButton2.textContent = questions[questionIndex].answers[1].text;
    answerButton3.textContent = questions[questionIndex].answers[2].text;
    answerButton4.textContent = questions[questionIndex].answers[3].text;

    var currentQuestion = questions[questionIndex];
    questionEl.textContent = currentQuestion.question
  } else {
    secondsLeft = 0;
    sendMessage();
  }
}

function selectAnswer(event) {
  var El = event.target.getAttribute('id')
  if (questions[questionIndex].answers[El].correct === true) {
    count++;
    scoreEl.textContent = count;
    nextQuestion;
  } else {
    secondsLeft = secondsLeft - 15;
  }
  questionIndex++;
}

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = "Your score is " + count + "/5";
}

var questions = [
  {
    question: 'Select the Correct Choice for Question 1',
    answers: [
      { text: 'Right Choice', correct: true },
      { text: 'Wrong Choice', correct: false },
      { text: 'Wrong Choice', correct: false },
      { text: 'Wrong Choice', correct: false },
    ]
  },
  {
    question: 'Select the Correct Choice for Question 2',
    answers: [
      { text: 'Wrong Choice', correct: false },
      { text: 'Right Choice', correct: true },
      { text: 'Wrong Choice', correct: false },
      { text: 'Wrong Choice', correct: false },
    ]
  },
  {
    question: 'Select the Correct Choice for Question 3',
    answers: [
      { text: 'Wrong Choice', correct: false },
      { text: 'Wrong Choice', correct: false },
      { text: 'Wrong Choice', correct: false },
      { text: 'Right Choice', correct: true },
    ]
  },
  {
    question: 'Select the Correct Choice for Question 4',
    answers: [
      { text: 'Wrong Choice', correct: false },
      { text: 'Wrong Choice', correct: false },
      { text: 'Right Choice', correct: true },
      { text: 'Wrong Choice', correct: false },
    ]
  },
  {
    question: 'Select the Correct Choice for Question 5',
    answers: [
      { text: 'Wrong Choice', correct: false },
      { text: 'Wrong Choice', correct: false },
      { text: 'Wrong Choice', correct: false },
      { text: 'Right Choice', correct: true },
    ]
  }
]