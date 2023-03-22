// const userList = [{
//         account: 'abc1234',
//         userName: '대길이',
//         job: '추노',
//         address: '서울',
//         hobbys: ['수영', '축구', '테니스']
//     },
//     {
//         account: 'banana',
//         userName: '빠나나',
//         job: '과일',
//         address: '서울',
//         hobbys: ['푸드파이팅', '테니스']
//     },
//     {
//         account: 'park1234',
//         userName: '주차왕',
//         job: '발렛파킹',
//         address: '경기',
//         hobbys: ['족구', '축구', '테니스', '영화감상']
//     },
//     {
//         account: 'fire',
//         userName: '불꽃남자카리스마',
//         job: '게이머',
//         address: '서울',
//         hobbys: ['독서', '테니스']
//     },
// ];


//회원목록에서 회원정보를 출력하는 함수
// function alertUserInfo(wannaSay) {
//     for (let user of userList) {
//       wannaSay(user);
//     }
// }
// alertUserInfo(function useraddress(u){
//     console.log(u.address);
// });

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

newArray = filter(user => user.hobbys.length >= 3);

newAddress = filter(function (user) {
    if (user.address === '경기') {
        return true;
    }
});

console.log(newArray);
console.log(newAddress);

function mood(collback) {
    collback('good');
}

mood(happy);

function happy(m) {
    if (m === 'good') {
        console.log('행복해요');
    } else {
        console.log('슬퍼요');
    }
}