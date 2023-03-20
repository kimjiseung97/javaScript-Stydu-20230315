

// 함수 정의 - 만든다. 
function happyGreeting(yourName){
    console.log(`${yourName}님 안녕하세요 반가반가`);
    console.log('오늘도 즐거운 하루 되세요');
}

// 함수 호출 - 사용한다

happyGreeting('뽀로로');

happyGreeting('크롱');

happyGreeting('김두한');

function makeLine(){
    console.log('========================================');

}
makeLine();


//원의 넓이를 자주 구한다. 원주율 * 반지름 * 2

function calcAreaCircle(r){
    const PI = 3.141592;
    var area = PI * r**2;

    return area;
}

a = calcAreaCircle(4);

console.log(a);





