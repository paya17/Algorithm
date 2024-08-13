let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let answer = 0; 

let n = Number(input[0]);
let stringLen = Number(input[1]);
let string = input[2];

/*
let pn = '';
for (let i = 0; i < 2 * n + 1; i++) { //예제 입력 대입해보면서
    if (i % 2 == 0) {
        pn += 'I';
    } else {
        pn += 'O';
    }
}
//pn = 'IO' * n + 'I";
*/

let start = 0; //index
let cnt = 0;
while (start < stringLen - 1) {
    if (string[start] + string[start + 1] + string[start + 2] === 'IOI') {
        cnt++;
        start += 2;

        if (cnt === n) {
            answer++;
            cnt--;
        }
    } else {
        start += 1;
        cnt = 0;
    }
}
/*
//슬라이딩 윈도우(투포인터)
let left = 0;
let right = 2 * n;
while (right <= stringLen - 1) {
    let word = '';
    for (let i = left; i <= right; i++) {
        word += string[i];
    }

    if (word == pn) {
        answer++;
    }

    left++;
    right++;
}
*/

console.log(answer);

//stirng에 Pn이 몇 군데 포함되어 있는지 출력 (P1->IOI)
//n ≤ 백만 , 2n+1,stringLen ≤ 백만
