// questions
var questions = [
  {
    question: "Who is Prime Minister of the United Kingdom?",
    choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],
    correctAnswer:0
  },
  {
    question: "Who is the the president of the United States?",
    choices: ["Trump", "Obama", "Santa", "Putin"],
    correctAnswer:0
  },
  {
    question: "Who is the author of the Lord of The Rings series?",
    choices: ["JK Rowling", "JR Tolkien", "Stan Lee", "Mr. Bean"],
    correctAnswer:1
  },
  {
    question: "How many teams are in the NHL?",
    choices: ["20", "21", "33", "30"],
    correctAnswer:3
  },
  {
    question: "What team is wolverine a part of?",
    choices: ["The X-Men", "JSA", "JLA", "X-Force"],
    correctAnswer:0
  }
];

var questionCount = 0;
var score = 0;

function createForm(questions) {
  var form = document.createElement("form");
  var button = document.createElement("button");
  var title = document.createElement("h1");

  title.setAttribute("id", "title");
  title.innerHTML = "The Quizzard";

  form.setAttribute("id", "quiz");

  document.body.appendChild(title);
  form.appendChild(createHeading());
  createRadioButtons(form);
  button.innerHTML = "GO";
  form.appendChild(button);
  document.body.appendChild(form);

  button.addEventListener("click", function(e){
    e.preventDefault();
    checkAnswer();
  });
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
    form.appendChild(document.createElement("br"));
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
    alert("Please make a choice");
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
  scoreBoard.setAttribute("id", "score");
  scoreBoard.innerHTML = "Your final score: " + score + "/" + questions.length;
  document.body.appendChild(scoreBoard);

}


createForm(questions);
