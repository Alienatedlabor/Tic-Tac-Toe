//USE MODULE DESIGN PATTERN!

const gameboard = (() => {
  const board = [];
  //makes an array with 9 empty spaces:
  for (let i = 0; i < 9; i++) {
    board.push('');
  }

  let squares = document.querySelectorAll('.grid');
  squares.forEach((square) => {});
  //not sure what will be returned or how they returned multiple things, check module info
  return board;
})();
const player = (function () {
  let xMarker = document.querySelector('#X');
  let oMarker = document.querySelector('#O');
  let playerMarker = xMarker;
  xMarker.addEventListener('click', () => {
    playerMarker = xMarker;
  });
  oMarker.addEventListener('click', () => {
    playerMarker = oMarker;
  });
  return playerMarker;
})();
console.log(playerMarker);
// need index of array and on click change value of array and innertext of grid square to playermarker.id
