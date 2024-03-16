let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let n = Number(input[0]);
let cnt = 0;
let flag = false; 

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

/* 잘못 푼 풀이
if (n % 5 == 0) {
    cnt += parseInt(n / 5); 
} else {
    cnt += parseInt(n / 5); 
    n %= 5;

    if (n % 3 == 0) {
        cnt += parseInt(n / 3); 
    } else {
        n = Number(input[0]);
        cnt = 0;

        if (n % 3 == 0) {
            cnt += parseInt(n / 3); 
        } else {
            cnt = -1;
        }
    }
}

console.log(cnt);
*/

//콘솔로 확인!!