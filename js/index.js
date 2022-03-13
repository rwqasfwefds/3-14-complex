$(function(){
    $('.outer-menu-item').hover(function () {
        $(this).find('.inner-menu').show();
    }, function () {
        $(this).find('.inner-menu').hide();
    });

    // 테이블 색상 변경
    $('.lightgreen').css('background-color', 'lightgreen')
    $('.lightgray').css('background-color', 'lightgray')
    $('.lightblue').css('background-color', 'lightblue')
});

window.onload = function() {
    // 현재 시간
    setInterval(displayNow, 1000);

    function displayNow() {
        let now = new Date();
        let currentTime = now.toLocaleTimeString();
        document.querySelector('#current').innerHTML = currentTime;
    }

    // 이미지 크게
    let pics = document.getElementsByClassName('pic');
    let bigImg = document.getElementById('bigImg');
    let bigger = document.getElementById('bigger');
    
    for(let i = 0; i < pics.length; i++){
        pics[i].addEventListener('click',showLightBox);
    }
    
    function showLightBox(){
        let big = this.getAttribute('data-src');
        bigger.setAttribute('src', big);
        bigImg.style.display = 'block';
    }
    bigImg.onclick = function(){
        bigImg.style.display = 'none';
    }

}