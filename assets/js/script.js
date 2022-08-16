var startButton = document.getElementById('strt-btn');
var questionContainerEl = document.getElementById('question-container');
var questionEl = document.getElementById('question');
var nextButton = document.getElementById('nxt-btn');
var answerButtons = document.getElementById('answer-btns');
var scoreEl = document.getElementById('score');
var timeEl = document.getElementById('time');
var questionIndex = 0;
var secondsLeft = 75;
var count = 0;


startButton.addEventListener('click', startQuiz);
answerButtons.addEventListener('click', selectAnswer);
nextButton.addEventListener('click', nextQuestion);


function startQuiz() {
startButton.classList.add('hide');
questionContainerEl.classList.remove('hide');
nextButton.classList.remove('hide');
scoreEl.classList.remove('hide');
timeEl.classList.remove('hide');
setTime ();
nextQuestion();
}

function nextQuestion() {
  scoreEl.textContent = count;
  var currentQuestion = questions[questionIndex];
  questionEl.textContent = currentQuestion.question
  questionIndex++;
}

function selectAnswer(event) {
  var El = event.target.getAttribute('id')
  console.log(El)
  var currentQuestion = questions[questionIndex];
  if (El === 'button1') {
    console.log('it works')
    count++

  } else {
    timeEl.textContent = secondsLeft - 15;
  }
}

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
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
    question: 'question placeholder 1',
    answers: [
      {text: 'answer placeholder 1.a', correct: true},
      {text: 'answer placeholder 1.b', correct: false},
      {text: 'answer placeholder 1.c', correct: false},
      {text: 'answer placeholder 1.d', correct: false},
      ]
  },
  {
    question: 'question placeholder 2',
    answers: [
      {text: 'answer placeholder 2.a', correct: false},
      {text: 'answer placeholder 2.b', correct: true},
      {text: 'answer placeholder 2.c', correct: false},
      {text: 'answer placeholder 2.d', correct: false},
      ]
  },
  {
    question: 'question placeholder 3',
    answers: [
      {text: 'answer placeholder 3.a', correct: false},
      {text: 'answer placeholder 3.b', correct: false},
      {text: 'answer placeholder 3.c', correct: false},
      {text: 'answer placeholder 3.d', correct: true},
      ]
  },
  {
    question: 'question placeholder 4',
    answers: [
      {text: 'answer placeholder 4.a', correct: false},
      {text: 'answer placeholder 4.b', correct: false},
      {text: 'answer placeholder 4.c', correct: true},
      {text: 'answer placeholder 4.d', correct: false},
      ]
  },
  {
    question: 'question placeholder Z',
    answers: [
      {text: 'answer placeholder 5.a', correct: false},
      {text: 'answer placeholder 5.b', correct: false},
      {text: 'answer placeholder 5.c', correct: false},
      {text: 'answer placeholder 5.d', correct: true},
      ]
  }
]