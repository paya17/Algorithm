let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

//'55-50+40-30+20-10' , '10+20'
let groups = input[0].split('-'); //['55','50+40','30+20','10'] , ['10+20']

let answer = 0;
answer += groups[0].split('+').map(Number).reduce((a, b) => a + b);
for (let i = 1; i < groups.length; i++) {
    answer -= groups[i].split('+').map(Number).reduce((a, b) => a + b);
}

console.log(answer);