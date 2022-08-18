/**
 * Write a function, largestComponent, that takes in the adjacency list of
 * an undirected graph. The function should return the size of the largest
 * connected component in the graph.
 */

const largestComponent = (graph) => {
    let largestComponentSize = 0;
    let visited = new Set();

    for (const node in graph) {
        let currentComponentSize = explore(node, graph, visited);
        if (currentComponentSize > largestComponentSize) {
            largestComponentSize = currentComponentSize;
        }
    }

    return largestComponentSize;
};

const explore = (node, graph, visited) => {
    let size = 0;

    if (visited.has(node)) return 0;

    const queue = [node];

    while(queue.length > 0) {
        const current = queue.shift();

        if (visited.has(current)) continue;
        visited.add(current);
        size += 1;

        for (const neighbour of graph[current]) {
            queue.push(neighbour);
        }
    }

    return size;
};


let result = largestComponent({
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
}); // -> 4

console.log(result);

let result1 = largestComponent({
    1: ['2'],
    2: ['1','8'],
    6: ['7'],
    9: ['8'],
    7: ['6', '8'],
    8: ['9', '7', '2']
  }); // -> 6
console.log(result1);

let result2 = largestComponent({
    3: [],
    4: ['6'],
    6: ['4', '5', '7', '8'],
    8: ['6'],
    7: ['6'],
    5: ['6'],
    1: ['2'],
    2: ['1']
  }); // -> 5
console.log(result2);


let result3 = largestComponent({}); // -> 0
console.log(result3);

let result4 = largestComponent({
    0: ['4','7'],
    1: [],
    2: [],
    3: ['6'],
    4: ['0'],
    6: ['3'],
    7: ['0'],
    8: []
  }); // -> 3
console.log(result4);