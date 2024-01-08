let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, x] = input[0].split(' ').map(Number);
let arr = [0, ...input[1].split(' ').map(Number)];

let sum = 0;
for (let i = 1; i <= n; i++) {
    if (i <= x) {
        sum += arr[i];
    }
}
let maxSum = sum;
let cnt = 1;

let left = 1;
let right = x;
while (true) {
    left++;
    right++;

    if (right > n) {
        break;
    }

    sum = sum + arr[right] - arr[left - 1];
    if (maxSum == sum) {
        count++;
    } else if (maxSum < sum) {
        maxSum = sum;
        count = 1;
    }
}

if (maxSum == 0) {
    console.log('SAD');
} else {
    console.log(maxSum);
    console.log(count);
}