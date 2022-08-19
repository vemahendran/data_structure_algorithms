/**
 * Write a function, minimumIsland, that takes in a grid containing
 * Ws and Ls. W represents water and L represents land. The function
 * should return the size of the smallest island. An island is a
 * vertically or horizontally connected region of land.

 * You may assume that the grid contains at least one island.
 */

const minimumIsland = (grid) => {
    let min = Infinity;
    const visited = new Set();

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            const current = explore(grid, row, col, visited);
            if (current > 0 && current < min) {
                min = current;
            }
        }
    }

    return min === Infinity ? 0 : min;
};

const explore = (grid, row, col, visited) => {

    if (grid[row][col] === 'W') return 0;

    let size = 0;

    const pos = `${row},${col}`;
    if (visited.has(pos)) return 0;

    const stack = [pos];

    while (stack.length > 0) {
        const current = stack.pop();
        const pos = current.split(',');
        const cRow = parseInt(pos[0]);
        const cCol = parseInt(pos[1]);

        if (isRowAndColInbounds(grid, cRow, cCol)
            && grid[cRow][cCol] === 'L'
            && !visited.has(current)) {

            visited.add(current);
            size = size + 1;

            // Get all neighbours
            stack.push(`${cRow + 1},${cCol}`); // top neighbour
            stack.push(`${cRow - 1},${cCol}`); // bottomw neighbour
            stack.push(`${cRow},${cCol + 1}`); // left neighbour
            stack.push(`${cRow},${cCol - 1}`); // right neighbour

        }
    }

    return size;

};

const isRowAndColInbounds = (grid, row, col) => {

    const isRowInbounds = 0 <= row && row < grid.length;
    const isColInbounds = 0 <= col && col < grid[0].length;

    return (!isRowInbounds || !isColInbounds) ? false : true;
};



const grid1 = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];

const result1 = minimumIsland(grid1); // -> 2
console.log(result1);


const grid2 = [
    ['L', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'L'],
];

const result2 = minimumIsland(grid2); // -> 1
console.log(result2);

const grid3 = [
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
];

const result3 = minimumIsland(grid3); // -> 9
console.log(result3);

const grid4 = [
    ['W', 'W'],
    ['L', 'L'],
    ['W', 'W'],
    ['W', 'L']
];

const result4 = minimumIsland(grid4); // -> 1
console.log(result4);


const grid5 = [
    ['W', 'W'],
    ['W', 'W'],
    ['W', 'W'],
    ['W', 'W']
];

const result5 = minimumIsland(grid5); // -> 0
console.log(result5);
