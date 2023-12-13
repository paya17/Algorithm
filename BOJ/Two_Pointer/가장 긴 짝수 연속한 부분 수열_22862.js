let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, k] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

let result = 0;
let eraseCount = 0;
for (let start = 0, end = 0; start < n; start++) {
    while (end < n) {
        if (arr[end] % 2 == 0) {
            end++;
        } else {
            if (eraseCount == k) break;

            eraseCount++;
            end++;
        }
    }

    result = Math.max(result, end - start - eraseCount);

    if (arr % 2 == 1) {
        eraseCount--;
    }
}

console.log(result);