let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
}

let d = new Array(n).fill(0);

d[0] = arr[0];
d[1] = arr[0] + arr[1];
d[2] = Math.max(arr[0] + arr[1], arr[0] + arr[2], arr[1] + arr[2]);

for (let i = 3; i < n; i++) {
    d[i] = d[i - 1];
    d[i] = Math.max(d[i], d[i - 2] + arr[i]);
    d[i] = Math.max(d[i], d[i - 3] + arr[i - 1] + arr[i]);
}

console.log(d[n - 1]);