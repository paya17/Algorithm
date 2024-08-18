let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let [n, m] = input[0].split(' ').map(Number); //구조분해할당(바로)
let arr = input[1].split(' ').map(Number);

let start = 0;
let end = Math.max(...arr);

let result = end; //0 아닐 수도!! (Math.min 이니까?)
while (start <= end) {
    let mid = parseInt((start + end) / 2);

    //mid(현재 구간 점수)가 조건을 만족하는지(O/X) - mid(현재 구간 점수)로 만든 구간 개수(cnt)가 m 안넘는지/넘는지
    //구간 점수가 mid가 나오도록 구간 만들기!!
    if (isPossible(mid)) { //조건 만족 O
        end = mid - 1; //줄이기 (최솟값 찾기 위해)
        result = Math.min(result, mid); //mid가 아닐 수도!!
    } else { //조건 만족 X
        start = mid + 1;
    }
}

function isPossible(mid) {
    let cnt = 1; //구간 수
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < n; i++) {
        min = Math.min(min, arr[i]);
        max = Math.max(max, arr[i]);
        /*
        if (min > arr[i]) {
            min = arr[i];
        }
        if (max < arr[i]) {
            max = arr[i];
        }
        */

        if (max - min > mid) {
            cnt++;
            min = arr[i];
            max = arr[i];
        }
    }

    return (m >= cnt); //이렇게도!!
} 

console.log(result);


//구간 점수 -> 구간에 속한 수의 최댓값과 최솟값의 차이
//배열의 크기 n,m,배열의 수들 -> 구간 점수의 최댓값의, 최솟값

//완전탐색으로 하기 많음 -> DP도 X -> 이진탐색 파라메트릭서치 (최솟값 구함)