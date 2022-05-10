let time = 30;
let currentWord;
let currentWord_img;
let interID;
let wordIdx;
let score = 0;
// let reward = 5;


$(function(){
    init();
    $(".game__input").keydown(function(event){  /* 엔터키 클릭 시 */
        if (event.keyCode == '13') {
            compareWord();
            // $(".game__input").val('');
            console.log(score);
        }
        
    })
})


function terminateGame(){/* 게임끝 */
    clearInterval(interID);
    $(".game__input").attr("disabled", "true");
    if(score >= 20){
        $(".game__terminated span").text('롤박사');    
    }else if(score >= 10 ){
        $(".game__terminated span").text('롤선생');
    }else{
        $(".game__terminated span").text('바보');
    }
    /* $(".game__terminated span").text(score); */
    $(".game__terminated").css("visibility", "visible");
}

function decreTime(){   /* 타이머 */
    time--;

    
    $(".game__timer").text(time)

    if(time == 0){
        terminateGame()
    }
}

function refreshWord(){ /* 랜덤 값 - 사진,정답*/
    wordIdx = parseInt(Math.random() * words.length);
    
    console.log(wordIdx);
    currentWord = words[wordIdx];
    currentWord_img = words_img[wordIdx];
    $(".game__img").css({'background':"url(img/"+words_img[wordIdx]+".png)"});
}

function compareWord(){ /* 게임 메인 */
    const typedWord = $(".game__input").val();

    if(currentWord == typedWord){
        score++;
        $(".game__input").val("");
        $(".game__score span").text(score);
        refreshWord()
    }
}

function init(){   /* 초기화 */
    $(".game__terminated").css("visibility", "hidden");
    interID = setInterval(decreTime, 1000);
    refreshWord()
}


