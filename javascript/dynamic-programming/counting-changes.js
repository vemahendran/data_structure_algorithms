const countingChange = (amount, coins, count = 0) => {

    if (amount === 0) return 0;
    
    for (let i = 0; i < coins.length; i++) {
      let balance = amount - coins[i];
      if (balance >= 0) {
        count = 1 + countingChange(balance, coins, count);
      }
    }
    
    return count;
  };

console.log(countingChange(4, [1, 2, 3])); // -> 4

// countingChange(4, [1, 2, 3])
