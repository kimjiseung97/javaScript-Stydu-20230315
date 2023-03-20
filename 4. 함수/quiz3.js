/*
 1. 키(cm)와 몸무게(kg)을 인수로 전달받아 
 2. bmi지수를 계산하여 반환함과 동시에 
 3. bmi가 25.0이상이면 "당신은 과체중입니다." 
    18.5이하면 "당신은 저체중입니다." 
    나머지는 "당신은 정상체중입니다."를 출력하는 
    CalcBMI라는 함수를 정의하고 호출하세요. 
 # bmi 계산식 : 몸무게(kg) / (키(m) * 키(m)) 
 # 출력 예시: 
 "키 -> 178.4cm, 체중-> 78.2kg의 체질량지수는: 24.57입니다"
 */

function calcBMI(h, w) {
    var myBmi = w / ((h/100) ** 2);
    if (myBmi >= 25.0) {
        console.log('당신은 과체중입니다');
    } else if (myBmi <= 18.5) {
        console.log('당신은 저체중입니다');
    } else {
        console.log('당신은 정상체중입니다');
    }
    return myBmi;
}

// 자리수 반올림 함수
function round(myBmi, num) {
    // number : 5.7788
    // * 1000 : 5778.8
    // 반올림 : 5779
    // /1000 : 5.779

    //2째 자리까지 Math.round(number*10**2) / 10**2
    //3째 자리까지 Math.round(number*10**3) / 10**3
    //n번째 자리까지 Math.round(number*10**n) / 10**n
    return Math.round(myBmi * 10 ** num) / 10 ** num;
}



var h = 178.4,
    w = 78.2;
var myBmi = calcBMI(h, w);
console.log(myBmi);
console.log(`키 -> ${h}cm, 체중 -> ${w}kg의 체질량지수는 ${round(myBmi,2)}입니다.`);