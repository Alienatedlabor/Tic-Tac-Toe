const player = function () {
  //won't switch turns
  function getPlayerTurn() {
    let playerMarker;
    const XTURN = true;
    if ((XTURN = true)) {
      playerMarker = 'X';
      return playerMarker;
    } else XTURN = false;

    if ((XTURN = false)) {
      playerMarker = 'O';
      return playerMarker;
    }
    console.log(playerMarker);
    return playerMarker;
  }
  return getPlayerTurn;
};

//gameboard module//
const gameboard = (function () {
  const createBoard = (function () {
    const grid = document.querySelector('.board-box');
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      grid.append(cell);
      cell.classList.add('grid');
      console.log(grid);
      return cell;
    }
  })();

  // tiles[0].style =
  // tiles[0].style = 'border-bottom: solid';

  function markBoard(cell, i, playerMarker) {
    cell[i].textContent = `${playerMarker}`;
  }
  return markBoard;
})();
let tiles = document.querySelectorAll('.grid');
// event listeners
tiles.forEach((tile) => {
  board.push(tile);
  tile.addEventListener('click', player.getPlayerTurn);
  tile.addEventListener('click', gameboard.markBoard, { once: true });
});
