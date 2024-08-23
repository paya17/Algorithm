let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let string = input[0];
let bomb = input[1];
let stack = [];

for (let i = 0; i < string.length; i++) {
    stack.push(string[i]); //스택에 string 요소 하나씩 넣기

    if (string[i] === bomb[bomb.length - 1]) { //스택에 들어온 string 요소와 bomb의 마지막 문자가 같다면
        let current = stack.slice(-bomb.length).join(''); //스택에서 bomb 길이만큼 꺼낸거(current)
        if (current === bomb) { //bomb과 같다면
            stack.splice(-bomb.length); //스택에서 bomb 길이만큼(current) 제거
        }
    }
} //연속으로 폭탄문자열 제거 가능

let result = stack.join(''); //스택에 폭탄문자열 제외 문자들만 남음

if (result === '') {
    console.log('FRULA') 
} else {
    console.log(result);
}

//남아있는 문자가 없는 경우, "FRULA"를 출력