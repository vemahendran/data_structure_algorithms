const depthFirstSearch = (graph, source) => {
    const stack = [source];

    while (stack.length > 0) {
        let current = stack.pop();
        console.log(current);

        for (const neighbour of graph[current]) {
            stack.push(neighbour);
        }
    }
};

const breathFirstSearch = (graph, source) => {
    const queue = [source];

    while (queue.length > 0) {
        let current = queue.shift();
        console.log(current);

        for (const neighbour of graph[current]) {
            queue.push(neighbour);
        }
    }
};

const depthFirstSearchR = (graph, source) => {
    console.log(source);

    for (const neighbour of graph[source]) {
        depthFirstSearchR(graph, neighbour);
    }
}



const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

// depthFirstSearch(graph, 'a'); // abdfce | acebdf
// depthFirstSearchR(graph, 'a'); // abdfce | acebdf
// breathFirstSearch(graph, 'a'); // acbedf


const graph1 = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};


console.log(hasPath(graph1, 'f', 'k'));
