var questions = [
  {
    question: "Who is Prime Minister of the United Kingdom?",
    choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],
    correctAnswer:0
  },
  {
    question: "Who is the the king of the world?",
    choices: ["Ghandi", "Homer Simpson", "Reno Jackson", "Trudeau"],
    correctAnswer:0
  },
  {
    question: "Why are these questions so damn stupid?",
    choices: ["I dunno", "You really should know", "Guess", "Call a friend"],
    correctAnswer:1
  }
];

var app = document.getElementById("app");
var questionCount = 0;
var score = 0;


function createForm(questions) {
  var form = document.createElement("form");
  var button = document.createElement("button");

  form.setAttribute("id", "quiz");
  form.appendChild(createHeading());
  createRadioButtons(form);

  button.addEventListener("click", function(e){
    e.preventDefault();
    checkAnswer();
  });

  button.innerHTML = "GO";
  form.appendChild(button);
  document.body.appendChild(form);
}

function createRadioButtons(form) {
  for (var i = 0; i < 4; i++) {
    radioButton = document.createElement("input");
    label = document.createElement("label");
    label.setAttribute("for", "A" + i);
    label.innerHTML = questions[questionCount].choices[i];
    radioButton.setAttribute("type", "radio");
    radioButton.setAttribute("id", "A" + i);
    radioButton.setAttribute("value", questions[questionCount].choices[i]);
    radioButton.setAttribute("name", "Q");
    form.appendChild(radioButton);
    form.appendChild(label);
  }
}

function updateRadioButtons(form) {
  for (var i = 0; i < 4; i++) {
    labels = document.getElementsByTagName("label");
    radioButton = document.getElementById("A" + i);
    radioButton.setAttribute("value", questions[questionCount].choices[i]);
    labels[i].innerHTML = questions[questionCount].choices[i];
  }
}

function updateHeading() {
  heading = document.getElementById("questionTitle");
  heading.innerHTML = questions[questionCount].question;
}

function createHeading() {
  var heading = document.createElement("h2");
  heading.setAttribute("id", "questionTitle");
  heading.innerHTML = questions[questionCount].question;
  return heading;
}

function radioIsEmpty() {
  radios = document.getElementsByName("Q");
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return false;
    }
  }
  return true;
}

function checkAnswer() {
  if (radioIsEmpty()) {
    console.log("Choose something");
    return;
  }

  if (document.getElementById("A" + questions[questionCount].correctAnswer).checked) {
    score++;
  }

  if (questionCount < questions.length - 1) {
    questionCount++;
    updateHeading();
    updateRadioButtons();
  }else{
    document.getElementById('quiz').remove();
    finalScore();
  }
}

function finalScore() {
  scoreBoard = document.createElement("h1");
  scoreBoard.innerHTML = "Your final score: " + score + "/" + questions.length;
  document.body.appendChild(scoreBoard);
}

createForm(questions);
