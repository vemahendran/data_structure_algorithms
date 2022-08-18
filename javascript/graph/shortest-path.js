/**
 * 
 * Write a function, shortestPath, that takes in an array of edges for an undirected
 * graph and two nodes (nodeA, nodeB). The function should return the length of the
 * shortest path between A and B. Consider the length as the number of edges in the
 * path, not the number of nodes. If there is no path between A and B, then return -1.
 */

const shortestPath = (edges, src, dest) => {
    const graph = buildGraph(edges);

    return explore(graph, src, dest);
};

const buildGraph = (edges) => {

    const graph = {};

    for (const edge of edges) {
        const [a, b] = edge;

        if (!graph[a]) graph[a] = [];
        if (!graph[b]) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
};

const explore = (graph, src, dest) => {
    const visited = new Set();
    const queue = [[src, 0]];

    while (queue.length > 0) {
        let [current, distance] = queue.shift();

        if (current === dest) return distance;

        if (visited.has(current)) continue;
        visited.add(current);
        distance += 1;

        for (const neighbour of graph[current]) {
            queue.push([neighbour, distance]);
        }
    }

    return -1;
};

const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
];

const result = shortestPath(edges, 'w', 'z'); // -> 2
console.log(result);

const edges1 = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
];

const result1 = shortestPath(edges1, 'y', 'x'); // -> 1
console.log(result1);

const edges2 = [
    ['a', 'c'],
    ['a', 'b'],
    ['c', 'b'],
    ['c', 'd'],
    ['b', 'd'],
    ['e', 'd'],
    ['g', 'f']
];

const result2 = shortestPath(edges2, 'a', 'e'); // -> 3
console.log(result2);

const edges3 = [
    ['a', 'c'],
    ['a', 'b'],
    ['c', 'b'],
    ['c', 'd'],
    ['b', 'd'],
    ['e', 'd'],
    ['g', 'f']
];

const result3 = shortestPath(edges3, 'e', 'c'); // -> 2
console.log(result3);

const edges4 = [
    ['a', 'c'],
    ['a', 'b'],
    ['c', 'b'],
    ['c', 'd'],
    ['b', 'd'],
    ['e', 'd'],
    ['g', 'f']
];

const result4 = shortestPath(edges4, 'b', 'g'); // -> -1
console.log(result4);

const edges5 = [
    ['c', 'n'],
    ['c', 'e'],
    ['c', 's'],
    ['c', 'w'],
    ['w', 'e'],
];

const result5 = shortestPath(edges5, 'w', 'e'); // -> 1
console.log(result5);

const edges6 = [
    ['c', 'n'],
    ['c', 'e'],
    ['c', 's'],
    ['c', 'w'],
    ['w', 'e'],
];

const result6 = shortestPath(edges6, 'n', 'e'); // -> 2
console.log(result6);

const edges7 = [
    ['m', 'n'],
    ['n', 'o'],
    ['o', 'p'],
    ['p', 'q'],
    ['t', 'o'],
    ['r', 'q'],
    ['r', 's']
];

const result7 = shortestPath(edges7, 'm', 's'); // -> 6
console.log(result7);