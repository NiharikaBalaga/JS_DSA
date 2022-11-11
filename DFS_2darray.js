const TEST_MATRIX = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
]

//o/p: [1,2,3,4,5,10,15,20,19,14,9,8,13,18,17,12,7,6,11,16]

const direction = [
    [-1, 0], //up
    [0, 1],  //right
    [1, 0],  //down
    [0, -1]  //left
]

const traversalDFS = function (matrix) {
    const seen = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false))
    const values = [];
    DFS(matrix, seen, 0, 0, values);
    return values;
}

const DFS = function (matrix, seen, row, col, values) {
    if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || seen[row][col] == true) {
        return
    }
    seen[row][col] = true;
    values.push(matrix[row][col]);
    for (let i = 0; i < direction.length; i++) {
        const dir = direction[i];
        DFS(matrix, seen, row + dir[0], col + dir[1], values)
    }
}

console.log(traversalDFS(TEST_MATRIX))