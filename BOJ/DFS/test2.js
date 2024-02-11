let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(input[i].split('').map(Number)); 
} 

let groupCnt = 0; 
let houseCnt = 0;
let houseCntArr = [];
let answer = '';

const dx = [-1, 1, 0, 0];
const dy = [0, 0, 1, -1];

function rangeCheck(x, y) {  
	if (x >= 0 && x < n && y >= 0 && y < n) {
		return true;
	} else {
		return false;
	}
}

function dfs(x, y) {  
    arr[x][y] = -1; 
    houseCnt++;

    for (let i = 0; i < dx.length; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i]

        if (rangeCheck(nx, ny)) {
            if (arr[nx][ny] == 1) { 
                dfs(nx, ny);
            }
        }
    }
}
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (arr[i][j] == 1) {
            dfs(i, j); 
            houseCntArr.push(houseCnt);
            houseCnt = 0; 
            groupCnt++; 
        }
    }
}

houseCntArr.sort((a, b) => a - b);
answer = groupCnt + '\n';
for (x of houseCntArr) {
    answer += x + '\n';
}
console.log(answer);
