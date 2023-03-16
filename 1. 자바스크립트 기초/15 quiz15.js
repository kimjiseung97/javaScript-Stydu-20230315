alert('1~50사이의 무작위 숫자를 맞춰보세요');

var reandomNumber = Math.floor((Math.random()*50)+1);

// console.log(reandomNumber);


var levelGrade = +prompt('난이도를 설정하세요\n 1. 상 : (기회 3번)  /  2. 중 : (기회 : 6번)  /  3. 하 : (기회 10번)');

if(levelGrade === 1){
    var life = 3;
    alert(`1~50사이의 무작위 숫자를 ${life}번 안에 맞춰보세요`);
    while(life>0){
        var anwser = +prompt('');
        if(anwser===reandomNumber){
            alert('정답입니다!');
        }else if(anwser < reandomNumber){
            life--;
            alert(`UP!! 기회가  ${life}번 남았습니다.`)
        }else{
            life--;
            alert(`DOWN!! 기회가  ${life}번 남았습니다.`)
        }

    }
    alert('기회를 모두 소진했습니다 게임오버!')
}else if(levelGrade === 2){
    var life = 6;
    alert(`1~50사이의 무작위 숫자를 ${life}번 안에 맞춰보세요`);
    while(life>0){
        var anwser = +prompt('');
        if(anwser===reandomNumber){
            alert('정답입니다!');
        }else if(anwser < reandomNumber){
            life--;
            alert(`UP!! 기회가  ${life}번 남았습니다.`)
        }else{
            life--;
            alert(`DOWN!! 기회가  ${life}번 남았습니다.`)
        }
    }
    alert('기회를 모두 소진했습니다 게임오버!')
}else if(levelGrade === 3){
    var life = 10;
    alert(`1~50사이의 무작위 숫자를 ${life}번 안에 맞춰보세요`);
    while(life>0){
        var anwser = +prompt('');
        if(anwser===reandomNumber){
            alert('정답입니다!');
        }else if(anwser < reandomNumber){
            life--;
            alert(`UP!! 기회가  ${life}번 남았습니다.`)
        }else{
            life--;
            alert(`DOWN!! 기회가  ${life}번 남았습니다.`)
        }
    }
    alert('기회를 모두 소진했습니다 게임오버!')
}else{
    alert('1 2 3 숫자중 하나를 선택해 주세요!')
}
