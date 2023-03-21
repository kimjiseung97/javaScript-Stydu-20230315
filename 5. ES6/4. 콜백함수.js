


//정수 n을 전달하면 1부터 n까지의 모든 짝수를 출력하는 함수

function showEvenNumber(n){
    for(let i =1; i<=n; i++){
        if(i%2===0){
            console.log(i);
        }
    }
}
function showOddNumber(n){
    for(let i =1; i<=n; i++){
        if(i%2===1){
            console.log(i);
        }
    }
}
function showOddOrEvenNumber(n, delim){
    for(let i =1; i<=n; i++){
        if(i%2===delim){
            console.log(i);
        }
    }
}

function showNumber(n,code){
    for(let i =1; i<=n; i++){
        if(code(i)){
            console.log(i);
        }
    }
}

function test(n){
    return n % 3===0;
}
// showNumber(50,function(n){return n%3===0;});
// showNumber(30, test);
showNumber(20, n=>n%3===0);

// showEvenNumber(10);
// showOddNumber(15);

showOddOrEvenNumber(10,1);

function showMessage(message,howTo){
    //공통기능
    document.body.background = 'gray';
    //개별기능
    howTo(massage);
    //공통기능
    alert('하하호호');
}
showMessage('메롱메롱',function(m){
    alert(m)
});
