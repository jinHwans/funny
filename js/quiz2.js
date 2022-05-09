$(window).on('load',function(){
    setDate();
    setInterval(setDate,1000);

    console.log(hour);
    
});

    const hour = $('.hour');
    const minute = $('.min');
    const second = $('.sec');

function setDate(){
    const now = new Date();
    const getSecond = now.getSeconds();
    const getMinute = now.getMinutes();
    const getHour = now.getHours();

    const secondDeg = (getSecond / 60) * 360;
    const minuteDeg = (getMinute / 60) * 360;
    const hourDeg = (getHour / 12) * 360;

    second.css('transform',`rotate(${secondDeg}deg)`);
    minute.css('transform',`rotate(${minuteDeg}deg)`);
    hour.css('transform',`rotate(${hourDeg}deg)`);
    
}

$('.numbers').css('transform',`rotate(${})`)
$(document).keydown(function(event) {
    if (event.keyCode == '32') {
      console.log('23232');
    }
});
/* var hour = document.querySelector('.hour');
var minute = document.querySelector('.min');
var second = document.querySelector('.sec');

function setDate() {
    var now = new Date();
    var getSecond = now.getSeconds();
    var getMinute = now.getMinutes();
    var getHour = now.getHours();

    var secondDeg = getSecond / 60 * 360;
    var minuteDeg = getMinute / 60 * 360;
    var hourDeg = getHour / 12 * 360;

    second.style.transform = 'rotate(' + secondDeg + 'deg)';
    minute.style.transform = 'rotate(' + minuteDeg + 'deg)';
    hour.style.transform = 'rotate(' + hourDeg + 'deg)';
} */


