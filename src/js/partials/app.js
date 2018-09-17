//Some JS
$(document).ready(function () {
   var tabLinks = $('.js_tab-link');
   var menuList = $('.js_menu-list');
   tabLinks.click(function (e) {
      e.preventDefault();
      var $this = $(this);
      var menuTab = $this.parents('.menu__tabs');
      var menuItems = menuTab.find('.list');
      var parent = $this.parents('.list');
      menuItems.removeClass('list--active');
      parent.addClass('list--active');

      var target = $this.attr('href');
      var targetTab = $(target);

      menuList.removeClass('menu__list--active');
      targetTab.addClass('menu__list--active');


   });
});