//  Simple Timer Solution

// Step 1:
// Use the following Audio file below:
var audio = new Audio("raven.mp3"); // create a new instance

//  Step 2:
//  after 5 seconds, execute the fiveSeconds function
//  after 10 seconds, execute the tenSeconds function
//  after 15 seconds, execute the timeUp function
let counter = 0;
let timer = setInterval(function () {
  counter++;

  if (counter === 5) {
    $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
  } else if (counter === 10) {
    $("#time-left").append("<h2>About 5 Seconds Left!</h2>");
  }

  if (counter === 15) {
    $("#time-left").append("<h2>Time's Up!</h2>");
    audio.play();
    clearInterval(timer);
  }
}, 1000);
