let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let n = Number(input[0]); 
let cardArr = input[1].split(' ').map(Number);
let m = Number(input[2]);
let queryArr = input[3].split(' ').map(Number);

cardArr.sort((a, b) => a - b); 

let answer = ''; 
for (let x of queryArr) {
    answer += countByRange(cardArr, x, x) + ' ';
}

console.log(answer);



function countByRange(arr, leftValue, rightValue) {
	let rightIndex = upperBound(arr, rightValue, 0, arr.length);
	let leftIndex = lowerBound(arr, leftValue, 0, arr.length);

	return rightIndex - leftIndex;
}

function lowerBound(arr, target, start, end) {
	while (start < end) {
		let mid = parseInt((start + end) / 2);

		if (arr[mid] >= target) {
			end = mid;  
		} else {
			start = mid + 1;
		}
	}
	return end;
}

function upperBound(arr, target, start, end) {
	while (start < end) {
		let mid = parseInt((start + end) / 2);

		if (arr[mid] > target) {
			end = mid;
		} else {
			start = mid + 1; 
		}
	}
	return end;
}