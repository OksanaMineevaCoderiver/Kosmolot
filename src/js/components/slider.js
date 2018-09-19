import 'slick-carousel';
export default function slide() {
  $('.slider-slick').slick({
  	dots: true,
  	nextArrow: $('.slider__btn_next'),
    prevArrow: $('.slider__btn_prev'),
  });
}
