let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let cnt = 0;
let [start, end, strEnd] = input[0].split(' ').map(item => timeStrToNum(item));
let arr = [];
for (let i = 1; i < input.length; i++) {
    let [time, name] = input[i].split(' ');

    //arr.push({time: timeStrToNum(time), name: name});
    arr.push([timeStrToNum(time), name]);
}

/*
let startCheck = [];
//let endCheck = [];
for (let x of arr) {
    if (x.time <= start) {
        startCheck.push(x.name);
    }

    if (x.time >= end && x.time <= strEnd && startCheck.includes(x.name)) {
        cnt++;
        startCheck = startCheck.filter(item => item !== x.name);
    }
}
*/
let set = new Set(); //배열보다, 포함여부/삭제 빠름~~
/*
for (let x of arr) { 
    if (x.time <= start) {
        set.add(x.name);
    }

    if (x.time >= end && x.time <= strEnd && set.has(x.name)) {
        cnt++;
        set.delete(x.name);
    }
}
*/
for (let [time, name] of arr) { 
    if (time <= start) {
        set.add(name);
    }

    if (time >= end && time <= strEnd && set.has(name)) {
        cnt++;
        set.delete(name);
    }
}

console.log(cnt);

function timeStrToNum(timeStr) { //'22:00' //길거나/반복되는 거, 함수로 분리!
    let [hour, minute] = timeStr.split(':').map(Number); //[22, 00]
    
    return hour * 60 + minute;
} //시간:분 -> 다 분으로



//개강총회 스트리밍 끝난 시간 이후로 남겨져 있는 채팅 기록은 다른 스트리밍 영상의 채팅 기록으로 간주
//개강총회를 시작한 시간 S, 개강총회를 끝낸 시간 E, 개강총회 스트리밍을 끝낸 시간 Q
//학회원의 닉네임-알파벳 대소문자와 숫자, 특수 기호(., _, -)로만 구성된 문자열이며 최대 20글자
//00:00~23:59의 시간만 주어진다
//arr<=10만 !!!