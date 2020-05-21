 $(function(){
  
  
$('.img-area').hiSlide();
$('.multiple-items').slick({
    
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    // variableWidth: true,
    nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
    prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
    

  });

  $('.single-item, .screenshots__slider-team').slick({
    fade:true,
    infinite: true,
    infinite: false,
    nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
    prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
  });


    $('.menu__burger').on('click', function(){
    $('.menu ul').slideToggle();
       });
 });

 $(function(){
  $('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    
    $('html, body').animate({scrollTop: dn}, 1000);
    
    /*
    * 1000 скорость перехода в миллисекундах
    */
  });
});

