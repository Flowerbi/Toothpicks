$(function(){

  $('.overlay').on('click', function () {
    $(this).removeClass('overlay--active');
    $('.popup').removeClass('popup--active');
  });

  $('.gallery__content-img').on('click', function () {
    $('.popup').toggleClass('popup--active');
    $('.overlay').toggleClass('overlay--active');
    $('.popup img').attr('src', $(this).attr('src'));
  });

  $('.popup__close-btn').on('click', function () {
    $('.popup').removeClass('popup--active');
    $('.overlay').removeClass('overlay--active');
  });


  $('.burger-btn').on('click', function () {
    $('.header__menu').toggleClass('header__menu--active');
  });
  var $page = $('html, body');
  $('a[href*="#"]').on('click', function() {
      $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
    return false;
  }); 
  $('.faq__item-top').on('click', function () {
    $(this).children('.faq__item-btn').toggleClass('faq__item-btn--active')
    $(this).next('.faq__item-content').toggleClass('faq__item-content--active');
  });
});