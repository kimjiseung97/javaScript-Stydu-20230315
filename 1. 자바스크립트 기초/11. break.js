
for(var i =0; i<3; i++){
    for(var j = 0; j<2; j++){
        if(i===j){
            break;
        }
        console.log(`[${i} , ${j}]`)
    }
}









// 50000번 루프중 1 ~ 100 사이의 랜덤숫자중 30이면 반복을 중간에 멈추고싶다


for(var i =0; i<50000; i ++){
    var r =  Math.floor((Math.random() * 10 + 1));
    console.log(r);
    if(r===3){
        console.log(`반복문 종료 : ${i + 1}회`);
        break;
    }
}