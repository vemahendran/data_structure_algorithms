class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const getNodeValue = (head, index) => {
    let current = head;
    let counter = 0;

    while (current !== null) {
        if (counter === index) return current.val;
        counter += 1;
        current = current.next;
    }

    return null;
};

const test01 = (() => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");

    a.next = b;
    b.next = c;
    c.next = d;

    // a -> b -> c -> d

    console.log(getNodeValue(a, 2)); // 'c'
})();