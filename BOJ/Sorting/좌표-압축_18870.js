let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let uniqueArr = [...new Set(arr)];

uniqueArr.sort((a, b) => a - b);

let map = new Map();
for (let i = 0; i < uniqueArr.length; i++) {
    map.set(uniqueArr[i], i);
}

let answer = '';
for (x of arr) {
    answer += map.get(x) + ' ';
}

console.log(answer);