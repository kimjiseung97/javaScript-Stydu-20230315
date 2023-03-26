
//게임 데이터
const gameDate = {
    secret : makeRandomNubmer(100), //실제 정답
    answer : null,  // 사용자 선택 값
    min : 1, //범위 최소값
    max : 100 //최대 범위값
};

//정답 검증 함수
function checkNumber($target){

    const{secret ,answer} = gameDate;
    
    if(secret===answer){ 
        //정답인 경우
        // console.log('정답');
        corretAnswer($target);
    }else if(secret>answer){ 
        //up인경우
        // console.log('up');
        caseUp($target);
    }else{ 
        //dowun인경우
        // console.log('down!');
        caseDown($target);
    }
};

//랜덤 정수를 범위에 맞게 생성하는 함수
function makeRandomNubmer(range){
    return Math.floor(Math.random()*range) + 1;
}

//정답을 맞췄을때 실행되는 함수
function corretAnswer($correctIcon){
    //1. finish아이디 박스에 class 'show 부여
    document.querySelector('#finish').classList.add('show');
    //2. #numberse 클릭 이벤트해제
    document.getElementById('numbers').onclick = null;
    //3 클릭한 아이콘에 id = 'move'부여
    $correctIcon.setAttribute('id','move');
}

function caseUp($icon){
    //1. #bigin값이 클릭값 +1로 변경
    document.querySelector('#begin').textContent = +$icon.dataset.iconNumber + 1;
    //up아이콘에 애니메이션 효과 부여
    document.querySelector('#up').classList.add('selected');
    document.querySelector('#down').classList.remove('selected');
    // 클릭값보다 낮은 숫자(자기자신아이콘포함)를 가진 구슬아이콘을 전부 삭제
    const $numbers = document.getElementById('numbers');
    // $numbers.removeChild($target);
    // $numbers.removeChild($target.previousElementsSibling);

    //iterater 디자인 패턴
    let $delTarget = $icon;
    while($delTarget!==null){
        const $nextTarget = $delTarget.previousElementSibling;
        $numbers.removeChild($delTarget);
        $delTarget =$nextTarget;
    }

}

function caseDown($icon){
     //1. #bigin값이 클릭값 +1로 변경
     document.querySelector('#end').textContent = +$icon.dataset.iconNumber-1;
     //up아이콘에 애니메이션 효과 부여
     document.querySelector('#up').classList.remove('selected');
     document.querySelector('#down').classList.add('selected');
     // 클릭값보다 넢은 숫자(자기자신아이콘포함)를 가진 구슬아이콘을 전부 삭제
     const $numbers = document.getElementById('numbers');
    //  $numbers.removeChild($icon);
    //  $numbers.removeChild($icon.previousElementSibling);

     //iterater 디자인 패턴
     let $delTarget = $icon;
     while($delTarget!==null){
         const $nextTarget = $delTarget.nextElementSibling;
         $numbers.removeChild($delTarget);
         $delTarget =$nextTarget;
     }

}


//정의부
function gameStart(iconCount){
    //구슬 iconCount개 만들어야 한다.
    
    const $numbers = document.getElementById('numbers');

    const makeIcon = (iconCount) =>{
        //<div class = 'icon'>n</div>
        const $icon =document.createElement('div'); 
        $icon.classList.add('icon');
        $icon.textContent = 1;

        for(let i =1; i<=iconCount; i++){
            const $icon =document.createElement('div'); 
            $icon.classList.add('icon');
            $icon.textContent = i;
            $icon.dataset.iconNumber = i;
            $numbers.appendChild($icon);
        }
    };
    makeIcon(100);

    //클릭이벤트 부여하기
    $numbers.onclick =e =>{
        if(!e.target.matches('#numbers .icon')) return;
        console.log(`${e.target.dataset.iconNumber} 번 구슬 클릭함`);
        
        //사용자가 클릭한 아이콘의 숫자를 answer에 저장
        gameDate.answer = +e.target.dataset.iconNumber;
        console.log(gameDate);
        //정답 검증
        checkNumber(e.target);
    };


}







//===================================================//
//실행부

(function(){

    gameStart(100);

})();