let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let d = [];
for (let i = 1; i < n; i++) {
    d.push(Number(input[i]));
}

for (let i = 1; i < n; i++) {
    d[i] = Math.max(d[i - 1] * d[i], d[i]);
}

console.log(Math.max(...d).toFixed(3));