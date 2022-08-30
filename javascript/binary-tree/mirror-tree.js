class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const mirror = (root) => {
    if (root == null) return null;
    
    mirror(root.left);
    mirror(root.right);

    swap(root);

    return root;
};

const swap = (node) => {
    let tmp = node.left;
    node.left = node.right;
    node.right = tmp;

    return node;
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

    console.log(mirror(a));
    //        3
    //      /   \
    //     4    11
    //    /    /  \
    //   1   -2   4

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

    console.log(mirror(a));
    //        1
    //      /   \
    //     0     6
    //    /     / \
    //   2    -6   3
    //  /      \
    // 2        2
})();


const test_02 = (() => {
    console.log(mirror(null)); // -> 0
})();