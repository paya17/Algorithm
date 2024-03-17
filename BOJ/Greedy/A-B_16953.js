let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let [a , b] = input[0].split(' ').map(Number);
let flag = false;

let cnt = 0;
while (b >= a) {
    if (b == a) {
        console.log(cnt + 1); //문제에서 마지막에 1 더하라고 했음~
        flag = true;
        break;
    } else if (b % 2 == 0) {
        b = parseInt(b / 2);
        cnt += 1;
    } else if (b % 10 == 1) {
        b = parseInt(b / 10);
        cnt += 1;
    }
}

if (!flag) {
    console.log(-1);
}