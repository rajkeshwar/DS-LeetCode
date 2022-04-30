var spiralOrder = function (matrix) {
    const result = [];

    let rowStart = 0;
    let rowEnd = matrix.length - 1;
    let columnStart = 0;
    let columnEnd = matrix[0].length - 1;

    while (rowStart <= rowEnd && columnStart <= columnEnd) {
        for (let i = columnStart; i <= columnEnd; i++) {
            result.push(matrix[rowStart][i]);
        }

        rowStart++;

        for (let i = rowStart; i <= rowEnd; i++) {
            result.push(matrix[i][columnEnd]);
        }

        columnEnd--;
        if (rowStart <= rowEnd && columnStart <= columnEnd) {
            for (let i = columnEnd; i >= columnStart; i--) {
                result.push(matrix[rowEnd][i]);
            }
        }

        rowEnd--;
        if (rowStart <= rowEnd && columnStart <= columnEnd) {
            for (let i = rowEnd; i >= rowStart; i--) {
                result.push(matrix[i][columnStart]);
            }
        }

        columnStart++;
    }

    return result;
};

console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]))