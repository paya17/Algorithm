let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let d = [];
for (let i = 1; i <= n; i++) {
    let data = input[i].split(' ').map(Number);
    d.push(data);
}

for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
        let upLeft = 0;
        if (j != 0) upLeft = d[i - 1][j - 1];

        let up = 0;
        if (j != i) up = d[i - 1][j];

        d[i][j] = Math.max(upLeft, up) + d[i][j];
    }
}

console.log(Math.max(...d[n - 1]));