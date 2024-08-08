let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let minTime = Infinity;

let [n, start] = input[0].split(' ').map(Number);
//<플로이드 워셜>
//graph (앞으로 계속 최소로 갱신돼서 '최단거리테이블' 될 것임!! (플로이드 워셜 디폴트가 인접행렬 형태여야 됨, 다익스트라 디폴트는 인접리스트 형태?!))
let graph = [];
/* //1노드부터
for (let i = 0; i <= n; i++) {
    graph.push([0]);
}
for (let i = 1; i <= n; i++) {
    graph[i].push(...input[i].split(' ').map(Number));
}
*/
//0노드부터
for (let i = 1; i <= n; i++) {
    graph.push(input[i].split(' ').map(Number));
}

//플로이드 워셜 알고리즘 (갱신돼서, 최종 최단거리테이블 탄생~)
for (let k = 0; k < n; k++) {
	for (let a = 0; a < n; a++) {
		for (let b = 0; b < n; b++) {
			graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]); //더 작은 값으로, 최단거리테이블 값 갱신
		}
	}
}


//<백트래킹(순열)> -> 시작 행성 제외한 나머지 행성들의 순열(경로) 구하기
let arr = [];
for (let i = 0; i < n; i++) {
    if (i !== start) {
        arr.push(i);
    }
}
let visited = new Array(n - 1).fill(false); //arr 요소 개수랑 똑같이(n-1)
let selected = [];

function dfs(depth) {
    if (depth == n - 1) {
        //각 경우(경로)의 총 최단시간 구하기 (각 경우에 대한, ~)
        let time = graph[start][selected[0]];
        for (let i = 1; i < n - 1; i++) {
            time += graph[selected[i - 1]][selected[i]];
        }

        //각 경우의 총 최단시간 중 최솟값
        minTime = Math.min(minTime, time);

        return;
    }

    for (let i = 0; i < arr.length; i++) {
        if (visited[i]) {
            continue;
        }

        selected.push(arr[i]);
        visited[i] = true;
        dfs(depth + 1);
        selected.pop();
        visited[i] = false;
    }
}
dfs(0);

console.log(minTime);




//행성의 개수, ana호가 발사되는 행성의 위치, 각 행성 간 이동 시간 -> 모든 행성을 탐사하기 위한 '최소 시간'
//2차원 행렬에서 i,j번 요소는 i번째 행성에서 j번째 행성에 도달하는데 걸리는 시간
//이미 방문한 행성도 중복해서 갈 수 있다!

//간선비용 다름
//N<=10 -> 플로이드 워셜 O(N^3) 가능
/*
플로이드 워셜 - 모든 행성->모든 행성 최소 시간
    #모든 노드에서 다른 모든 노드까지의 최단 경로 (마지막에, 구한 최단거리테이블 이용!)
    #기존에 알고 있던 A에서 B로 가는 최단 거리보다, A에서 'K를 거쳐' B로 가는 거리 중에 더 짧은지 검사해서, 더 짧은 거리로 최단거리테이블 값 갱신
        (대부분의 최단경로 알고리즘은, '다른 노드를 거쳐갈 때' 비용이 감소하는지 확인)
백트래킹(순열) - 모든 행성 탐사하는 경로 경우들 다 구해서, 총 최소시간
*/