const bonusNum = document.querySelector('.bonus');
const num01 = document.querySelector('.num01');
const num02 = document.querySelector('.num02');
const num03 = document.querySelector('.num03');
const num04 = document.querySelector('.num04');
const num05 = document.querySelector('.num05');
const num06 = document.querySelector('.num06');
const lottoNum = [num01,num02,num03,num04,num05,num06];

//로또번호를 담을 배열선언 - 값이 추가로 변함
let lotto = [];

//번호를 7개 랜덤 생성
for(let i=0;i<7;i++){
    let num = Math.floor(Math.random() * 44) + 1;

    //같은 번호는 다시 나오게 처리
    for(var j in lotto){
        while(num == lotto[j]){
            num = Math.floor(Math.random() * 44) + 1; //번호를 재할당
        }
    }

    lotto.push(num);
}

//보너스 번호 빼기
let bonus = lotto.pop(); //마지막 값 빼고 처리
bonusNum.textContent = bonus;


//로또번호 오름차순정렬
lotto.sort(function(left, right){
    return left - right;
});


//번호에 따른 색상변경
var bgColor = ['#fbc400', '#69c8f2', '#ff7272', '#aaa', '#b0d840'];


//보너스 번호 색상 변경
if(bonus >= 1 && bonus <= 10){
    bonusNum.style.backgroundColor = bgColor[0];
}else if(bonus >= 11 && bonus <= 20){
    bonusNum.style.backgroundColor = bgColor[1];
}else if(bonus >= 21 && bonus <= 30){
    bonusNum.style.backgroundColor = bgColor[2];
}else if(bonus >= 31 && bonus <= 40){
    bonusNum.style.backgroundColor = bgColor[3];
}else if(bonus >= 41 && bonus <= 50){
    bonusNum.style.backgroundColor = bgColor[4];
}


//로또번호 처리 - for in
for(let i in lottoNum){
    lottoNum[i].textContent = lotto[i];

    if(lotto[i] >= 1 && lotto[i] <= 10){
        lottoNum[i].style.backgroundColor = bgColor[0];
    }else if(lotto[i] >= 11 && lotto[i] <= 20){
        lottoNum[i].style.backgroundColor = bgColor[1];
    }else if(lotto[i] >= 21 && lotto[i] <= 30){
        lottoNum[i].style.backgroundColor = bgColor[2];
    }else if(lotto[i] >= 31 && lotto[i] <= 40){
        lottoNum[i].style.backgroundColor = bgColor[3];
    }else if(lotto[i] >= 41 && lotto[i] <= 50){
        lottoNum[i].style.backgroundColor = bgColor[4];
    }
}


