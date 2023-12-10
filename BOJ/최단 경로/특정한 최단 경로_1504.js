let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let INF = 1e9;
let [n, m] = input[0].split(' ').map(Number);

let graph = [];
for (let i = 0; i <= n + 1; i++) graph.push([]);
for (let i = 1; i <= m; i++) {
    let [a, b, c] = input[i].split(' ').map(Number);

    graph[a].push([b, c]);
    graph[b].push([a, c]);
}

let [a, b] = input[m + 1].split(' ').map(Number);

let distance = new Array(n + 1).fill(INF);
dijkstra(1);
let distance_1_to_a = distance[a];
let distance_1_to_b = distance[b];

distance = new Array(n + 1).fill(INF);
dijkstra(a);
let distance_a_to_b = distance[b];
let distance_a_to_n = distance[n];

distance = new Array(n + 1).fill(INF);
dijkstra(b);
let distance_b_to_a = distance[a];
let distance_b_to_n = distance[n];

let route1 = distance_1_to_a + distance_a_to_b + distance_b_to_n;
let route2 = distance_1_to_b + distance_b_to_a + distance_a_to_n;

let result = Math.min(route1, route2);
if (result >= INF) console.log(-1);
else console.log(result);


