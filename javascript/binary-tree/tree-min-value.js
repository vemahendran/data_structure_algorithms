class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Using recursion
const treeMinValueR = (root) => {
    if (root === null) return Infinity;

    return Math.min(
        root.val,
        treeMinValueR(root.left),
        treeMinValueR(root.right)
    );
};


// Using iteration
const treeMinValue = (root) => {
    if (root === null) return 0;

    let min = Infinity;
    let stack = [root];

    while (stack.length > 0) {
        let current = stack.pop();

        if (min > current.val) min = current.val;
        if (current.left !== null) stack.push(current.left);
        if (current.right !== null) stack.push(current.right);
    }

    return min;
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

    console.log(treeMinValueR(a)); // -> -2
})();

const test_01 = (() => {
    const a = new Node(5);
    const b = new Node(11);
    const c = new Node(3);
    const d = new Node(4);
    const e = new Node(14);
    const f = new Node(12);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;

    //       5
    //    /    \
    //   11     3
    //  / \      \
    // 4   14     12

    console.log(treeMinValueR(a)); // -> 3
})();

const test_02 = (() => {
    const a = new Node(-1);
    const b = new Node(-6);
    const c = new Node(-5);
    const d = new Node(-3);
    const e = new Node(-4);
    const f = new Node(-13);
    const g = new Node(-2);
    const h = new Node(-2);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;
    e.left = g;
    f.right = h;

    //        -1
    //      /   \
    //    -6    -5
    //   /  \     \
    // -3   -4   -13
    //     /       \
    //    -2       -2

    console.log(treeMinValueR(a)); // -> -13
})();

const test_03 = (() => {
    const a = new Node(42);

    //        42

    console.log(treeMinValueR(a)); // -> 42

})();

