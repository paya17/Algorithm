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
            houseArr.push([i, j + 1]);  //값으로,좌표(index) 뽑아내기
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
        } //값들 가져오기

        let totalChickenDis = 0;
        //let chickenDis = 1e9; //여기에 하면 안됨~~~ (house마다 초기화해야 되니까!)

        for (let house of houseArr) {
            let chickenDis = 1e9; //여기에 선언!

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
            continue; //return; X
        }

        selected.push(i);
        visited[i] = true;
        dfs(depth + 1, i + 1, cnt); //매개변수 cnt 꼭 넣어줘야 됨.....
        selected.pop();
        visited[i] = false;
    }
}
for (let cnt = 1; cnt <= m; cnt++) {
    dfs(0, 0, cnt);
    //console.log(minValue);
}

console.log(minValue);