const string = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89---'
const check = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
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

  function numbersRemove (array, target) { // убирает из массива от 1 до 9 найденное в целевом массиве число
    let arrayChecked = [...check]; 
    let initialArray = [...array]; 
    let index;
    for (i = 0; i < arrayChecked.length; i++) {
      if (initialArray[i] === target) {
      index = arrayChecked.indexOf(target);
      arrayChecked.splice(index, 1)}
    }
    return arrayChecked
  }

function count () { // счетчик итоговый (проверка суммы в ряду и колонке)
  let countRow = 0;
  let countColumn = 0;
  for (i = 0; i < 9; i++) {
    for (j = 0; j < 9; j++) {
      if (rows[i][j] !== '-') {
        countRow += +rows[i][j]
      }
  }
  for (i = 0; i < 9; i++) {
    for (j = 0; j < 9; j++) {
      if (columns[i][j] !== '-') {
        countColumn += +columns[i][j]
      }
  }
}
if (countRow === 45 && countColumn === 45) {
  return true
} else {
  return false
}
}}

function variants (array, index) { // массив с числами которых нет в проверяемом ряду и колонке
  let variantsArray = []
      if (rows[array][index] === '-') {
        for (i = 0; i < 9; i++) {
        variantsArray = numbersRemove (rows[array], variantsArray[i]); 
        variantsArray = numbersRemove (columns[index], variantsArray[i]); 
        return variantsArray
      }
}
}

console.log(check[1])
console.log(rows[0][1])
console.log(variants(0, 1))
console.log(numbersRemove(rows[1], 5))


// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

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
