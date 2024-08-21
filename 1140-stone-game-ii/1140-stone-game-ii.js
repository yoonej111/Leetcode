function stoneGameII(piles) {
    const n = piles.length;
    
    const suffixSum = Array(n).fill(0);
    suffixSum[n - 1] = piles[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suffixSum[i] = piles[i] + suffixSum[i + 1];
    }
    
    const dp = Array.from({ length: n }, () => Array(n + 1).fill(0));
    
    for (let i = n - 1; i >= 0; i--) {
        for (let m = 1; m <= n; m++) {
            let maxStones = 0;
            for (let x = 1; x <= 2 * m && i + x <= n; x++) {
                let next = i + x < n ? dp[i + x][Math.max(m, x)] : 0;
                maxStones = Math.max(maxStones, suffixSum[i] - next);
            }
            dp[i][m] = maxStones;
        }
    }
    
    return dp[0][1];
}
