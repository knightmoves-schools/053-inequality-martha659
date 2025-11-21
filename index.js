function guessNumber(guess) {
  if (guess == 25) {
    return; 
  }

}

function strictGuessNumber(guess) {
  if (typeof guess === "number" && guess !== 25) {
    return "not it";
  }
}
