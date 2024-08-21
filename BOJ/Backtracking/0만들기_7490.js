let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let testCases = Number(input[0]);
for (let tc = 1; tc <= testCases; tc++) {
    let n = Number(input[tc]);
    //숫자들 배열
    let num = [];
    for (let i = 1; i <= n; i++) {
        num.push(i);
    }

    let arr = [' ', '+', '-'];
    let selected = [];
    let zeroArr = [];

    dfs(0);

    function dfs(depth) {
        if (depth == n - 1) { //기호 배열(중복 순열)
            let result = '';
            /*
            for (let i = 0; i < n; i++) {
                result += num[i] + selected[i];
            }
            */
            for (let i = 0; i < n - 1; i++) {
                result += num[i] + selected[i];
            }
            result += num[n - 1]; //마지막 부분 다르니까
            
            /* 이렇게 하면 괄호 묶은 것 처럼 됨...
            let trsResult = result.split(' ').join(''); //사이 공백 제거 //'1-23+4-5+67'
            trsResult = trsResult.split('-'); //'-' 기준으로 쪼개기 //['1','23+4','5+67']


            let sum = 0;
            for (let i = 0; i < trsResult.length; i++) { //'+'만 포함한 문자열 안 숫자 식 계산하기
                if (trsResult[i].includes('+')) {
                    if (i == 0) {
                        sum = trsResult[i].split('+').map(Number).reduce((a, b) => a + b);
                    } else {
                        sum -= trsResult[i].split('+').map(Number).reduce((a, b) => a + b);
                    }
                } else {
                    if (i == 0) {
                        sum = Number(trsResult[i]);
                    } else {
                        sum -= Number(trsResult[i]);
                    }
                }
            }
            */
            //숫자만 남게
            let trsResult = result.split(' ').join(''); //사이 공백 제거 //'1-23+4-5+67'
            trsResult = trsResult.replaceAll('-', ',');
            trsResult = trsResult.replaceAll('+', ',');
            let numbers = trsResult.split(',').map(Number); //[1,23,4,5,67]
            let operators = [...selected].filter(item => item !== ' '); //['-','+','-','+']

            let sum = numbers[0];
            for (let i = 0; i < operators.length; i++) {
                if (operators[i] == '-') {
                    sum -= numbers[i + 1];
                } else if (operators[i] == '+') {
                    sum += numbers[i + 1]
                }
            }

            if (sum == 0) {
                zeroArr.push(result);
            }

            return;
        }

        for (let i = 0; i < arr.length; i++) {
            selected.push(arr[i]);
            dfs(depth + 1);
            selected.pop();
        }
    }

    console.log(zeroArr.join('\n') + '\n');
}



//테스트케이스 개수,자연수 n -> 각 테스트 케이스에 대해 결과가 0이 되는 모든 수식을 출력(각 테스트 케이스의 결과는 한 줄을 띄워 구분)