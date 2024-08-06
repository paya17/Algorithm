let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let [n, k] = input[0].split(' ').map(Number);
let graph = [];
for (let i = 1; i <= n; i++) {
    graph.push(input[i].split(' ').map(Number));
}
let [s, x, y] = input[1 + n].split(' ').map(Number);












//1초마다 상,하,좌,우 방향으로 증식
//매 초마다, '번호가 낮은' 종류의 바이러스부터 먼저 증식 , 이미 바이러스 있으면, 다른 바이러스 들어갈 수 없음
//s초가 지난 후, (x,y)에 존재하는 바이러스의 종류 출력 / 바이러스 존재 안하면 0 출력
//(1,1)부터 시작