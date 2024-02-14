let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let n = Number(input[0]);
let graph = [];
for (let i = 1; i <= n; i++) {
    graph.push(input[i].split(''));
}  //input 쭉 받아오기
//console.log(graph); //*콘솔로 꼭 확인!
//console.log(graph[0][0]);
let cnt = 0;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

//dfs 기본코드에 따라!
function dfs(x, y, curColor) { //인자에서 이름 라벨링할 필요 없음, 매개변수에서 이름 라벨링됨!
    graph[x][y] = 0; //방문처리!!(값 바꿔줌)

    for (let i = 0; i < dx.length; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (nx >= 0 && nx < n && ny >= 0 && ny < n) { //얘 먼저 통과해줘야 됨~!
            if (graph[nx][ny] != 0 && graph[nx][ny] == curColor) { //*뒤에 조건 추가해서!! //graph[nx][ny] == graph[x][y] 아님!
                dfs(nx, ny, graph[nx][ny]);
            }
        }
    }
}

//graph 전역변수로 선언돼있고, 매개변수로 i,j(index) 전달하니까, 굳이 graph[i][j](값) 전달할 필요 없음~! (index,값 구분!!!)
for (let i = 0; i < n; i++) { //*graph 만든 거(예제 입력 X!!)에 따라, 몇열부터
    for (let j = 0; j < n; j++) {
        if (graph[i][j] != 0) {  //Cannot read properties of undefined -> 오타 낸 거 없는지...
            dfs(i, j, graph[i][j]); //*dfs는 뭐부터 출발 //매개변수로 다양하게 '전달'~! //원래 graph[i][j] 굳이 넣을 필요 없는데, 이 문제는 방문처리해서 값을 0으로 바꾸기 전의 원래 값 보존을 위해!! (이렇게 하기 싫으면 visited 방법 쓰기)
            cnt++;
        }
    }
}
/*
for (let i = 0; i < n; i++) { 
    for (let j = 0; j < n; j++) {
        let curColor = graph[i][j]; //'R','G','B'(과정 반복..) -> 변수로!(반복되는 거 한번만) 

        if (curColor != 0) {
            dfs(i, j, curColor); 
            cnt++;
        }
    }
}
*/

console.log(cnt);

//*중간중간, 콘솔 출력하면서!!
//방문처리해서 다른 값으로 바꾸기 전의 원래 값이 필요한 경우, 방문처리 방법을 값을 직접 바꾸는 방법보단 visited 만드는 방법으로..
//함수에 대한 이해 더 필요...