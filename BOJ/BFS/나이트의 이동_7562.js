let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

dx = [-2, -2, -1, -1, 1, 1, 2, 2]; 
dy = [-1, 1, -2, 2, -2, 2, -1 ,1];

let testCases = Number(input[0]);
let line = 1;
while (testCases--) {
    let l = Number(input[line]);
    let [x, y] = input[line + 1].split(' ').map(Number);
    let [targetX, targetY] = input[line + 2].split(' ').map(Number);
    let visited = [];
    for (let i = 0; i < l; i++) {
        visited.push(new Array(l).fill(0));
    } 

    queue = new Queue();

    queue.enqueue([x, y]);
    visited[x][y] = 1;

    while (queue.getLength() != 0) {
        let cur = queue.dequeue();
        curx = cur[0];
        cury = cur[1];

        for (let i = 0; i < 8; i++) {
            let nx = curx + dx[i];
            let ny = cury + dy[i];

            if (nx < 0 || nx >= l || ny < 0 || ny >= l) {
                continue;
            }

            if (visited[nx][ny] == 0) {
                visited[nx][ny] = visited[curx][cury] + 1;
                queue.enqueue([nx, ny]);
            }
        }
    }

    console.log(visited[targetX][targetY] - 1);

    line += 3;
}



