const islandCount = (grid) => {
    let count = 0;
    const visited = new Set();
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (explore(grid, row, col, visited) === true) {
                count += 1;
            }
        }
    }

    return count;
};


const explore = (grid, row, col, visited) => {
    if (grid[row][col] === 'W') return false;

    const pos = `${row},${col}`;
    if (visited.has(pos)) return false;

    const stack = [pos];

    while (stack.length > 0) {
        const current = stack.pop();
        const pos = current.split(',');
        const cRow = parseInt(pos[0]);
        const cCol = parseInt(pos[1]);

        // Inbound check
        if (!visited.has(current)
            && isRowAndColInbounds(grid, cRow, cCol)
            && grid[cRow][cCol] === 'L') {

            visited.add(current);

            // Get neighbours
            stack.push(`${cRow + 1},${cCol}`);
            stack.push(`${cRow - 1},${cCol}`);
            stack.push(`${cRow},${cCol + 1}`);
            stack.push(`${cRow},${cCol - 1}`);
        }

    }

    return true;
};

const isRowAndColInbounds = (grid, row, col) => {
    const isRowInbounds = 0 <= row && row < grid.length;
    const isColInbounds = 0 <= col && col < grid[0].length;

    return (!isRowInbounds || !isColInbounds) ? false : true;
};

// Using recursion
const exploreR = (grid, row, col, visited) => {

    const isRowInbounds = 0 <= row && row < grid.length;
    const isColInbounds = 0 <= col && col < grid[0].length;

    if (!isRowInbounds || !isColInbounds) return false;

    if (grid[row][col] === 'W') return false;

    const pos = `${row},${col}`;
    if (visited.has(pos)) return false;
    visited.add(pos);

    explore(grid, row + 1, col, visited);
    explore(grid, row - 1, col, visited);
    explore(grid, row, col + 1, visited);
    explore(grid, row, col - 1, visited);

    return true;
};




const grid1 = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];

const result1 = islandCount(grid1); // -> 3
console.log(result1);

const grid2 = [
    ['L', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'L'],
];

const result2 = islandCount(grid2); // -> 4
console.log(result2);

const grid3 = [
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
];

const result3 = islandCount(grid3); // -> 1
console.log(result3);


const grid4 = [
    ['W', 'W'],
    ['W', 'W'],
    ['W', 'W'],
];

const result4 = islandCount(grid4); // -> 0
console.log(result4);
