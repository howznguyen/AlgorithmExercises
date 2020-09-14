function domino(n, m) {
    let matrix = new Array(n);
    for (let i = 0; i < n; i++)
        matrix[i] = new Array(m).fill(false);
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (!matrix[i][j]) {
                if (j + 1 < matrix[i].length) {
                    if (!matrix[i][j + 1]) {
                        matrix[i][j] = matrix[i][j + 1] = true;
                        count++;
                    }
                }
                if (i + 1 < matrix.length) {
                    if (!matrix[i + 1][j]) {
                        matrix[i][j] = matrix[i + 1][j] = true;
                        count++;
                    }
                }
            }
        }
    }
    return count;
}