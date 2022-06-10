// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!



function solve(boardString) {
  const size = 9
  const boxSize = 3;
  // console.log('first changes');


  const convertStr = function () {
    let y = boardString.split("").map((el) => el == '-' ? '.' : el)
    let arrBoard = []
    for (let i = 0; i < boardString.length; i += 9) {
      arrBoard.push(y.slice(i, i + 9))
    }
    return arrBoard;
  }
  // console.table(convertStr());

  const findEmpty = (arrBoard) => {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (arrBoard[r][c] === '-') {
          // console.log(`r: ${r} c: ${c}`);        
          return [r, c];
        }
      }
    }
    return null;
  };

console.log(findEmpty())





  
// solve(boardString)
// return board;
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {



}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
