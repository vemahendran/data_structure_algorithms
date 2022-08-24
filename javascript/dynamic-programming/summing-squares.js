const summingSquares = (num, i = 0) => {
    if (num === 0) return 0;

    let squareRoot = Math.floor(Math.sqrt(num));
    let reminder = num - squareRoot * squareRoot;
     
    return i + summingSquares(reminder, i + 1);
}


console.log(summingSquares(3)); // -> 3
console.log(summingSquares(8)); // -> 2
// console.log(summingSquares(9)); // -> 1
// console.log(summingSquares(12)); // -> 4
// console.log(summingSquares(31)); // -> 4
// console.log(summingSquares(50)); // -> 2
// console.log(summingSquares(68)); // -> 2
// console.log(summingSquares(87)); // -> 4
// console.log(summingSquares(8)); // -> 2
