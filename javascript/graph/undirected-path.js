/**
 * Write a function, undirectedPath, that takes in an array of edges for an undirected graph
 * and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or 
 * not there exists a path between nodeA and nodeB.
 * 
 */

const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);

    return hasPath(graph, nodeA, nodeB);
};

const hasPath = (graph, src, dest) => {
    const queue = [src];
    const visited = new Set();

    while (queue.length > 0) {
        const current = queue.shift();
        if (current === dest) return true;

        if (visited.has(current)) continue;
        visited.add(current);

        for (const neighbour of graph[current]) {
            queue.push(neighbour);
        }
    }



    return false;
};

const buildGraph = (edges) => {
    // convert to adjacent set
    const graph = {};
    for (let edge of edges) {
        let [src, dest] = edge;

        if (!graph[src]) graph[src] = [];
        if (!graph[dest]) graph[dest] = [];

        graph[src].push(dest);
        graph[dest].push(src);
    }

    return graph;
};

const edges0 = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

console.log(undirectedPath(edges0, 'j', 'm')); // -> true

const edges1 = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

console.log(undirectedPath(edges1, 'k', 'o')); // -> false
