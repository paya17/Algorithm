let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

//큐 라이브러리!
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

//행,열 기준으로
const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
const dy = [-1, -2, -2, -1, 1, 2, 2, 1];

let testCases = Number(input[0]); //이것도!
let line = 1;
while (testCases--) {
    let n = Number(input[line]); //input 따로
    let [startx, starty] = input[line + 1].split(' ').map(Number);
    let [endx, endy] = input[line + 2].split(' ').map(Number);
    let visited = []; //visited 선언!!
    for (let i = 0; i < n; i++) { //n(제한되어 있으므로 MAX 아님)
        visited.push(new Array(n).fill(-1)); //n
    } //2차원이므로!!


    function bfs() {
        let queue = new Queue();

        queue.enqueue([startx, starty]);
        visited[startx][starty] = 0;

        while (queue.getLength() != 0) {
            let [curx, cury] = queue.dequeue();

            if (curx == endx && cury == endy) { //[curx, cury] == [endx, endy] X!!
                console.log(visited[curx][cury]);
                break; //? or return;?
            }

            //인접 노드들
            for (let i = 0; i < dx.length; i++) {
                let nx = curx + dx[i];
                let ny = cury + dy[i];

                //범위 벗어난 경우 (아래에서 할 수도)
                if (nx < 0 || nx >= n || ny < 0 || ny >= n) {
                    continue;
                }

                //if (nx >= 0 && nx < n && ny >= 0 && ny < n) 여기서 할 수도..
                if (visited[nx][ny] == -1) {
                    visited[nx][ny] = visited[curx][cury] + 1;
                    queue.enqueue([nx, ny]);
                }
            }
        }

    }
    bfs();

    line = line + 3; //line += 3; //다음 테스트 케이스로 이동
}

//큐에선 [x,y] 형태로! 
//딴 사람들 큐 더 쉽게 만드는디??