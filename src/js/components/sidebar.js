export default function sidebar() {
  $('.js-btn-menu, .js-sidebar_close').click(function() {
    $('.js-sidebar').toggleClass('is-active');
  });
}
