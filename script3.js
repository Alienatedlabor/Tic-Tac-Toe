//gameboard module//

const GAMEBOARD = (() => {
  //board array
  let cellList = document.querySelectorAll('.grid');
  let boardArray = Array.from(cellList);
  console.log(boardArray);
  let XTURN = true;
  //new game selector and event

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
  let newGame = document.querySelector('.new-game');
  console.log(newGame);
  newGame.addEventListener('click', resetBoard);
  function resetBoard() {
    for (let i = 0; i < boardArray.length; i++) {
      // boardArray[i].textContent = '';
      /*text content would clear but  because we have our click event that places x or O set to only run once per cell, we couldn't mark
      cells that had been previously clicked after resetBoard ran.
      location reload might not be optimal for slower internet connections but it works fine for now. 
      */
      location.reload();
      console.log(boardArray);
    }
  }
})();
