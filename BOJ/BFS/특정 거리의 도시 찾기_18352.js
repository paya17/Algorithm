let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, m, k, x] = input[0].split(' ').map(Number);
let graph = [];
for (let i = 1; i <= n; i++) {
    graph[i] = [];
}
for (let i = 1; i <= m; i++) {
    let [x, y] = input[i].split(' ').map(Number);
    graph[x].push(y);
}
let distance = new Array(n + 1).fill(-1);

let queue = new Queue();

queue.enqueue(x);
distance[x] = 0;

while (queue.getLength() != 0) {
    let now = queue.dequeue();

    for (let nextNode of graph[now]) {
        if (distance[nextNode] = -1) {
            distance[nextNode] = distance[now] + 1;
            queue.enqueue(nextNode);
        }
    }
}

let check = false;

for (let i = 1; i <= n; i++) {
    if (distance[i] = k) {
        console.log(i);
        check = true;
    }
}

if (!check) {
    console.log(-1);
}
