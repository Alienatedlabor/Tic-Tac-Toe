//USE MODULE DESIGN PATTERN!

const gameboard = () => {
  const board = [];

  //makes an array with 9 empty spaces:
  for (let i = 0; i < 9; i++) {
    board.push('');
    console.log(board);
  }
  //this is supposed to take the square they are clicking and set it to either X or O - needs to be linked to board array?
  const markBoard = function (playerMarker, i) {
    board[i].textContent = `${playerMarker}`;
  };
  let squares = document.querySelectorAll('.grid');
  squares.forEach((square) => {
    document.addEventListener('click', markBoard);
    //not sure what will be returned or how they returned multiple things, check module info
    return board;
  })();
};

console.log(player.playerMarker);
// need index of array and on click change value of array and innertext of grid square to playermarker.id

//not sure if this is the correct way to store it or how to use this yet
const winCon = [
  //horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //diagonal
  [0, 4, 8],
  [2, 4, 6],
];
// view (updating board display), game (keeping track of which grid squares are full, turn, and win con), player(keeping track of X or O?)

//interesting way of checking winners and tie that I saw:
function checkWinXCell() {
  return winningConditions.some((combination) => {
    return combination.every((i) => {
      return cells[i].innerText === 'X';
    });
  });
}
function checkWinOCell() {
  return winningConditions.some((combination) => {
    return combination.every((i) => {
      return cells[i].innerText === 'O';
    });
  });
}
function isTieCell() {
  return cells.every((cell) => {
    return cell.innerText === 'X' || cell.innerText === 'O';
  });
}
//winning conditions is the above array comboes
