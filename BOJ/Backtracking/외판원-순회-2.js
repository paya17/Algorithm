let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let n = Number(input[0]);
let graph = [];
for (let i = 0; i <= n; i++) {
    graph.push([0]);
}
for (let i = 1; i <= n; i++) {
    //graph.push(input[i].split(' ').map(Number)); X
    let line = input[i].split(' ').map(Number);

    for (let j = 0; j < n; j++) {
        graph[i].push(line[j]);
    }
}
let visited = new Array(n + 1).fill(false);
let selectedValue = [];
let minValue = 1e9;

function dfs(depth) {
    if (depth == n) {
        let result = [];
        for (i of selectedValue) {
            result.push(i);
        }
        result.push(result[0]);

        let totalCost = 0;
        for (let i = 0; i < n; i++) {
            let start = result[i];
            let end = result[i + 1];

            let cost = graph[start][end];
            if (cost == 0) {
                return;
            }

            totalCost += cost;
        }
        
        minValue = Math.min(minValue, totalCost);

        return;
    }

    for (let i = 1; i <= n; i++) {
        if (visited[i] == true) {
            continue;
        }

        selectedValue.push(i);
        visited[i] = true;
        dfs(depth + 1);
        selectedValue.pop();
        visited[i] = false;
    }
}
dfs(0);

console.log(minValue);