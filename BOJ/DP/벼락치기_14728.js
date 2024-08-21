let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let [n, t] = input[0].split(' ').map(Number);
let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(input[i].split(' ').map(Number));
}

let dp = [];
for (let i = 0; i < n + 1; i++) {
    dp.push(new Array(t + 1).fill(0));
}

//첫번째 단원부터
for (let i = 1; i <= n; i++) {
    let [time, score] = arr[i - 1]; //arr는 index 0부터 시작하니까 i-1 //해시 사용 안하고, [ , ] 형태로 넣어놓고 구조분해할당으로 빼올 수도

    for (j = 1; j <= t; j++) {
        if (time > j) {
            dp[i][j] = dp[i - 1][j];
        } else {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - time] + score);
        }
    }
}

console.log(dp[n][t]);


//준석이가 얻을 수 있는 '최대' 점수

//'규칙 잘 모르겠고', '완전 탐색으로 구하기는 많을 때'  DP ?! 
//특정 단원을 선택하거나 선택하지 않는 배낭문제 유형