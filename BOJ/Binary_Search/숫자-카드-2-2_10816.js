let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let n = Number(input[0]); 
let cardArr = input[1].split(' ').map(Number);
let m = Number(input[2]);
let queryArr = input[3].split(' ').map(Number);

let map = new Map();
for (let x of cardArr) {
    if (map.has(x)) {
        map.set(x, map.get(x) + 1);
    } else {
        map.set(x, 1);
    }
}

let answer = '';
for (x of queryArr) {
    if (map.has(x)) {
        answer += map.get(x) + ' ';
    } else {
        answer += 0 + ' ';
    }
}

console.log(answer);

/*
let answer = [];
for (x of queryArr) {
    if (map.has(x)) {
        answer.push(map.get(x));
    } else {
        answer.push(0);
    }
}

console.log(answer.join(' '));
*/