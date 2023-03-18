



var x = 30, y = 40;


var z = '' + x + y;
console.log(z);








//키, 몸무게

// var cm = prompt('키를입력');
// var kg = prompt('몸무게를 입력(kg)');

// var m = cm/100;

// var bmi = kg/(cm*cm);

// alert(`당신은 bmi가 ${bmi}입니다.`);


//회원 로그인 여부 확인
// 브라우저 로컬스토리지에 토큰이 존재하면 로그인한 것임

function islogin(){
    //ACCESS_TOKEN : 123213213SAKDJKLSADKLSA
    //ACCESS_TOKEN : null
    //getItem은 해당값이 있으면 값을 가져오고 없으면 null
    return !!localStorage.getItem('ACCESS_TOKEN');
}

