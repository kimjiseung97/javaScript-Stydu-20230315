var num1 = +prompt('양의 정수를 입력 ');
var num2 = 0;
var request = '';
while(num2<=num1){
    if(num2%2==0){
        request+='-'
    }else{
        request+='+'
    }
    num2++
}
alert(request);
