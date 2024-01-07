let n = 8;
let m = 5;
let data = [3, 2, 4, 1, 2, 2, 1, 5];

let cnt = 0;
let intervalSum = 0;
let end = 0;

for (let start = 0; start < n; start++) {
    while (intervalSum < m && end < n) {
        intervalSum += data[end];
        end++;
    }

    if (intervalSum == m) {
        cnt++;
    }

    intervalSum -= data[start];
}

console.log(cnt);