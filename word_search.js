function iterate(board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if ((board[i][j] === word[0]) && checkCharacter(board, i, j, word, 0)) return true;
    }
  }
  return false;
}

function checkCharacter(board, i, j, word, k) {
  if (k === word.length) return true;
  if (i>=0 && i < board.length && j >=0 && j < board[i].length && board[i][j] === word[k]) {
    let temp = board[i][j];
    board[i][j] = '';
    let res = checkCharacter(board, i + 1, j, word, k + 1) || checkCharacter(board, i - 1, j, word, k + 1) || checkCharacter(board, i, j + 1, word, k + 1) || checkCharacter(board, i, j - 1, word, k + 1);
    board[i][j] = temp;
    return res;
  }
  return false;
}

let board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];

// console.log(iterate(board,'BFDA'));

function findWord(matrix, word){
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === word[0] && check(matrix, i, j, word, 0)) {
        return true;
      } else {
        return false;
      }
    }
  }
}

function check(matrix, i, j, word, count){
  if (word.length === count) return true;
  let result;
  if(i >= 0 && j >= 0 && i < matrix.length && j < matrix[i].length && matrix[i][j] === word[count]){
    result = check(matrix, i-1, j, word, count+1) || check(matrix, i, j-1, word, count+1) ||
    check(matrix, i, j+1, word, count+1) ||
    check(matrix, i+1, j, word, count+1);
  } else {
    return false;
  }
  return result;
}

console.log(findWord(board,'BFB'));
