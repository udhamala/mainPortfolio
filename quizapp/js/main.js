var allQuestions = [{
    question: "Before Mt. Everest was discovered, which mountain was considered to be the highest mountain in the world?",
    choices: ["Mt. Kilimanjaro", "Kanchenjunga", "Mount Everest"],
    correctAnswer: 1
  },

  {
    question: "Does England have a 4th of July?",
    choices: ["Yes", "No", "I don't know"],
    correctAnswer: 0
  },

  {
    question: "Where is Mount Everest?",
    choices: ["Pakistan", "China", "Nepal"],
    correctAnswer: 2
  },

  {
    question: " What can you never eat for breakfast? ",
    choices: ["Dinner", "Something sugary", "Toast"],
    correctAnswer: 0
  },

  {
    question: "If there are three apples and you took two away, how many do you have?",
    choices: ["One", "Two", "None"],
    correctAnswer: 1
  },

  {
    question: "Spell 'Silk' out loud, 3 times in a row. What do cows drink?",
    choices: ["Milk", "Water", "Cows can't drink"],
    correctAnswer: 1
  },

  {
    question: "Which is heavier, 100 pounds of rocks or 100 pounds of gold? ",
    choices: ["100 pounds of rocks", "100 pounds of rocks", "They weigh the same"],
    correctAnswer: 2
  },

  {
    question: "Who is the author of the book 'Modern Javascript Develop and Design'?",
    choices: ["Uttam Dhamala", "Larry Ullman", "John Ducket"],
    correctAnswer: 1
  },

  {
    question: "How many sides does a circle have?",
    choices: ["The back", "None. It's a circle", "Two"],
    correctAnswer: 2
  },

  {
    question: "What has a tail but no body?",
    choices: ["A human", "A coin", "A cloud"],
    correctAnswer: 1
  },

  {
    question: "What word in the English language is always spelled incorrectly?",
    choices: ["Shakespeare", "Onomatopoeia", "Incorrectly"],
    correctAnswer: 2
  },

  {
    question: "When do you stop at green and go at red?",
    choices: ["Watermelon!", "Traffic light!", "Garden"],
    correctAnswer: 0
  },

  {
    question: "What rotates but still remains in the same place?",
    choices: ["Bottle (spin the bottle game)", "Clock", "Stairs"],
    correctAnswer: 2
  },
];
var currentquestion = 0;
var correctAnswers = 0;

function setupOptions() {
  $('#question').html(parseInt(currentquestion) + 1 + ". " + allQuestions[currentquestion].question);
  var options = allQuestions[currentquestion].choices;
  var formHtml = '';
  for (var i = 0; i < options.length; i++) {
    formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
      allQuestions[currentquestion].choices[i] + '</label></div><br/>';
  }
  $('#form').html(formHtml);
  $("#option0").prop('checked', true);
};

function checkAns() {
  if ($("input[name=option]:checked").val() == allQuestions[currentquestion].correctAnswer) {
    correctAnswers++;
  };
};

$(document).ready(function() {

  $(".jumbotron").hide();
  $('#start').click(function() {
    $(".jumbotron").fadeIn();
    $(this).hide();
  });

  $(function() {
    $("#progressbar").progressbar({
      max: allQuestions.length - 1,
      value: 0
    });
  });

  setupOptions();

  $("#next").click(function() {
    event.preventDefault();
    checkAns();
    currentquestion++;
    $(function() {
      $("#progressbar").progressbar({
        value: currentquestion
      });
    });
    if (currentquestion < allQuestions.length) {
      setupOptions();
      if (currentquestion == allQuestions.length - 1) {
        $('#next').html("Submit");
        $('#next').click(function() {
          $(".jumbotron").hide();
          $("#result").html("You correctly answered " + correctAnswers + " out of " + currentquestion + " questions! ").hide();
          $("#result").fadeIn(1500);
        });

      };

    };
  });
});