let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let k = Number(input[0]);
let sizeArr = input[1].split(' ');

let visited = new Array(10).fill(false);
let selected = [];
let result = [];

function dfs(depth) {
    if (depth == k + 1) {
        let check = true;
        for (let i = 0; i < k; i++) {
            if (sizeArr[i] == '<') {
                if (selected[i] > selected[i + 1]) {
                    check = false;
                }
            } else if (sizeArr[i] == '>') {
                if (selected[i] < selected[i + 1]) {
                    check = false;
                }
            }
        }

        if (check) {
            let selectedStr = selected.join('');
            result.push(selectedStr);
        }

        return;
    }

    for (let i = 0; i < 10; i++) {
        if (visited[i]) {
            continue;
        }

        selected.push(i);
        visited[i] = true;
        dfs(depth + 1);
        selected.pop();
        visited[i] = false;
    }
}
dfs(0);

result.sort((a, b) => b - a);
console.log(result[0] + '\n' + result[result.length - 1]);