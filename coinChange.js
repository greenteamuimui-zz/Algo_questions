var coinChange1 = function(coins, amount) {
    let mins = new Array(amount+1);
    mins.fill(Number.MAX_VALUE);
    mins[0] = 0;
    for (let i = 1; i < amount+1; i++) {
        for (let j = 0; j < coins.length; j++) {
            let previousSum = i - coins[j];
            if (previousSum < 0) continue;
            if (previousSum <= i) {
                mins[i] = Math.min(mins[i],mins[previousSum] + 1);
            }
        }
    }
    if (mins[amount] > amount) return -1;
    return mins[amount];
};
// console.log(coinChange([1], 1));
// console.log(coinChange1([1,2,5], 11));
// console.log(coinChange([5,3,2], 4));
// console.log(coinChange1([7,4,3], 26));
console.log(coinChange1([186,419,83,408], 6249));
