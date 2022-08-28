class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Using recursion
const maxPathSumR = (root) => {
    if (root === null) return -Infinity;
    if (root.left === null && root.right === null) return root.val;

    let leftSum = maxPathSum(root.left);
    let rightSum = maxPathSum(root.right);

    return root.val + Math.max(leftSum, rightSum);
};


// Using iteration
const maxPathSum = (root) => {
    return 0;
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

    console.log(maxPathSum(a)); // -> 18

})();

const test_01 = (() => {
    const a = new Node(5);
    const b = new Node(11);
    const c = new Node(54);
    const d = new Node(20);
    const e = new Node(15);
    const f = new Node(1);
    const g = new Node(3);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    e.left = f;
    e.right = g;

    //        5
    //     /    \
    //    11    54
    //  /   \
    // 20   15
    //      / \
    //     1  3

    console.log(maxPathSum(a)); // -> 59
})();

const test_02 = (() => {
    const a = new Node(-1);
    const b = new Node(-6);
    const c = new Node(-5);
    const d = new Node(-3);
    const e = new Node(0);
    const f = new Node(-13);
    const g = new Node(-1);
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
    // -3   0    -13
    //     /       \
    //    -1       -2

    console.log(maxPathSum(a)); // -> -8
})();

const test_03 = (() => {
    const a = new Node(42);

    //        42

    console.log(maxPathSum(a)); // -> 42
})();
