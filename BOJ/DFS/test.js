let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(input[i].split('').map(Number)); 
} 

let groupCnt = 0; 
let houseCnt = 0;
let houseCntArr = [];
let answer = '';


function dfs(x, y) {  //'현재 노드 넣은 거' + '재귀함수 한번 돈 거' 둘다에 코드가 맞는지 확인하기
    arr[x][y] = -1; //방문 처리 
    houseCnt++;

    for ([a, b] of [[x - 1, y], [x, y - 1], [x + 1, y], [x, y + 1]]) { //인접 노드들
        if (0 <= a && a < n && 0 <= b && b < n) { //먼저 이 조건 먼저 통과해야됨!(이중 if문으로)
            if (arr[a][b] == 1) { //방문하지 않은 인접 노드라면
                dfs(a, b);
            }
        }
    }
}
/*
function dfs(i, j) {  
    if (0 <= i && i < n && 0 <= j && j < n && arr[i][j] == 1) { 
        arr[i][j] = -1; 
        houseCnt++;

        for ([x, y] of [[i - 1, j], [i, j - 1], [i + 1, j], [i, j + 1]]) {
            dfs(x, y);
        }
    }
}
*/
//for로 한개씩 차근차근
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (arr[i][j] == 1) {
            //let houseCnt = 0; X (여기에 선언하면 안됨!!)

            dfs(i, j); 
            houseCntArr.push(houseCnt);
            houseCnt = 0; //houseCnt 전역변수로 선언했으니까 다시 초기화해줌
            groupCnt++; //이거 굳이 선언 안하고, houseCntArr.length로 해도 됨
        }
    }
}

//console.log(groupCnt, houseCntArr);
houseCntArr.sort((a, b) => a - b);
answer = groupCnt + '\n';
for (x of houseCntArr) {
    answer += x + '\n';
}
console.log(answer);

//변수 할당 말고, ++ 방법으로 풀어보기(많은 사람들이 일케 풂)