const canConstruct = (target, wordBank) => {
    let table = Array(target.length + 1).fill(false);
    table[0] = true;

    for (let i = 0; i < target.length; i++) {
        if (table[i] === true) {
            for (const word of wordBank) {
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] = true;
                }
            }
        }
    }

    return table[target.length];
};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true

console.log(canConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // true

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])); // true

console.log(canConstruct("hello", ["cat", "dog", "mouse"])); // false

console.log(canConstruct("", ["cat", "dog", "mouse"])); // true

console.log(canConstruct("aaaaaaaaaaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaaaaaaa"])); // false