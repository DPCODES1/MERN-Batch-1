function startGame() {
  if (players[0].name.length == 0 || players[1].name.length == 0) {
    alert("Please Input the custom name");
    return;
  }
  gameSection.style.display = "block";
  activePlayerText.textContent = players[activePlayer].name;
}

function switchPlayer() {
  if (activePlayer == 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerText.textContent = players[activePlayer].name;
}

function selectGameField(eve) {
  if(gameIsFinished) {
    return
  }
  if (eve.target.tagName.toLowerCase() == "li") {
    const row = parseInt(eve.target.dataset.row) - 1;
    const col = parseInt(eve.target.dataset.col) - 1;
    if (gameBoardLogic[row][col] != 0) {
      alert("Please Select an Empty Field");
      return;
    }
    eve.target.textContent = players[activePlayer].symbol;
    gameBoardLogic[row][col] = activePlayer + 1;
    currentround++;
    const winnerId = checkForWinner();
    if(winnerId!=0) {
      winnerOrDraw(winnerId)
    }
    switchPlayer();
  } else {
    console.log("Empty Space");
  }
}

function checkForWinner() {
  for (let i = 0; i < 3; i++) {
    //Check For Row
    if (
      gameBoardLogic[i][0] > 0 &&
      gameBoardLogic[i][0] == gameBoardLogic[i][1] &&
      gameBoardLogic[i][0] == gameBoardLogic[i][2]
    ) {
      return gameBoardLogic[i][0];
    }
    //check For Column
    if (
      gameBoardLogic[0][i] > 0 &&
      gameBoardLogic[0][i] == gameBoardLogic[1][i] &&
      gameBoardLogic[0][i] == gameBoardLogic[2][i]
    ) {
      return gameBoardLogic[i][0];
    }
  }
  //check for top-left to bottom-right
  if (
    gameBoardLogic[0][0] > 0 &&
    gameBoardLogic[0][0] == gameBoardLogic[1][1] &&
    gameBoardLogic[0][0] == gameBoardLogic[2][2]
  ) {
    return gameBoardLogic[0][0];
  }

  //check for top-right to bottom-left
  if (
    gameBoardLogic[0][2] > 0 &&
    gameBoardLogic[0][2] == gameBoardLogic[1][1] &&
    gameBoardLogic[0][2] == gameBoardLogic[2][0]
  ) {
    return gameBoardLogic[0][2];
  }

  if(currentround == 9) {
    return -1
  }

  return 0
}

function winnerOrDraw(id) {
  gameIsFinished = true
  if(id != -1) {
    gameOverEle.style.display = "block"
    winnerName.textContent = players[id - 1].name
  } else {
      gameOverEle.style.display = "block"
      gameOverEle.firstElementChild.textContent = "It's a Draw"
  }
}
