function funonload() {
  var menu = document.getElementsByClassName('site-list__wrapper');

  $('.main-navigation__toggle-open').click(
    function () {
      $(menu).addClass('site-list__wrapper--open');
      $('.main-navigation__toggle-close').removeClass('main-navigation__toggle-close--none');
    }
  );

  $('.main-navigation__toggle-close').click(
    function () {
      $(menu).removeClass('site-list__wrapper--open');
      $('.main-navigation__toggle-close').addClass('main-navigation__toggle-close--none');
    }
  );

}
window.onload = funonload;
