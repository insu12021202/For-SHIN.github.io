let audio1 = new Audio("musics/1.mp3");
let audio2 = new Audio("musics/2.mp3");
let audio3 = new Audio("musics/3.mp3");
let audio4 = new Audio("musics/4.mp3");
let audio5 = new Audio("musics/5.mp3");
let audio6 = new Audio("musics/6.mp3");

$('.playBtn1').on('click', function(){
  audio1.play();
});
$('.playBtn2').on('click', function(){
  audio2.play();
});
$('.playBtn3').on('click', function(){
  audio3.play();
});
$('.playBtn4').on('click', function(){
  audio4.play();
});
$('.playBtn5').on('click', function(){
  audio5.play();
});
$('.playBtn6').on('click', function(){
  audio6.play();
});

$('.stopBtn1').on('click', function(){
  audio1.pause();
  audio1.currentTime = 0;
})
$('.stopBtn2').on('click', function(){
  audio2.pause();
  audio2.currentTime = 0;
})
$('.stopBtn3').on('click', function(){
  audio3.pause();
  audio3.currentTime = 0;
})
$('.stopBtn4').on('click', function(){
  audio4.pause();
  audio4.currentTime = 0;
})
$('.stopBtn5').on('click', function(){
  audio5.pause();
  audio5.currentTime = 0;
})
$('.stopBtn6').on('click', function(){
  audio6.pause();
  audio6.currentTime = 0;
})

function ScrollTo () {
    $('.about-btn').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});
}