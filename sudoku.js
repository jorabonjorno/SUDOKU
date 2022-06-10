const string = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89---'
const rows = rowsGenerator(string)
const columns = columnsGenerator(string)
const squares = squaresGenerator(string)
function rowsGenerator (string) {
    let rowsArray = [];
    rowsArray.push(string.split('', 9));
    for (i = 9; i < 81; i+=9) {
    let rows = string.slice(i, i+9);
    rowsArray.push(rows.split(''));
    }
    return rowsArray;
}

function columnsGenerator () {
  let columnsArray = rows[0].map((_, index) => rows.map(column => column[index]));
  return columnsArray;
}

console.log(columns)
console.log(rows)

function squaresGenerator (string) {
  let squaresArray = []
  let arrayNumber = 0;
  for (i = 1; i < 81; i++) {
      let subArray = [];        
      squaresArray.push(subArray)    
      for (j = i + 1; j < 81; j + 3) {
      squaresArray[arrayNumber].push(string[j], string[j - 1], string[j - 2]);
      squaresArray[arrayNumber].push(string[j + 7], string[j + 8], string[j + 9]);
      squaresArray[arrayNumber].push(string[j + 16], string[j + 17], string[j + 18]);
      arrayNumber += 1
      break
      }
      if (i % 9 === 0) {
        i += 21
      }
    }

  return squaresArray;
  }

console.log(squares)

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  console.log('first changes');
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
