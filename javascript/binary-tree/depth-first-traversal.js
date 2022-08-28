class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const depthFirstValues = (root) => {
    if (root === null) return [];
    let leftTree = depthFirstValues(root.left);
    let rightTree = depthFirstValues(root.right);
    return [root.val, ...leftTree, ...rightTree];
};

const depthFirstValuesIterative = (root) => {
    let result = [];
    if (root === null) return result;

    let stack = [root];

    while (stack.length > 0) {
        let current = stack.pop();
        result.push(current.val);

        if (current.right !== null) stack.push(current.right);
        if (current.left !== null) stack.push(current.left);
    }

    return result;
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

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

console.log(depthFirstValues(a));
  //    -> ['a', 'b', 'd', 'e', 'c', 'f']clear

