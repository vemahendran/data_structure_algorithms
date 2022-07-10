Problems:

## allConstruct(target, wordBank)

Write a function `allConstruct(target, wordBank)` that accepts a target string and an array of strings.

The function should return a 2D array containing **all of the ways** that the `target` can be constructed by concatenating elements of the `wordBank` array. Each element of the 2D array should represent one combination that constructs the `target`.

You may reuse elements of `wordBank` as many times as needed.

### Test bed

**Case 1:**

```javascript
allConstruct(purple, [purp, p, ur, le, purpl])

// Output
[
    [purp, le],
    [p, ur, p, le]
]
```

**Case 2:**

```javascript
allConstruct(abcdef, [ab, abc, cd, def, abcd, ef, c])

// Output
[
    [ab, cd, ef],
    [ab, c, def],
    [abc, def],
    [abcd, ef]
]

```

**Case 3:**

```javascript
allConstruct(hello, [cat, dog, mouse])

// Output
[]
```

**Case 4:**

```javascript
allConstruct('', [cat, dog, mouse])

// Output
[[]]
```

### The solution

[all-construct.js](all-construct.js)