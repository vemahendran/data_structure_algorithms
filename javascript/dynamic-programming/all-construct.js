const allConstruct = (target, wordBank) => {
    let table = Array(target.length + 1)
        .fill()
        .map(() => []);
    table[0] = [[]];

    for (let i = 0; i <= target.length; i++) {
        if (table[i].length > 0) {
            for (const word of wordBank) {
                if (target.slice(i, i + word.length) === word) {
                    const newCombination = table[i].map(subArray => [...subArray, word]);
                    table[i + word.length].push(...newCombination);
                }
            }
        }
    }

    return table[target.length];
}


const allConstructR = (target, wordBank, memo = {}) => {

    if (target in memo) {
        return memo[target];
    }

    if (target === '') {
        return [[]];
    }

    const result = [];

    for (const word of wordBank) {
        if (target.indexOf(word) === 0) {
            let suffix = target.slice(word.length);
            let suffixWays = allConstruct(suffix, wordBank);
            let targetWays = suffixWays.map(way => [word, ...way]);
            result.push(...targetWays);
        }
    }

    memo[target] = result;
    return result;
};


console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));

console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));

console.log(allConstruct("hello", ["cat", "dog", "mouse"]));

console.log(allConstruct("", ["cat", "dog", "mouse"]));

console.log(allConstruct("aaaaaaaaaaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaaaaaaa"]));


