let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

//큐 라이브러리
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

let [s, t] = input[0].split(' ').map(Number);
let visited = new Array(MAX).fill(-1); //visited만,'-1'로!

let queue = new Queue();

queue.enqueue(s);
visited[s] = 0; //시작노드! //시작노드는 '0'으로

while (queue.getLength() != 0) {
    v = queue.dequeue();

    for (x of [v + v, v - v, v * v, v / v]) {  //직접 인접노드들
        if (visited[x] == -1) { //방문하지 않은('-1')
            queue.enqueue(x);
            visited[x] += 1;
        }
    }
} 