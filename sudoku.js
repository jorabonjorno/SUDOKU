// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function quadro(boardString,i= 0,q = 2,j,w=2) {
    let count1 = 0
    let count2 = 0
    for( i; i<= q;i++){
        for(j ;j <= w; j++){
            if (row[j][i] !== '-') {
                count1 += +row[j][i]

            }else{
                arr/sd
            }

        }
        count2 += 1
    }

    if(count2 <=3){
        return quadro(boardString,count-1,i,q,j+3,w+3)
    }else{
        return quadro(boardString,count,i+3,q+3,j,w)
    }

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
