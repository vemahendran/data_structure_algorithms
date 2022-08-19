class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const reverseList = (head) => {
    let prev = null;
    let current = head;

    while (current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
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
    const d = new Node("d");
    const e = new Node("e");
    const f = new Node("f");

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;
    e.next = f;

    // a -> b -> c -> d -> e -> f

    print(a);
    print(reverseList(a)); // f -> e -> d -> c -> b -> a
})();