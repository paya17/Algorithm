let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

arr.reverse();

let dp = new Array(n).fill(1);

for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
        if (arr[j] < arr[i]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}

console.log(n - Math.max(...dp));