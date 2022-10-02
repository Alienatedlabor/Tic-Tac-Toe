//gameboard module//

const GAMEBOARD = (() => {
  //new game selector and event
  let newGame = document.querySelector('.new-game');
  newGame.addEventListener('click', resetBoard());
  //board array
  let cellList = document.querySelectorAll('.grid');
  let boardArray = Array.from(cellList);
  let XTURN = true;

  for (let i = 0; i < boardArray.length; i++) {
    boardArray[i].addEventListener(
      'click',
      function () {
        //takes a cell, checks if it's X turn and if so writes X, if not O.
        boardArray[this.dataset.index].textContent = XTURN ? 'X' : 'O';
        XTURN = !XTURN;
      },
      { once: true }
    );
  }
  function resetBoard() {
    for (let i = 0; i < boardArray.length; i++) {
      boardArray[i].textContent = '';
    }
  }
})();
