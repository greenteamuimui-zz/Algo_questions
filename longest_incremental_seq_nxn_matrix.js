function iterate(board) {
  let max = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let max1 = snakePath(board, i, j, board[i][j], 0);
      let max2 = snakePath2(board, i, j, board[i][j], 0);
      if (max1 > max || max2 > max ){
        max = Math.max(max1,max,max2);
      }
    }
  }
  return max;
}

function snakePath(board, i, j, k, count) {
  if (i>=0 && i < board.length && j >=0 && j < board[i].length && board[i][j] === k) {
    let r1 = snakePath(board, i + 1, j, k + 1, count+1);
    let r2 = snakePath(board, i - 1, j, k + 1, count+1);
    let r3 = snakePath(board, i, j + 1, k + 1, count+1);
    let r4 = snakePath(board, i, j - 1, k + 1, count+1);
    return Math.max(r1,r2,r3,r4);
  } else {
    return count;
  }
}

function snakePath2(board, i, j, k, count) {
  if (i>=0 && i < board.length && j >=0 && j < board[i].length && board[i][j] === k) {
    let r1 = snakePath2(board, i + 1, j, k - 1, count+1);
    let r2 = snakePath2(board, i - 1, j, k - 1, count+1);
    let r3 = snakePath2(board, i, j + 1, k - 1, count+1);
    let r4 = snakePath2(board, i, j - 1, k - 1, count+1);
    return Math.max(r1,r2,r3,r4);
  } else {
    return count;
  }
}

let board = [
  [7,6,3],
  [8,5,1],
  [9,4,2]
];

console.log(iterate(board));
