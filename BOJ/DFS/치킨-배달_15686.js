let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);
/*
let place = [];
for (let i = 1; i < 1 + n; i++) {
    place.push([...input[i].split(' ').map(Number)]);
}
//console.log(place);
*/

let houseArr = [];
let chickenArr = [];

for (let i = 1; i < 1 + n; i++) {
    let line = input[i].split(' ').map(Number);

    for (let j = 0; j < n; j++) {
        if (line[j] == 1) {
            houseArr.push([i, j + 1]);
        } else if (line[j] == 2) {
            chickenArr.push([i, j + 1]);
        }
    }
}
//console.log(houseArr);
//console.log(chickenArr);

let minValue = 1e9;
let visited = new Array(chickenArr.length).fill(false);
let selected = [];

function dfs(depth, start, cnt) {
    if (depth == cnt) {
        let selectedChickenArr = [];
        for (let i of selected) {
            selectedChickenArr.push(chickenArr[i]);
        }

        let totalChickenDis = 0;

        for (let house of houseArr) {
            let chickenDis = 1e9;

            for (let chicken of selectedChickenArr) {
                let dis = Math.abs(house[0] - chicken[0]) + Math.abs(house[1] - chicken[1]);
                //console.log(dis);
                chickenDis = Math.min(chickenDis, dis);
            }

            totalChickenDis += chickenDis;
        }

        minValue = Math.min(minValue, totalChickenDis);

        return;
    }

    for (let i = start; i < chickenArr.length; i++) {
        if (visited[i]) {
            continue; 
        }

        selected.push(i);
        visited[i] = true;
        dfs(depth + 1, i + 1, cnt); 
        selected.pop();
        visited[i] = false;
    }
}
for (let cnt = 1; cnt <= m; cnt++) {
    dfs(0, 0, cnt);
    //console.log(minValue);
}

console.log(minValue);