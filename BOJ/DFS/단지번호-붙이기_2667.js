let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(input[i].split('').map(Number)); 
} //[...input[i].split('').map(Number)] X
//console.log(arr);

//let totalCnt = 0; X
let cntArr = [];
let answer = '';


function dfs(i, j) {  //'현재 노드 넣은 거' + '재귀함수 한번 돈 거' 둘다에 코드가 맞는지 확인하기
    //houseCnt++; X
    
    if (0 <= i && i < n && 0 <= j && j < n && arr[i][j] == 1) { //'재귀함수 한번 돈 거에' //이 문제에선, 방문하지 않은 조건(걸러내는 작업)을 아래가 아니라 여기에서(더 뒤에서)
        arr[i][j] = -1; //방문 처리 //이 문제에선 여기에

        let result = 1;

        //dfs(~);
        result += dfs(i - 1, j); //함수 실행하고!!,함수의 return값을 변수에
        result += dfs(i, j - 1);
        result += dfs(i + 1, j);
        result += dfs(i, j + 1);
        //인접 노드들 직접 여기서 지정해주니까 for~ 할 필요 없음! (for문으로도 해보기)

        return result;
    }

    return 0; //이거 꼭 해줘야 됨~~~ 아니면 [NaN,NaN,NaN] ㅇㅈㄹ,,
}
//for로 한개씩 차근차근
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (arr[i][j] == 1) {
            //dfs(i, j); (return값 받아올 곳이 없음)
            let houseCnt = dfs(i, j);  //함수 실행하고!!,함수의 return값(집 수)을 변수에 할당(받아옴)!!!
            cntArr.push(houseCnt);
        }
    }
}

console.log(cntArr);

//변수 할당 말고, ++ 방법으로 풀어보기(많은 사람들이 일케 풂)