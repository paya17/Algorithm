let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let n = Number(input[0]);
let arr = [];
for (let i = 1; i < 1 + n; i++) {
    let [x, y] = input[i].split(' ').map(Number);
    arr.push([x, y]);
}
let visited = new Array(n).fill(false);
let selected = [];
let minValue = 1e9; 

function dfs(arr, depth, start) {
    if (depth >= 1) { 
        let selectedValue = [];

        let totalX = 1; 
        let totalY = 0;

        for (let i of selected) {
            selectedValue.push(arr[i]);
        }
        
        for (let [x, y] of selectedValue) {
            totalX *= x;
            totalY += y;
        }
        
        minValue = Math.min(minValue, Math.abs(totalX - totalY));
    }

    for (let i = start; i < arr.length; i++) {
        if (visited[i]) {
            continue;
        }

        selected.push(i);
        visited[i] = true;
        dfs(arr, depth + 1, i + 1);
        selected.pop();
        visited[i] = false;
    }
}
dfs(arr, 0, 0);

console.log(minValue);