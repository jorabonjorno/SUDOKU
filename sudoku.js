// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function trySolve(boardString) {
  let arr = []
  for (let i = 0;i<=8;i++){
    for (let j = 0; j<=8;j+++){
      if (number[j] !== '-'){
        arr.push(number[j])
      }
    }
  }
  return arr
}


function solve(boardString) {

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
