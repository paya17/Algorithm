let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let m = Number(input[2]);
let query = input[3].split(' ').map(Number);

arr.sort((a, b) => a - b);

answer = '';
for (let i = 0; i < m; i++) {
    let cnt = countByRange(arr, query[i], query[i]);

    answer += cnt + ' ';
}

console.log(answer);