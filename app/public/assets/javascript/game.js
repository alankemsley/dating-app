$(document).ready(function() {

  var q1 = "<h2>1. How many forms of communication is C3PO fluent in?</h1><br><p class=a>A. 6  million</p><p class=b>B. 9 million</p><p class=c>C. 12 million</p><p class=d>D. 3 thousand</p>";

  var q2 = "<h2>2. The first Death Star was destroyed by __________ fired from Luke Skywalker's X-Wing fighter.</h2><br><p class=a>A. ion torpedoes</p><p class=b>B. proton torpedoes</p><p class=c>C. neuron torpedoes</p><p class=d>D. kyber torpedoes</p>";

  var q3 = "<h2>3. Luke Skywalker survived an attack by a/an __________ on Hoth before being rescued by his friend, Captain Han Solo.</h2><br><p class=a>A. tauntaun</p><p class=b>B. Imperial assassination droid</p><p class=c>C. Rodean</p><p class=d>D. wampa</p>";

  var q4 = "<h2>4. How was the bounty hunter, Boba Fett, killed?</h2><br><p class=a>A. He was struck by Luke Skywalker's lightsaber</p><p class=b>B. He fell into the sarlacc's pit on Tatooine</p><p class=c>C. He was shot by Lando Calrissian with Han Solo's blaster pistol</p><p class=d>D. He was choked by Leia Organa with a chain</p>";

  var q5 = "<h2>5. In what time did Captain Han Solo famously perform the kessel run in the Millennium Falcon?</h2><br><p class=a>A. Less than 3 parsecs</p><p class=b>B. Less than 10 parsecs</p><p class=c>C. Less than 12 parsecs</p><p class=d>D. 14 parsecs</p>";

  var correctAlert = "<h2>You are Correct.</h2><br><p>Wonderful! Your knowledge far exceeds my expectations. For a human.</p>";

  var incorrectAlert = "<h2>You are Incorrect.</h2><br><p>Your knowledge is far below my expectations.</p><p>Of course... humans are known to make mistakes... from time to time.</p>";

  var notAnsweredAlert = "<h2>Your Time is Up!</h2><br><p>Your knowledge is far below my expectations.</p><p>Of course... humans are known to make mistakes... from time to time.</p>";

  var gameOverAlert = "<h2>Game Over</h2><br><p>I hope you enjoyed the game. Would you like to play again?</p><button id='restart' type='button' name='restart' class = 'button'>RESTART</button>"

  var questions = [q1, q2, q3, q4, q5];

  var correctCount = 0;
  var incorrectCount = 0;
  var notAnsweredCount = 0;
  var i = 0;
  var timeLeft = 15;

  var nextQuestion = function() {
    if (i >= 5) {
      showGameOverAlert();
    } else {
      $("#text").html(questions[i]);
      i++;
      countDown = setInterval(timer, 1000);
      options();
    }
  }

  var showCorrectAlert = function() {
    $("#text").html(correctAlert);
    correctCount++;
    $("#correct").html(correctCount);
    clearInterval(countDown);
    timeLeft = 15;
    $("#seconds-left").html(timeLeft);
    setTimeout(nextQuestion, 5000);
  }

  var showIncorrectAlert = function() {
    $("#text").html(incorrectAlert);
    incorrectCount++;
    $("#incorrect").html(incorrectCount);
    clearInterval(countDown);
    timeLeft = 15;
    $("#seconds-left").html(timeLeft);
    setTimeout(nextQuestion, 5000);
  }

  var showNotAnsweredAlert = function() {
    $("#text").html(notAnsweredAlert);
    notAnsweredCount++;
    $("#not-answered").html(notAnsweredCount);
    clearInterval(countDown);
    timeLeft = 15;
    $("#seconds-left").html(timeLeft);
    setTimeout(nextQuestion, 5000);
  }

  var showGameOverAlert = function() {
    $("#text").html(gameOverAlert);
    clearInterval(countDown);
    $("#restart").click(function() {
      correctCount = 0;
      incorrectCount = 0;
      notAnsweredCount = 0;
      i = 0;
      timeLeft = 15;
      nextQuestion();
      $("#correct").html(correctCount);
      $("#incorrect").html(incorrectCount);
      $("#not-answered").html(notAnsweredCount);
    });
  }

  $("#begin").click(function() {
    nextQuestion();
  });

  var timer = function() {
    timeLeft--;
    $("#seconds-left").html(timeLeft);
    if (timeLeft === 0) {
      showNotAnsweredAlert();
    }
  }

  var options = function() {

    $(".a").click(function() {
      if (i === 1) {
        showCorrectAlert();
      } else {
        showIncorrectAlert();
      }
    });

    $(".b").click(function() {
      if (i === 2 || i === 4) {
        showCorrectAlert();
      } else {
        showIncorrectAlert();
      }
    });

    $(".c").click(function() {
      if (i === 5) {
        showCorrectAlert();
      } else {
        showIncorrectAlert();
      }
    });

    $(".d").click(function() {
      if (i === 3) {
        showCorrectAlert();
      } else {
        showIncorrectAlert();
      }
    });

  };

});
