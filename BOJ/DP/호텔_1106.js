let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let [targetPeople, n] = input[0].split(' ').map(Number); //구조분해할당(바로)
let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(input[i].split(' ').map(Number));
}
/*
let arr = [];
for (let i = 1; i <= n; i++) {
    let [cost, people] = input[i].split(' ').map(Number);

    arr.push({cost: cost, people: people}); //[{cost: 3, people: 5}, {cost: 1, people: 1}] //해시 (string('3 5')->해시)
}
*/

let dp = new Array(targetPeople + 100).fill(Infinity);
 
dp[0] = 0;

for (let [cost, people] of arr) {
    if (dp[people] > cost) {
        dp[people] = cost;
    }

    for (let i = 1; i <= targetPeople; i++) {
        if (i < people) {
            dp[i] = Math.min(dp[i], cost);
        } else {
            dp[i] = Math.min(dp[i], dp[people] + dp[i - people]);
        }
    }
}

console.log(dp[targetPeople]);


//dp[i] -> i명까지 얻었다고 칠 때 최소 비용


//targetPeople와 도시 개수 n, 각 도시 홍보 비용과 얻을 수 있는 고객의 수 -> 고객을 적어도 targetPeople명 늘이기 위해 형택이가 투자해야 하는 'totalCost의 최솟값'