
/**
 * Write a function, zipperLists, that takes in the head of two linked lists
 * as arguments. The function should zipper the two lists together into single
 * linked list by alternating nodes. If one of the linked lists is longer than
 * the other, the resulting list should terminate with the remaining nodes.
 * The function should return the head of the zippered linked list.
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const zipperLists = (head1, head2) => {

    let tail = head1;
    let current1 = head1.next;
    let current2 = head2;
    let counter = 0;

    while (current1 !== null && current2 !== null) {
        if (counter % 2 !== 0) {
            tail.next = current1;
            current1 = current1.next;
        } else {
            tail.next = current2;
            current2 = current2.next;
        }

        tail = tail.next;
        counter += 1;
    }

    if (current1 !== null) tail.next = current1;
    if (current2 !== null) tail.next = current2;

    return head1;
};

const print = (head) => {
    let current = head;
    let list = [];
    while (current !== null) {
        list.push(current.val);
        current = current.next;
    }

    console.log(list);
};

const test01 = (() => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    a.next = b;
    b.next = c;
    // a -> b -> c

    const x = new Node("x");
    const y = new Node("y");
    const z = new Node("z");
    x.next = y;
    y.next = z;
    // x -> y -> z

    print(zipperLists(a, x)); // a -> x -> b -> y -> c -> z
})();

const test02 = (() => {
    const a = new Node(5);
    const b = new Node(10);
    const c = new Node(15);
    a.next = b;
    b.next = c;
    // 5 -> 10 -> 15

    const x = new Node(2);
    const y = new Node(3);
    const z = new Node(20);
    x.next = y;
    y.next = z;
    // 2 -> 3 -> 20

    print(zipperLists(a, x)); //5 -> 2 -> 10 -> 3 -> 15 -> 20
    // 2 -> 3 -> 5 -> 10 -> 15 -> 20
})();