
var num1 = +prompt('첫 번째 숫자를 입력 !');
var num2 = +prompt('두 번째 숫자를 입력 !');




var total = 0;
if(num1>num2){
    while(num2<=num1){
        total +=num2;
        num2++;
    }
}else if(num2>num1){
    while(num1<=num2){
        total +=num1;
        num1++;
    }
}
console.log(`${total}`)

 

