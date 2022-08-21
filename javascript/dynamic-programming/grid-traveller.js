
const gridTraveller = (m, n) => {
    const table = Array(m + 1)
        .fill()
        .map(row => {
            return Array(n + 1).fill(0);
        });

    // base case
    table[1][1] = 1; // only one way

    for (let row = 0; row <= m; row++) {
        for (let col = 0; col <= n; col++) {
            let current = table[row][col];
            // move down
            if (row + 1 <= m) {
                table[row + 1][col] += current;
            }

            // move right
            if (col + 1 <= n) {
                table[row][col + 1] += current;
            }

        }
    }

    return table[m][n];
}



console.log(gridTraveller(1, 1)); // 1
console.log(gridTraveller(2,3)); // 3
console.log(gridTraveller(3,2)); // 3
console.log(gridTraveller(3, 3)); // 6
console.log(gridTraveller(16,16)); // 155117520
console.log(gridTraveller(18,18)); // 2333606220