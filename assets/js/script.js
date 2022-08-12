var startButton = document.getElementById('strt-btn')
var questionContainerEl = document.getElementById('question-container')
var questionEl = document.getElementById('question')
var answerButtons = document.getElementById('answer-btns')
var questionIndex = 0;

startButton.addEventListener('click', startQuiz)
answerButtons.addEventListener('click', selectAnswer)


function startQuiz() {
startButton.classList.add('hide')
questionContainerEl.classList.remove('hide')
nextQuestion()
}

function nextQuestion() {
var currentQuestion = questions[questionIndex];
  questionEl.textContent = currentQuestion.question
}

function selectAnswer(event) {
  var El = event.target.getAttribute('id')
  console.log(El)
  var currentQuestion = questions[questionIndex];
  if ()
}

function displayQuestion() {

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
      {text: 'answer placeholder 2.a', correct: true},
      {text: 'answer placeholder 2.b', correct: false},
      {text: 'answer placeholder 2.c', correct: false},
      {text: 'answer placeholder 2.d', correct: false},
      ]
  },
  {
    question: 'question placeholder 3',
    answers: [
      {text: 'answer placeholder 3.a', correct: true},
      {text: 'answer placeholder 3.b', correct: false},
      {text: 'answer placeholder 3.c', correct: false},
      {text: 'answer placeholder 3.d', correct: false},
      ]
  },
  {
    question: 'question placeholder 4',
    answers: [
      {text: 'answer placeholder 4.a', correct: true},
      {text: 'answer placeholder 4.b', correct: false},
      {text: 'answer placeholder 4.c', correct: false},
      {text: 'answer placeholder 4.d', correct: false},
      ]
  },
  {
    question: 'question placeholder 5',
    answers: [
      {text: 'answer placeholder 5.a', correct: true},
      {text: 'answer placeholder 5.b', correct: false},
      {text: 'answer placeholder 5.c', correct: false},
      {text: 'answer placeholder 5.d', correct: false},
      ]
  }
]