let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
}

let dp = new Array(n).fill(0);

//일반화해야 될 정도로 복잡해지기 전까지, 초기항으로 설정하기?! (주어진 조건을 만족하면서~)
dp[0] = arr[0];
dp[1] = arr[0] + arr[1];
dp[2] = Math.max(arr[0] + arr[2], arr[1] + arr[2]); //마지막 도착 계단은 반드시 밟아야 한다.

for (let i = 3; i < n; i++) {
    dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 3] + arr[i - 1] + arr[i]);
}
/*
주어진 조건을 조금이라도 만족 못할 확률 있는 경우는, 식에 넣지 말기!!
-> dp[i - 1] + arr[i] 는, 연속 3개 밟으면 안되는 조건 만족 못할 확률 있으니 식에 못넣음!!
*/

console.log(dp[n - 1]); //index 0부터 시작했으므로, n 아니고 n-1



//계단의 개수, 각 계단에 쓰여 있는 점수 -> 총 점수의 '최댓값'
//DP (포도주 시식 참고함!)