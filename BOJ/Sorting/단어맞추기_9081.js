let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let testCases = Number(input[0]);
for (let tc = 1; tc <= testCases; tc++) {
    let word = input[tc].split(''); //['H','E','L','L','O']
    let answer = nextPermutation(word).join(''); 

    console.log(answer);
}

function nextPermutation(arr) {
    let i = arr.length - 2;
    let j = arr.length - 1;
  
    // 오름차순이 유지되는 가장 큰 인덱스 i를 계산
    while (arr[i + 1] <= arr[i]) {
      i--;
    }

    // i+1 인덱스부터는 내림차순 정렬인 상태, i가 음수면 내림차순(종료-마지막 순열)
    if (i < 0) {
      return arr; //원래 false 반환인데, ZOO 출력 위해!!
    }
  
    // 내림차순인 부분에서 arr[i] < arr[j] 를 만족하는 가장 큰 인덱스 j를 계산
    while (arr[j] <= arr[i]) {
      j--;
    }
  
    // arr[i]와 arr[j] 를 교환
    [arr[i], arr[j]] = [arr[j], arr[i]];
  
    // 내림차순이던 부분(i+1 인덱스부터) 을 reverse해서 다음 순열로 변경
    let next = arr.slice(i + 1).reverse();
    arr.splice(i + 1, next.length, ...next);
  
    return arr;
}

  

//테스트 케이스의 개수(<=10),단어들(단어 길이<=100) -> 주어진 단어 바로 다음에 나타나는 단어 출력 (주어진 단어가 마지막 단어이라면 그냥 주어진 단어를 출력)

//중복되는 것이 있는, 순열 -> 백트래킹으로 경우 죄다 구해서 '중복 거르기'로 중복 걸러주려 했음... => 경우 죄다 구해야되고 단어길이<=100 이니까, 시간 초과 빼박!!!
//바로 다음에 오는 문자열이 뭔지(어떻게 바뀌는지) -> next_permutation 알고리즘(넣었던 문자열의 다음 순서 문자열을 출력)

//백준 testCase
//while 쓰면 시간복잡도 줄어듦?? (이진탐색-for문보다,투포인터-이중for문보다)
//문자를 숫자로 생각?!
