
const connectedComponentsCount = (graph) => {
    let count = 0;
    const visited = new Set();

    for (const node in graph) {
        if (explore(graph, node, visited) === true) {
            count += 1;
        }
    }

    return count;
};

const explore = (graph, node, visited) => {
    const stack = [node];

    if (visited.has(String(node))) return false;

    while (stack.length > 0) {
        let current = stack.pop();

        if (visited.has(String(current))) continue;
        visited.add(String(current));

        for (const neighbour of graph[current]) {
            stack.push(neighbour);
        }
    }

    return true;
};

const result1 = connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}); // -> 2

console.assert(result1 === 2, "Failed");