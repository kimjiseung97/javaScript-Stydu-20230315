
function add(n1, n2){
    var result = n1 + n2;
    return result; // 탈출문
}

//반환값 : 함수 호출 이후에 함수밖으로 전달되는 값

var r1 =add(5,7);
add(r1, r1*2); // add(12,24);


//안쪽으로 쭉가서 실행 같은 레벨끼리는 왼쪽부터 실행
var r2 = add(add(2,3), add(add(3,4),add(6,2)));

console.log(r2);

// 리턴이 없는 함수(void 함수)
// 리턴값이 없는 함수는 변수에 담지말고 다른함수에 인수로 전달 x (값이 없기때문)
function multi(n1,n2){
    var result = n1*n2;

    console.log(`${n1} * ${n2} : ${result}`);
}

var r3 = multi(10,3); //r3에는 undefined가 들어간다 return값이 없기때문!

// return 탈출문

function callName(nickname){
    var prohibits = ['멍청이','돌아이','홍길동'];

    if(prohibits.includes(nickname)){
        console.log('잘못된 닉네임은 인사를 해줄수가 없어요');
        return; //단독 return문은 반복문의 break처럼 활용할 수 있다.
    }

    console.log(`${nickname}님 안녕하세요`);
}
callName('돌아이');

function stopLoop(){
    while(true){
        var flag = prompt('명령어를 입력해주세요');
        if(flag==='멈춰'){
            break; //return을 써버리면 함수자체를 끝내버리기때문에 alert('수고용'); 도 실행되지않고 끝나버린다.
        }
        alert(flag);
    }
    alert('수고용');
}

stopLoop();