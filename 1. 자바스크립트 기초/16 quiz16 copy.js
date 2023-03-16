

alert('즐거운 사칙연산 게임 ~ \n 즐겁게 문제를 푸시다가 지겨우면 0을 누르세요 \n [난이도 선택 1. 상 : (1 -100) /  2. 중 : (1-50) / 3. 하 : (1-20)');
var selectNumber = +prompt('난이도를 선택하세요 !');
loop:
while(true){
    if(selectNumber === 1){
        loop2:
        while(true){
            var randomNubber1 = Math.floor((Math.random() * 100)+1);
            var randomNubber2 = Math.floor((Math.random() * 100)+1);
            if(randomNubber1 > randomNubber2){
                var fact = randomNubber1 - randomNubber2;
                anwser =+prompt(`${randomNubber1+ `-` +randomNubber2}=`);
                if(anwser===fact){
                    alert('정답입니다!');
                }else if(anwser!==fact){
                    alert('땡 틀렷습니다.')
                }else if(anwser===0){
                    alert("종료합니다")
                    break loop;
                }
            }else if(randomNubber1 === randomNubber2){
                var fact = randomNubber1 * randomNubber2;
                anwser =+prompt(`${randomNubber1 + `*` + randomNubber2}=`);
                if(anwser===fact){
                    alert('정답입니다!');
                }else if(anwser!==fact){
                    alert('땡 틀렷습니다.');
                }else if(anwser===0){
                    alert("종료합니다");
                    break loop;
                }
            }else{
                var fact = randomNubber1 + randomNubber2;
                anwser =+prompt(`${randomNubber1 + `+` + randomNubber2}=`);
                if(anwser===fact){
                    alert('정답입니다!');
                }else if(anwser!==fact){
                    alert('땡 틀렷습니다.')
                }else if(anwser===0){
                    alert("종료합니다");
                }
            }break loop;
        }
        break loop;
    }else if(selectNumber === 2){
        loop2:
        while(true){
            var randomNubber1 = Math.floor((Math.random() * 50)+1);
            var randomNubber2 = Math.floor((Math.random() * 50)+1);
            if(randomNubber1 > randomNubber2){
                var fact = randomNubber1 - randomNubber2;
                anwser =+prompt(`${randomNubber1+ `-` +randomNubber2}=`);
                if(anwser===fact){
                    alert('정답입니다!');
                }else if(anwser!==fact){
                    alert('땡 틀렷습니다.');
                }else if(anwser===0){
                    alert("종료합니다");
                    break loop;
                }
            }else if(randomNubber1 === randomNubber2){
                var fact = randomNubber1 * randomNubber2;
                anwser =+prompt(`${randomNubber1 + `*` + randomNubber2}=`);
                if(anwser===fact){
                    alert('정답입니다!');
                }else if(anwser!==fact){
                    alert('땡 틀렷습니다.');
                }else if(anwser===0){
                    alert("종료합니다");
                    break loop;
                }
            }else{
                var fact = randomNubber1 + randomNubber2;
                anwser =+prompt(`${randomNubber1 + `+` + randomNubber2}=`);
                if(anwser===fact){
                    alert('정답입니다!');
                }else if(anwser!==fact){
                    alert('땡 틀렷습니다.');
                }else if(anwser===0){
                    alert("종료합니다");
                    break loop;
                }
            }
        }break loop;
    }else if(selectNumber === 3){
        loop2:
        while(true){
            var randomNubber1 = Math.floor((Math.random() * 10)+1);
            var randomNubber2 = Math.floor((Math.random() * 10)+1);
            if(randomNubber1 > randomNubber2){
                var fact = randomNubber1 - randomNubber2;
                anwser =+prompt(`${randomNubber1+ `-` +randomNubber2}=`);
                if(anwser===fact){
                    alert('정답입니다!');
                }else if(anwser!==fact){
                    alert('땡 틀렷습니다.');
                }else if(anwser===0){
                    alert("종료합니다");
                    break loop;
                }
            }else if(randomNubber1 === randomNubber2){
                var fact = randomNubber1 * randomNubber2;
                anwser =+prompt(`${randomNubber1 + `*` + randomNubber2}=`);
                if(anwser===fact){
                    alert('정답입니다!');
                }else if(anwser!==fact){
                    alert('땡 틀렷습니다.')
                }else if(anwser===0){
                    alert("종료합니다")
                    break loop;
                }
            }else{
                var fact = randomNubber1 + randomNubber2;
                anwser =+prompt(`${randomNubber1 + `+` + randomNubber2}=`);
                if(anwser===fact){
                    alert('정답입니다!');
                }else if(anwser!==fact){
                    alert('땡 틀렷습니다.');
                }else if(anwser===0){
                    alert("종료합니다");
                    break loop;
                }
            }
        }
    }else{
        alert('다른 숫자를 입력하세요!');
    }break;
}