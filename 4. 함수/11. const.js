const PI = 3.141592; //상수는 반드시 선언과 함께 초기화 해야한다.


const kim = {
    name: '김철수',
    age: 25
};

//객체 불변성을 위해서 객체는 const로 설정해주는것이 좋다.

kim.name = '김칠리';

kim = {
    name: '김철수',
    age: 25
};  //위 kim과 이 kim은 완전히 다른 객체