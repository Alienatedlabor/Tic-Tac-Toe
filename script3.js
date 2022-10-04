//gameboard module//

const GAMEBOARD = (() => {
  //board array
  let cellList = document.querySelectorAll('.grid');
  let boardArray = Array.from(cellList);
  console.log(boardArray);
  let XTURN = true;
  //new game selector and event

  for (let i = 0; i < boardArray.length; i++) {
    boardArray[i].addEventListener('click', function () {
      if (boardArray[i].textContent) return;
      //takes a cell, checks if it's X turn and if so writes X, if not O.
      boardArray[i].textContent = XTURN ? 'X' : 'O';
      XTURN = !XTURN;
    });
    boardArray[i].addEventListener('click', checkWinsDisplay);
  }
  let newGame = document.querySelector('.new-game');
  newGame.addEventListener('click', resetBoard);
  function resetBoard() {
    for (let i = 0; i < boardArray.length; i++) {
      boardArray[i].textContent = '';
    }
    XTURN = true;
    scoreBox.textContent = '';
  }
  // ////not sure if this is the correct way to store it or how to use this yet
  // const CHECKWINS = () => {
  const winCon = [
    //horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //   //diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];
  //interesting way of checking winners and tie that I saw:
  function checkWinCell(player) {
    return winCon.some((combination) =>
      combination.every((i) => boardArray[i].innerText === player)
    );
  }

  function checkTie() {
    return boardArray.every(
      (cell) => cell.innerText === 'X' || cell.innerText === 'O'
    );
  }
  let scoreBox = document.querySelector('.score');
  function checkWinsDisplay() {
    if (checkWinCell('X')) {
      scoreBox.textContent = `X Wins!`;
    } else if (checkWinCell('O')) {
      scoreBox.textContent = `O Wins!`;
    } else if (checkTie()) {
      scoreBox.textContent = 'Tie!';
    }
  }
  // };
})();
// winning conditions is the above array comboes
// scoreBox.textContent = `Tie!`;
