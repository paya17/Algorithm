let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
}
//console.log(n, arr);

let dp = new Array(n).fill(0); 

//일반화해야 될 정도로 복잡해지기 전까지, 초기항으로 설정하기?!
dp[0] = arr[0]; //0번째부터!
dp[1] = arr[0] + arr[1];
dp[2] = Math.max(arr[0] + arr[1], arr[0] + arr[2], arr[1] + arr[2]);

for (let i = 3; i < n; i++) {
	dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i], dp[i - 3] + arr[i - 1] + arr[i]);
} 

console.log(dp[n - 1]); //index 0부터 시작했으므로, n 아님!!!!


