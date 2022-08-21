// Using tabulation technique

const fib = (num) => {

    let table = Array(num + 1).fill(0);
    table[1] = 1;

    for (let i = 0; i <= num; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }

    return table[num];
};


console.log(fib(6)); // 8
console.log(fib(7)); // 13
console.log(fib(8)); // 21
console.log(fib(9)); // 34
console.log(fib(50)); // 12586269025