

//10 ~ 0 카운트 다운

var count =10;


while(count >=0){
console.log(count);
count--;
}


//1 ~ 10 까지 누적총합

var total = 0;
var n = 1; //제어변수 (초기값 : begin)

while(n<=10){ // 조건식 (끝값 : end)
    n++;// 증감식(단계 : step)
    total +=n;
}