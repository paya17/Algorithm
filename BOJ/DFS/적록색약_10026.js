let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let n = Number(input[0]);

let rgbGraph = [];
for (let i = 1; i <= n; i++) {
    rgbGraph.push(input[i].split(''));
} 
//console.log(rgbGraph); //*콘솔로 꼭 확인!

let rbGraph = [];
for (let i = 0; i < n; i++) {
    rbGraph.push([...rgbGraph[i]]); //그냥 graph[i] 쓰면 안됨, 무조건 spread 연산자로 '복사'해서 넣어야 됨!!!!
} 
for (let i = 0; i < n; i++) { //배열 메서드 사용하지 말고, 반복문으로~
    for (let j = 0; j < n; j++) {
        if (rbGraph[i][j] == 'G') {
            rbGraph[i][j] = 'R';
        }
    }
}
//console.log(rbGraph); //*콘솔로 꼭 확인!
//console.log(rgbGraph); //왜 graph도 rgGraph처럼으로 바껴있지?? 복사 안하고 해서??
//let cnt = 0;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function dfs(x, y, curColor, graph) {
    graph[x][y] = 0; //graph is not defined -> 매개변수로 graph 꼭 전달해줘야 됨~!

    for (let i = 0; i < dx.length; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (nx >= 0 && nx < n && ny >= 0 && ny < n) { 
            if (graph[nx][ny] != 0 && graph[nx][ny] == curColor) {
                dfs(nx, ny, graph[nx][ny], graph);
            }
        }
    }
}

function divide(graph) { //rgbGraph,rbGraph 각각 경우의 과정 '반복'되니까, 함수로 만들어서 빼서 매개변수만 바꿔서 '한번만'~
    //console.log(graph);
    let cnt = 0; //경우마다 초기화해야 되니까 여기에

    for (let i = 0; i < n; i++) { 
        for (let j = 0; j < n; j++) {
            if (graph[i][j] != 0) {
                dfs(i, j, graph[i][j], graph); 
                cnt++;
            }
        }
    }

    //console.log(cnt);
    return cnt; //return!
}

let rgbGraphCnt = divide(rgbGraph); //함수 실행하고!,함수의 return값을 변수에 할당(받아옴)! (input이 다르니 output도 다르지!)
let rbGraphCnt = divide(rbGraph); 
console.log(rgbGraphCnt + ' ' + rbGraphCnt);


//*중간중간, 콘솔 출력하면서...
//빠른 시간 안에 하는 거,, 급하다고 막 코드 쓰지 말고,,
//함수는 불러와야 실행됨! 
//계속 변하는 걸 함수 매개변수로~
//인자로 다 넣었는지 점검!
//**반복되는 건 추상적인 거(함수 매개변수..) 만들어서 한번만! (매개변수에 계속 변하는 거 넣기)   (프레임은 그대로, 정보만 바꿔서~!~!)
    //-> rgbGraph,rbGraph 반복 -> graph 매개변수 만들어서 여기에 넣기
//함수 -> 재사용성,가독성!!!

