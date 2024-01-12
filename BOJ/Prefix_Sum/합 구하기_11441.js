let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let data = input[1].split(' ').map(Number);
let m = Number(input[2]);

let sumValue = 0;
let prefixSum = [0];
for (let i of data) {
    sumValue += i;
    prefixSum.push(sumValue);
}

let answer = '';
for (let query = 3; query <= m + 2; query++) {
    let [i, j] = input[query].split(' ').map(Number);

    answer += (prefixSum[j] - prefixSum[i - 1]) + '\n';
}

console.log(answer);