class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const mergeInBetween = (list1, a, b, list2) => {
    let start = list1;
    for (let i = 1; i < a; i++) {
        start = start.next;
    }

    let end = start;
    for (let i = a; i <= b; i++) {
        end = end.next;
    }

    start.next = list2;
    while (list2.next != null) {
        list2 = list2.next;
    }

    list2.next = end.next;
    return list1;
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
    const a = new Node(0);
    const b = new Node(1);
    const c = new Node(2);
    const d = new Node(3);
    const e = new Node(4);
    const f = new Node(5);
    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;
    e.next = f;
    // 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6

    const x = new Node(1000000);
    const y = new Node(1000001);
    const z = new Node(1000002);
    x.next = y;
    y.next = z;
    // 1000000 -> 1000001 -> 1000002

    print(mergeInBetween(a, 3, 4, x)); // [0 -> 1 -> 2 -> 1000000 -> 1000001 -> 1000002 -> 5]
})();