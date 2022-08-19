class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const mergeLists = (head1, head2) => {

    // Decide tail and return node
    if (head1 === null) return head2;
    if (head2 === null) return head1;

    let tail, current1, current2, result;

    if (head1.val <= head2.val) {
        result = head1;
        current1 = head1.next;
        current2 = head2;

    } else {
        result = head2;
        current1 = head1;
        current2 = head2.next;
    }

    tail = result;

    while (current1 !== null && current2 !== null) {
        if (current1.val <= current2.val) {
            tail.next = current1;
            current1 = current1.next;
        } else {
            tail.next = current2;
            current2 = current2.next;
        }

        tail = tail.next;
    }

    if (current1 !== null) tail.next = current1;
    if (current2 !== null) tail.next = current2;

    return result;
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

    print(mergeLists(a, x)); // 2 -> 3 -> 5 -> 10 -> 15 -> 20
})();


const test02 = (() => {
    const a = new Node("a");
    const b = new Node("w");
    const c = new Node("z");
    a.next = b;
    b.next = c;
    // a -> w -> z

    const x = new Node("b");
    const y = new Node("c");
    const z = new Node("d");
    x.next = y;
    y.next = z;
    // b -> c -> d

    print(mergeLists(a, x)); // a -> c -> c -> d -> w -> z
})();


const test03 = (() => {
    const a = new Node("a");
    const p = new Node("p");
    const q = new Node("q");
    a.next = p;
    p.next = q;
    // a -> p -> q

    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");
    const x = new Node("x");
    const y = new Node("y");
    const z = new Node("z");
    b.next = c;
    c.next = d;
    d.next = x;
    x.next = y;
    y.next = z;
    // b -> c -> d -> x -> y -> z

    print(mergeLists(a, b)); // a -> b -> c -> d -> p -> q -> x -> y -> z
})();