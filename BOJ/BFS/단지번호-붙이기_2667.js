let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let n = Number(input[0]);
let graph = [];
for (let i = 1; i <= n; i++) {
    graph.push(input[i].split('').map(Number));
}
let cntArr = [];
//let cnt = 1;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(x, y) {

    const queue = [[x, y]];
    graph[x][y] = -1; //방문 처리

    let cnt = 1; //

    while (queue.length > 0) {
        let [curx, cury] = queue.shift();

        for (let i = 0; i < dx.length; i++) {
            let nx = curx + dx[i];
            let ny = cury + dy[i];

            if (nx < 0 || nx >= n || ny < 0 || ny >=n) {
                continue;
            }

            if (graph[nx][ny] == 1) {
                graph[nx][ny] = -1;
                queue.push([nx, ny]);

                cnt++; //원래도
            }
        }


    }

    return cnt; //
}

//for->하나씩
for (let i = 0; i < n; i++) { //col
    for (let j = 0; j < n; j++) { //row
        if (graph[i][j] == 1) {
            //bfs(i, j);
            let cnt = bfs(i, j); //bfs 함수 안에 있던 cnt를, 'return'으로 외부로 가져와서 변수에 할당!

            cntArr.push(cnt);
            //cnt = 1;
        }
    }
}

cntArr.sort((a, b) => a - b);
cntArr.unshift(cntArr.length); //제일 앞 추가 //[3,7,8,9]
//console.log(cntArr.join('\n'));

let answer = '';
for (let x of cntArr) {
    answer += x + '\n';
}
console.log(answer);