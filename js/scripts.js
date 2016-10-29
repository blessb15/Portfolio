$(document).ready(function(){

  var y = $(window).scrollTop();

  $('.move-down').click(function() {
    $(window).scrollTop($(window).height());
    console.log("yo1");
  });

  $(window).scroll(function(){
    if ($(window).scrollTop() >= 100){
      $('.navigation').addClass('nav-fade');
      $('.logo').addClass('logo-shrink');
      $('.burger-icon').addClass('burger-shrink');
      $('.minimize-icon').addClass('minimize-shrink');
      $('.nav-window').addClass('nav-window-fade');
    }
    if ($(window).scrollTop() < 100){
      $('.navigation').removeClass('nav-fade');
      $('.logo').removeClass('logo-shrink');
      $('.burger-icon').removeClass('burger-shrink');
      $('.minimize-icon').removeClass('minimize-shrink');
      $('.nav-window').removeClass('nav-window-fade');
    }
  });

  $('.nav-toggle-burger').click(function() {
    console.log("hit");
    $('.nav-toggle-burger').addClass('nav-hidden');
    $('.nav-toggle-minimize').removeClass('nav-hidden');
    $('.nav-fixed').removeClass('nav-hidden');
    $('.nav-window').show();
  });

  $('.nav-toggle-minimize').click(function() {
    console.log("hit2");
    $('.nav-toggle-minimize').addClass('nav-hidden');
    $('.nav-fixed').addClass('nav-hidden');
    $('.nav-toggle-burger').removeClass('nav-hidden');
    $('.nav-window').hide();
  });

  var timeLoop = setTimeout(projectPicLoop, 5000);

  var expressItImages = ['img/exp2.png', 'img/exp3.png', 'img/expressitpic.png'];
  var thinkDifferetImages = ['img/TD2.png', 'img/TD3.png', 'img/thinkdifferent.png'];

  var int = 0;

  function projectPicLoop(){
    $('.expressit').css('background-image', 'url(' + expressItImages[int] + ')');
    $('.thinkdifferent').css('background-image', 'url(' + thinkDifferetImages[int] + ')');

    int ++;

    if (int > 2){
      int = 0;
    }

    setTimeout(projectPicLoop, 5000);
  }

});
