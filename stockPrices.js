function best(prices) {
    let profit = 0;
    let low 

    for (i = 0; i < prices.length; i++) {
        if (low === undefined || low > prices[i]) {
            low = prices[i];
        }
        let diff = prices[i] - low;

        if (diff > profit) {
            profit = diff;
        }
    }
    return profit;
}

console.log(best([5, 2, 4, 2]));

