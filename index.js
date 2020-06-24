const playerMessage = document.getElementById("result-message");
const playButton = document.getElementById("play-button");
const playerOneDice = document.getElementById("player-1-dice").lastElementChild;
const playerTwoDice = document.getElementById("player-2-dice").lastElementChild;

const randomNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
};

playButton.onclick = (e) => {
  const playerOneNum = randomNumber();
  const playerTwoNum = randomNumber();

  playerOneDice.setAttribute("src", `./images/dice${playerOneNum}.png`);
  playerTwoDice.setAttribute("src", `./images/dice${playerTwoNum}.png`);

  if (playerOneNum > playerTwoNum) {
    playerMessage.textContent = "Player One win the Game !";
  } else if (playerOneNum < playerTwoNum) {
    playerMessage.textContent = "Player Two win the Game !";
  } else {
    playerMessage.textContent = "Equality !";
  }
};
