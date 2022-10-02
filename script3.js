//gameboard module//

const GAMEBOARD = (() => {
  let cellList = document.querySelectorAll('.grid');
  let boardArray = Array.from(cellList);
  console.log(boardArray);

  const player = (function () {
    //won't switch turns, not sure about equivalencies, doesn't export playermarker the way I intended.

    function getPlayerTurn() {
      let playerMarker;
      let XTURN = true;

      if ((XTURN = true)) {
        playerMarker = 'X';
        return playerMarker;
      } else XTURN = false;

      if ((XTURN = false)) {
        playerMarker = 'O';
        return playerMarker;
      }
      return playerMarker;
    }
    return getPlayerTurn;
  })();

  for (let i = 0; i < boardArray.length; i++) {
    boardArray[i].addEventListener('click', player.getPlayerTurn);
    boardArray[i].addEventListener('click', markBoard, { once: true });
    // maybe a turn switch event which just checks whether xturn is true or false and negates it
  }

  function markBoard(playerMarker) {
    boardArray[
      this.dataset.index
    ].textContent = `${player.getPlayerTurn.playerMarker}`;
    console.log(playerMarker);
  }
})();

function getMarker(XTURN) {
  if ((XTURN = true)) {
    markX();
  } else markO();
}
function markX() {
  boardArray[this.dataset.index].textContent = 'X';
  XTURN = false;
  return XTURN;
}
function markY() {
  boardArray[this.dataset.index].textContent = 'O';
  XTURN = true;
  return XTURN;
}
