
const allConstruct = (target, wordBank, memo = {}) => {

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


