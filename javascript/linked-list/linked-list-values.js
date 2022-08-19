/**
 * Write a function, linkedListValues, that takes in the head of a linked list as an argument.
 * The function should return an array containing all values of the nodes in the linked list.
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const linkedListValues = (head) => {
    let current = head;
    let list = [];

    while(current !== null) {
        list.push(current.val);
        current = current.next;
    }

    return list;
};


const test_00 = (() => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");

    a.next = b;
    b.next = c;
    c.next = d;

    // a -> b -> c -> d

    console.log(linkedListValues(a)); // -> [ 'a', 'b', 'c', 'd' ]
})();