
function diagonalDifference(arr) {
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        primaryDiagonal += arr[i][i];
        secondaryDiagonal += arr[i][n - 1 - i];
    }

    return Math.abs(primaryDiagonal - secondaryDiagonal);
}

console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(diagonalDifference([[1, 2, 3, 4], [4, 5, 6, 10], [7, 8, 9, 4], [4, 7, 8, 1]]));