const fs = require('fs')

const str = '---------------------------------------------------------------------------------'
// const str = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8')




let y = str.split("").map((el) => el == '-' ? '.' : el)
let arrBoard = []
for (let i = 0; i < str.length; i += 9) {
  arrBoard.push(y.slice(i, i + 9))
}

// console.log(arrBoard);

let input = arrBoard;


const solveSudoku = function (board) {
  const size = 9
  const boxSize = 3

  const findEmpty = (board) => {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (board[r][c] === '.') {
          // console.log(`r: ${r} c: ${c}`);
          // console.log([r, c]);
          return [r, c];
        }
      }
    }
    return null;
  };

  const validate = (num, pos, board) => {
    const [r, c] = pos;

    // Проверка строк(rows)
    for (let i = 0; i < size; i++) {
      if (board[i][c] === num && i !== r) {
        return false;
      }
    }
    // Проверка столбцов(cols)
    for (let i = 0; i < size; i++) {
      if (board[r][i] === num && i !== c) {
        return false;
      }
    }

    // Проверка блока (box)
    const boxRow = Math.floor(r / boxSize) * boxSize;
    const boxCol = Math.floor(c / boxSize) * boxSize;

    for (let i = boxRow; i < boxRow + boxSize; i++) {
      for (let j = boxCol; j < boxCol + boxSize; j++) {
        if (board[i][j] === num && i !== r && j !== c) {
          return false
        }
      }
    }
    return true;
  };

  const solve = () => {
    const currPos = findEmpty(board)

    if (currPos === null) {
      return true;
    }

    for (let i = 1; i <= size; i++) {
      const currNum = i.toString();
      const isValid = validate(currNum, currPos, board)

      if (isValid) {
        const [x, y] = currPos;
        board[x][y] = currNum;

        if (solve()) {
          return true
        }
        board[x][y] = '.';

      }
    }
    return false;
  }

  solve();
  return board;
};

// console.table(input);
console.table(solveSudoku(input));

