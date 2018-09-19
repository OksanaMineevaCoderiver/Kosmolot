export default function popup() {
  $('.js-btn-enter, .js-close-popup').click(function() {
    $('.layout__popup').toggleClass('is-active');
  });
}
