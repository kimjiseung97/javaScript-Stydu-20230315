


//1 ~ 100
/*
    Math.random()   -   0.0 <=  ~  1.0

    Math.random()   -   0.0 <= ~ < 100.0  

    Math.floor(Math.random() * 100)

     -0 <= ~ < 100

     Math.floor(Math.random() * 100) + 1

     -1 <= ~ < 101


     공식 : x이상 y이하의 정수 난수
     Math.floor((Math.random()) * (y - x + 1)) + x
 */


var age = Math.random();


// var age = +prompt('당신의 나이는?');

// alert(`내 나이 : ${age+1}살`);

if(age>19){
    alert('성인입니다.');
    alert('주류를구매할 수 있습니다.');
}else{
    alert('미성년자입니다.')
}

