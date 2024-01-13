let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let flag = false;

let cnt = 0;
while (n >= 0) {
    if (n == 0 || n % 5 == 0) {
        cnt += parseInt(n / 5);
        console.log(cnt);
        flag = true;

        break;
    }

    n -= 3;
    cnt++;
}

if (!flag) {
    console.log(-1);
}