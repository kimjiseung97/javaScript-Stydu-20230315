/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
2. 사용자에게 삭제할 멤버 이름을 입력받고 해당 멤버를 배열에서 삭제시킨 뒤 삭제 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 다시 삭제할 이름을 입력할 수 있도록 하세요.
4. 전체멤버를 정확하게 삭제할때까지 프로그램은 계속되어야 합니다.
*/

var jyj = ['유노윤호','최강창민','영웅재중','믹키유천','시아준수'];

// while(true){
//     var deleteMember = prompt(`현재멤버 : [${jyj}]\n삭제할 이름을 입력하세요`);

//     if(jyj.includes(deleteMember)){
//         jyj.splice(jyj.indexOf(deleteMember),1);
//     }else{
//         alert(`${deleteMember}는 잘못된 이름입니다.`);
//     }

//     if(jyj.length===0){
//         alert('배열이 비었으므로 종료합니다.');
//         break;
//     }
// }

while(true){
    //수정할 멤버 입력받기
    var modifyMember = prompt(`현재멤버 : [${jyj}]\n수정할 이름을 입력하세요`);
    //배열에 수정할멤버의 이름이 있다면 true값 반환 if문 실행
    if(jyj.includes(modifyMember)){
                //수정할 이름 입력받기
                var newMember = prompt('수정할 이름을 입력하세요');
                //수정할 멤버이름 자리에 수정할이름으로 대체
                jyj.splice(jyj.indexOf(modifyMember),1,newMember);
                //수정완료된 배열 출력
                alert(`수정완료 : [${jyj}]`)
            }else{
                alert(`${modifyMember}는 잘못된 이름입니다.다시 입력하세요`);
            }
}