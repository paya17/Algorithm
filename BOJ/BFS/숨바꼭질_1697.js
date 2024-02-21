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

let [n, k] = input[0].split(' ').map(Number);
const MAX = 100001;
let visited = new Array(MAX).fill(-1); //visited!,'-1'로

function bfs() {
    //기본 코드
    let queue = new Queue();

    queue.enqueue(n);
    visited[n] = 0; //시작노드! //시작노드는 '0'으로

    //v,i 대신 curx, nx?
    while (queue.getLength() != 0) { //while
        let curx = queue.dequeue();

        //제일 나중에 //index(노드)(5 , 17) 비교한 후 같으면, 값(시간) 출력
        if (curx == k) {
            console.log(visited[curx]);
        }

        for (let nx of [curx - 1, curx + 1, curx * 2]) {  //직접 인접노드들
            //범위 벗어난 경우!!
            if (nx < 0 || nx >= MAX) {
                continue;
            }

            if (visited[nx] == -1) { //방문하지 않은('-1')
                queue.enqueue(nx);
                visited[nx] = visited[curx] + 1; //'추가정보 값'
            }
        }
    } 
}
bfs();