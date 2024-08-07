function solution(routes) {  
    let cameraCnt = 0;
    let cameraPlace = -30001; 
    
    routes.sort((a, b) => a[1] - b[1]); 
    
    for (let route of routes) {  
        let carIn = route[0]; 
        let carOut = route[1];
        
        if (cameraPlace < carIn) {  
            cameraCnt++; 
            cameraPlace = carOut;
        }
    }
    
    return cameraCnt;
}