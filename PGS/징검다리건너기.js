function solution(stones, k) {
    let start = 0;
    let end = 200000000; 
    
    let result = 0;
    while (start <= end) {
        let mid = parseInt((start + end) / 2); //현재 명수

        //징검다리 건널 수 있는지/없는지
        if (isPossible(stones, k, mid)) { //건널 수 있으면
            start = mid + 1; 
            result = mid;
        } else { //건널 수 없으면
            end = mid - 1; 
        }
    }
    
    function isPossible(stones, k, mid) {
        let cnt = 0;
        
        for (let x of stones) {
            if (x - mid < 0) {
                cnt++;
            } else {
                cnt = 0; 
            }
            
            //0이 연속으로 k개 만큼 반복되면 못건넘
            if (cnt == k) {
                return false;
            }
        }
        
        return true;
    }
    
    return result; 
};