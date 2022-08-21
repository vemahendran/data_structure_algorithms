const countConstruct = (target, wordBank) => {

    let table = Array(target.length + 1).fill(0);
    table[0] = 1;

    for (let i = 0; i <= target.length; i++) {
        if (table[i] > 0) {
            for (const word of wordBank) {
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] += table[i]; 
                }
            }
        }
    }

    return table[target.length];
};


console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // 2

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])); // 4

console.log(countConstruct("hello", ["cat", "dog", "mouse"])); // 0

console.log(countConstruct("", ["cat", "dog", "mouse"])); // 1

console.log(countConstruct("aaaaaaaaaaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaaaaaaa"])); // false