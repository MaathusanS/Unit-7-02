let userInput = 0

document.getElementById('button').addEventListener('click', comparison) // Adds event listener that triggers compare function when Positive? button is pressed.

function comparison () {
  userInput = document.getElementById('input').value // Stores user input.
  userInput = parseInt(userInput) // Converts user input to integer.

  if (userInput < 0) {
    document.getElementById('result').innerHTML = 'Your number is negative' // Tells user that their number is negative if it is.
  } else {
    document.getElementById('result').innerHTML = 'Your number is positive' // Tells user that their number is positive if it isn't negative.
  }
}
