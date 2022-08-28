class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Using recursive
const treeSumR = (root) => {
    if (root === null) return 0;

    return root.val + treeSum(root.left) + treeSum(root.right);
};


// Using iteration
const treeSum = (root) => {
    if (root === null) return 0;
    let sum = 0;
    let queue = [root];

    while (queue.length > 0) {
        let current = queue.shift();
        sum += current.val;

        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }

    return sum;
};

const test_00 = (() => {
    const a = new Node(3);
    const b = new Node(11);
    const c = new Node(4);
    const d = new Node(4);
    const e = new Node(-2);
    const f = new Node(1);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;

    //       3
    //    /    \
    //   11     4
    //  / \      \
    // 4   -2     1

    console.log(treeSumR(a)); // -> 21
})();


const test_01 = (() => {
    const a = new Node(1);
    const b = new Node(6);
    const c = new Node(0);
    const d = new Node(3);
    const e = new Node(-6);
    const f = new Node(2);
    const g = new Node(2);
    const h = new Node(2);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;
    e.left = g;
    f.right = h;

    //      1
    //    /   \
    //   6     0
    //  / \     \
    // 3   -6    2
    //    /       \
    //   2         2

    console.log(treeSumR(a)); // -> 10
})();


const test_02 = (() => {
    console.log(treeSumR(null)); // -> 0
})();


