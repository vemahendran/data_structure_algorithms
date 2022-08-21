
const nonAdjacentSumOld = (nums, memo = {}) => {
    let numStr = nums.toString();
    if (numStr in memo) return memo[numStr];
    if (nums.length === 0) return 0;

    let left = nums[0] + nonAdjacentSum(nums.slice(2), memo);
    let nonLeft = nonAdjacentSum(nums.slice(1), memo);

    memo[numStr] = Math.max(left, nonLeft)
    return memo[numStr];
};

const nonAdjacentSum = (nums, i = 0, memo = {}) => {
    if (i in memo) return memo[i];
    if (nums.length === 0) return 0;

    let left = nums[i] + nonAdjacentSum(nums.slice(i + 2), i, memo);
    let nonLeft = nonAdjacentSum(nums.slice(i + 1), i, memo);

    memo[i] = Math.max(left, nonLeft)
    return memo[i];
};


const nums = [2, 4, 5, 12, 7];
console.log(nonAdjacentSum(nums)); // -> 16

const nums2 = [7, 5, 5, 12];
console.log(nonAdjacentSum(nums2)); // -> 19

const nums3 = [7, 5, 5, 12, 17, 29];
console.log(nonAdjacentSum(nums3)); // -> 48

const nums4 = [
    72, 62, 10, 6, 20, 19, 42,
    46, 24, 78, 30, 41, 75, 38,
    23, 28, 66, 55, 12, 17, 9,
    12, 3, 1, 19, 30, 50, 20
];
console.log(nonAdjacentSum(nums4)); // -> 488


const nums5 = [
    72, 62, 10, 6, 20, 19, 42, 46, 24, 78,
    30, 41, 75, 38, 23, 28, 66, 55, 12, 17,
    83, 80, 56, 68, 6, 22, 56, 96, 77, 98,
    61, 20, 0, 76, 53, 74, 8, 22, 92, 37,
    30, 41, 75, 38, 23, 28, 66, 55, 12, 17,
    72, 62, 10, 6, 20, 19, 42, 46, 24, 78,
    42
];
console.log(nonAdjacentSum(nums5)); // -> 1465