class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const treeIncludesR = (root, target) => {
    if (root === null) return false;

    if (root.val === target) return true;

    return treeIncludesR(root.left, target) || treeIncludesR(root.right, target);
};

const treeIncludes = (root, target) => {
    if (root === null) return false;

    let stack = [root];
    while (stack.length > 0) {
        let current = stack.pop();

        if (target === current.val) return true;

        if (current.left !== null) stack.push(current.left);
        if (current.right !== null) stack.push(current.right);
    }

    return false;
};

const test_00 = (() => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");
    const e = new Node("e");
    const f = new Node("f");

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;

    //      a
    //    /   \
    //   b     c
    //  / \     \
    // d   e     f

    console.log(treeIncludesR(a, "e")); // -> true
})();

const test_01 = (() => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");
    const e = new Node("e");
    const f = new Node("f");

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;

    //      a
    //    /   \
    //   b     c
    //  / \     \
    // d   e     f

    console.log(treeIncludesR(a, "a")); // -> true
})();


const test_02 = (() => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");
    const e = new Node("e");
    const f = new Node("f");

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;

    //      a
    //    /   \
    //   b     c
    //  / \     \
    // d   e     f

    console.log(treeIncludesR(a, "n")); // -> false
})();

const test_03 = (() => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");
    const e = new Node("e");
    const f = new Node("f");
    const g = new Node("g");
    const h = new Node("h");

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;
    e.left = g;
    f.right = h;

    //      a
    //    /   \
    //   b     c
    //  / \     \
    // d   e     f
    //    /       \
    //   g         h

    console.log(treeIncludesR(a, "f")); // -> true
})();

const test_04 = (() => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");
    const e = new Node("e");
    const f = new Node("f");
    const g = new Node("g");
    const h = new Node("h");

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;
    e.left = g;
    f.right = h;

    //      a
    //    /   \
    //   b     c
    //  / \     \
    // d   e     f
    //    /       \
    //   g         h

    console.log(treeIncludesR(a, "p")); // -> false
})();

const test_05 = (() => {
    console.log(treeIncludesR(null, "b")); // -> false
})();