let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

class Queue { 
	constructor() { 
		this.items = {};
		this.headIndex = 0;
		this.tailIndex = 0;
	}

	enqueue(item) {
		this.items[this.tailIndex] = item;
		this.tailIndex++;
	}
	dequeue() {
		const item = this.items[this.headIndex]; 
		delete this.items[this.headIndex];
		this.headIndex++;
		return item;
	}
	peek() {
		return this.items[this.headIndex];
	}
	getLength() {
		return this.tailIndex - this.headIndex;
	}
}

let n = Number(input[0]);
let graph = [];
for (let i = 1; i <= n; i++) {
    graph.push(input[i].split('').map(Number));
}
let cntArr = [];
let cnt = 1;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(i, j) {
    let queue = new Queue();

    queue.enqueue([i, j]);
    graph[i][j] = -1; //방문 처리

    while (queue.getLength() != 0) {
        let [curx, cury] = queue.dequeue();

        for (let i = 0; i < dx.length; i++) {
            let nx = curx + dx[i];
            let ny = cury + dy[i];

            if (nx < 0 || nx >= n || ny < 0 || ny >=n) {
                continue;
            }

            if (graph[nx][ny] == 1) {
                queue.enqueue([nx, ny]);
                graph[nx][ny] = -1;

                cnt++;
            }
        }


    }
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (graph[i][j] == 1) {
            bfs(i, j);

            cntArr.push(cnt);
            cnt = 1;
        }
    }
}

cntArr.sort((a, b) => a - b);
cntArr.unshift(cntArr.length); //제일 앞 추가
//console.log(cntArr.join('\n'));

let answer = '';
for (let x of cntArr) {
    answer += x + '\n';
}
console.log(answer);