function guessNumber(guess) {
  if (guess == 25) {
    return; 
  }
return "not it";
}

function strictGuessNumber(guess) {
  if (typeof guess === "number" && guess !== 25) {
    return;
  }
}
