const userList = [{
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울',
    hobbys: ['수영', '축구', '테니스']
  },
  {
    account: 'banana',
    userName: '빠나나',
    job: '과일',
    address: '서울',
    hobbys: ['푸드파이팅', '테니스']
  },
  {
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbys: ['족구', '축구', '테니스', '영화감상']
  },
  {
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobbys: ['독서', '테니스']
  },
];

//회원목록에서 회원정보를 출력하는 함수
function alertUserInfo(wannaSay) {
  for (let user of userList) {
    wannaSay(user);
  }
}

alertUserInfo(function (u) {
  console.log(`나는 ${u.userName}님이시다`);
});
console.log('==========================================');
//배열 고차함수
//forEach() : 배열의 요소를 반복하면서 하나씩 꺼내줌
userList.forEach((user) => {
  console.log(user.address);
});


const numbers = [10, 20, 30, 40];

let total = 0;
numbers.forEach((n) => {
  total += n;
});
console.log(total);

console.log('=================================================');

//취미가 딱 2개인 회원들만 필터링해서 새로운 배열에 담아주세요

//특정 필터조건에 의해 필터링하는 함수

function filter(condition) {

  //새로운 배열 생성
  const fillteredArray = [];
  for (const user of userList) {
    if (condition(user)) {
      fillteredArray.push(user);
    }
  }
  return fillteredArray;
}

function filterUserLivedInSeoul() {

  //새로운 배열 생성
  const fillteredArray = [];
  for (const user of userList) {
    if (user.address === '경기') {
      fillteredArray.push(user);
    }
  }
  return fillteredArray;
}

// const newArray=filtered2Hobby();

// console.log(newArray);
const newArray = filter(u => u.hobbys.length === 3);
console.log(newArray);


//배열 고차함수 filter()
// 특정 조건에 의해 필터링된 배열을 반환
console.log('====================');

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = numberArray.filter(n => n % 2 === 0);

console.log(newArr);

const user1 = userList.filter(user => user.account === 'abc1234');
console.log(user1);


// 배열 고차함수 map()
//특정 배열에서 특정 조건에 맞는 값들만 따로 모아서
//매핑한 배열을 반환 조건에맞게 변환 

const doubles = numbers.map(n => n ** 2);
console.log(doubles);

const plusTwo = numberArray.map(n => n + 2);
console.log(plusTwo);

const userNames = userList.map(user => user.userName);
console.log(userNames);

//UserList에서 원하는 프로퍼티 값을 매핑하는 함수
function myMap(callback) {
  mapArr = [];
  for (const user of userList) {
    if (callback(user)) {
      mapArr.push(user);
    }
  }
  return mapArr;
}

console.log('===================================');
const userName2 = myMap(user => user.address === '서울');

console.log(userName2);

console.log('===================================');

const appleBasket = [{
    color: 'green',
    sweet: 13
  },
  {
    color: 'red',
    sweet: 7
  },
  {
    color: 'green',
    sweet: 11
  },
  {
    color: 'green',
    sweet: 10
  },
  {
    color: 'green',
    sweet: 9
  },
  {
    color: 'green',
    sweet: 13
  },
  {
    color: 'green',
    sweet: 12
  },
  {
    color: 'red',
    sweet: 8
  },
  {
    color: 'red',
    sweet: 7
  },
  {
    color: 'red',
    sweet: 6
  },
];

//사과중 녹색이면서 당도가 9이상인 사과만 선별하여
//이 사과는 xxx색이며 당도가 xxx입니다. 라는 문자열이 모여있는 배열을 리턴하세요

const filteredApples =
  appleBasket
  .filter(apple => apple.color === 'green' && apple.sweet >= 9);

const mappedApples =
  filteredApples
  .map(apple => `이 사과는 ${apple.color}색이면서 당도는 ${apple.sweet}입니다.`);

console.log(mappedApples);

//userList에서 서울사는 user들의
//첫번째 취미만 배열에 모아서 리턴

const fillteredHobbys = userList.filter(user => user.address === '서울').map(user => user.hobbys[0]).forEach(hobby => {
  console.log(`회원의 첫번째 취미는${hobby}입니다.`);
})

console.log(fillteredHobbys);

const filteredApples2 = appleBasket.filter(apple => apple.sweet <= 7).map(apple => apple.sweet);

console.log(filteredApples2);