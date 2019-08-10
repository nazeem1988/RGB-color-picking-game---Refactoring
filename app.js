var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];
var numSquares = 6;
var colors = []; // generateRandomColors(numSquares);
var pickedColor; // pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  // Mode buttons event listeners
  // for (var i = 0; i < modeButtons.length; i++) {
  //   modeButtons[i].addEventListener("click", function() {
  //     modeButtons[0].classList.remove("selected");
  //     modeButtons[1].classList.remove("selected");
  //     this.classList.add("selected");
  //     this.textContent === "EASY" ? (numSquares = 3) : (numSquares = 6);
  //     reset();
  //   });
  // }
  setUpModeButtons();
  setUpSquares();
  reset();
}
function setUpModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "EASY" ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}
function setUpSquares() {
  for (var i = 0; i < squares.length; i++) {
    // Add initial colors to squares
    // squares[i].style.backgroundColor = colors[i];
    // Add click listeners to squares
    squares[i].addEventListener("click", function() {
      //  Grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      // Compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "PLAY AGAIN!!";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again!";
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numSquares);
  // Pick a new random color from Array
  pickedColor = pickColor();
  // Change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  // Change color of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function() {
//   hardBtn.classList.remove("selected");
//   easyBtn.classList.add("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < squares.length; i++) {
//     if (colors[i]) {
//       squares[i].style.backgroundColor = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// });
// hardBtn.addEventListener("click", function() {
//   hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//   }
// });

resetButton.addEventListener("click", function() {
  reset();
  // // Generate all new colors
  // colors = generateRandomColors(numSquares);
  // // Pick a new random color from Array
  // pickedColor = pickColor();
  // // Change colorDisplay to match picked Color
  // colorDisplay.textContent = pickedColor;
  // this.textContent = "New Colors";

  // messageDisplay.textContent = "";
  // // Change color of squares
  // for (var i = 0; i < squares.length; i++) {
  //   squares[i].style.backgroundColor = colors[i];
  // }
  // h1.style.backgroundColor = "steelblue";
});

// colorDisplay.textContent = pickedColor;

// for (var i = 0; i < squares.length; i++) {
//   // Add initial colors to squares
//   // squares[i].style.backgroundColor = colors[i];
//   // Add click listeners to squares
//   squares[i].addEventListener("click", function() {
//     //  Grab color of clicked square
//     var clickedColor = this.style.backgroundColor;
//     // Compare color to pickedColor
//     if (clickedColor === pickedColor) {
//       messageDisplay.textContent = "Correct!";
//       resetButton.textContent = "PLAY AGAIN!!";
//       changeColors(clickedColor);
//       h1.style.backgroundColor = clickedColor;
//     } else {
//       this.style.backgroundColor = "#232323";
//       messageDisplay.textContent = "Try Again!";
//     }
//   });
// }

function changeColors(color) {
  // Loop through all squares
  for (var i = 0; i < squares.length; i++) {
    // Change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generateRandomColors(num) {
  // Make an Array
  var arr = [];
  // Repeat num times
  for (var i = 0; i < num; i++) {
    // Get random color and push into arr
    arr.push(randomColor());
  }
  // return that array
  return arr;
}
function randomColor() {
  // Pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  // Pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  // Pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
