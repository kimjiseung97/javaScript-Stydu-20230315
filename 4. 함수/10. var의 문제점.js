

// 1. 변수의 중복 선언 허용


// var x =10;
// var x = '김철수';

let x = 10;
x = '김철수';

console.log(`x : ${x}`);


// 2. 블록레벨 스코프 지원 x
//var i = '안녕';
let i = '안녕';
for(let i =0; i<3; i++){
    console.log(`for문 내부 i : ${i}`);
}

console.log(`for문 외부 i : ${i}`);


//3. 변수 호이스팅 : 변수 선언문을 자동으로 맨 위로 올림

// z = 100;
// console.log(z);
// var z;
//let z;




