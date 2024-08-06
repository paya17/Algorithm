let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

//N 세로, M 가로
//4변 중 2변 이상 외부와 접촉하면 '한시간 후' 없어져버림 , 내부에 있으면 괜춘
//치즈가 모두 녹아 없어지는데 걸리는 시간 출력

let [n, m] = input[0].split(' ').map(Number); 
let graph = [];
for (let i = 1; i <= n; i++) {
    graph.push(input[i].split(' ').map(Number));
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let hour = 0; 
while (true) { 
    bfs(); 

    let isAllMelted = true; 


    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (graph[i][j] == 1) {
                let outsideAir = 0; 
                
                for (let l = 0; l < dx.length; l++) {
                    let nx = i + dx[l];
                    let ny = j + dy[l];

                    if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
                        continue;
                    }

                    if (graph[nx][ny] == 2) {
                        outsideAir++;
                    }
                }

                if (outsideAir >= 2) {
                    graph[i][j] = 3; 
                }

                isAllMelted = false;
            }
        }
    }

    if (isAllMelted) { 
        console.log(hour);
        break; 
    } else {
        hour++; 
    }
}

function bfs() {
    let visited = []; 
    for (let i = 0; i < n; i++) {
        visited.push(new Array(m).fill(false));
    }

    let queue = [[0, 0]];
    visited[0][0] = true;

    while (queue.length > 0) {
        let [curx, cury] = queue.shift();

        for (let i = 0; i < dx.length; i++) {
            let nx = curx + dx[i];
            let ny = cury + dy[i];

            if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
                continue;
            }

            if (!visited[nx][ny] && graph[nx][ny] !== 1) { 
                visited[nx][ny] = true;
                graph[nx][ny] = 2; 
                queue.push([nx, ny]);
            }
        }
    }
}

/*
function isMelted() {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (graph[i][j] == 1) {
                let twoCnt = 0;
                for (let k = 0; k < dx.length; k++) {
                    let nx = i + dx[k];
                    let ny = j + dy[k];

                    if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
                        continue;
                    }

                    if (graph[nx][ny] == 2) {
                        twoCnt++;
                    }
                }

                if (twoCnt >= 2) {
                    graph[i][j] == 2;
                }

                return false; //이렇게 하면 return때메 뒤에꺼 못보고 바로 종료돼서 안됨!!!
            }
        }
    }

    return true;
}
*/

/* 패캠은 이렇게!!
function isMelted() {
    let flag = true; //이전의 isMelted를 flag로 바꿔서 여기에

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (graph[i][j] == 1) {
                let twoCnt = 0;
                for (let k = 0; k < dx.length; k++) {
                    let nx = i + dx[k];
                    let ny = j + dy[k];

                    if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
                        continue;
                    }

                    if (graph[nx][ny] == 2) {
                        twoCnt++;
                    }
                }

                if (twoCnt >= 2) {
                    graph[i][j] == 2;
                }

                flag = false; //이렇게 
            }
        }
    }

    return flag; //flag를 return!!!
}
*/