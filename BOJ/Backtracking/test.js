let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let n = Number(input[0]);
let graph = [];
for (let i = 0; i <= n; i++) {
    graph.push([0]);
}
for (let i = 1; i <= n; i++) {
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
        selectedValue.push(selectedValue[0]);

        let totalCost = 0;
        for (let i = 0; i < n; i++) {
            let start = selectedValue[i];
            let end = selectedValue[i + 1];

            let cost = graph[start][end];
            if (cost == 0) {
                return;
            }

            totalCost += cost;
        }
        
        minValue = Math.min(minValue, totalCost);

        selectedValue.pop();

        return;
    }

    for (let i = 1; i <= n; i++) {
        if (visited[i]) {
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