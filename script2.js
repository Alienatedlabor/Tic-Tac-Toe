// const tictactoe = (() => {

// })();
let tiles = document.querySelectorAll('[data-index]');
console.log(tiles);
//gameboard module//
const gameboard = (function () {
  const createBoard = function () {
    const board = [];

    //makes an array with 9 empty spaces:
    for (let i = 0; i < 9; i++) {
      board.push('');
      console.log(board);
    }
  };
  function markBoard(board, i) {
    board[i].textContent = `${playerMarker}`;
  }
  tiles.forEach((tile) => {
    tile.addEventListener('click', getPlayerTurn);
    tile.addEventListener('click', markBoard, { once: true });
  });
})();

const player = (function () {
  let playerMarker = 'X';

  function getPlayerTurn() {
    const XTURN = true;
    if ((XTURN = true)) {
      playerMarker = 'X';
    } else XTURN = false;
    if ((XTURN = false)) {
      playerMarker = 'O';
    }
    return playerMarker;
  }
})();

// click event where cell.innertext = X or O depending on turn (conditional)
//on click turn is made false
