// multi parameter : 매개변수가 n개인 경우

//집합 자료구조를 매개변수로 사용
// [배열, 객체]

// n개의 정수를 전달하면 해당 정수의 총합을 구해주는 함수

//스프레드 문법(ES6)

function addAll(...numbers) {
    var total = 0;

    for (var n of numbers) {
        total += n;
    }
    return total;
}

var r1 = addAll(1, 3, 5);
console.log(`r1 : ${r1}`);


function foo(arr1, arr2) {

}

// function bar(...arr1, ...arr2){
//...문법은 한번만 쓸 수 있다.
// }

foo([10, 20], [500, 1000, 1500]);

console.log('================================================');

//함수의 리턴값은 언제나 하나
//2개의 정수를 전달하면 덧셈 뺄셈 곱셈 나눗셈의 결과를 리턴받고싶다.

function operateAll(n1, n2) {
    return {
        plus : addAll(n1,n2),
        minus : n1 - n2,
        multiple : n1 * n2,
        divide : n1 / n2
    };
    //리턴값의 순서의 중요도에 따라 리턴값을 객체로하느냐 배열로 하느냐가 결정된다. 순서가 상관이없으면 객체 순서가 매우 중요하면 배열로 하는것이 더 좋다. 
}

var result = operateAll(10,5);
console.log(`덧셈결과 : ${result.plus}`);
console.log(`뺄셈결과 : ${result.minus}`);
console.log(`곱셈결과 : ${result.multiple}`);
console.log(`나눗셈결과 : ${result.divide}`);

