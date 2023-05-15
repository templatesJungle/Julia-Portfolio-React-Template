(function($) {

  "use strict";

  // ------------------------------------------------------------------------------ //
  // Overlay Menu Navigation
  // ------------------------------------------------------------------------------ //
  var overlayMenu = function () {

    if(!$('.nav-overlay').length) {
      return false;
    }

    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;
    var init = function init() {
      body = document.querySelector('body');
      menu = document.querySelector('.menu-btn');
      menuItems = document.querySelectorAll('.nav__list-item');
      applyListeners();
    };
    var applyListeners = function applyListeners() {
      menu.addEventListener('click', function () {
        return toggleClass(body, 'nav-active');
      });
    };
    var toggleClass = function toggleClass(element, stringClass) {
      if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
    };
    init();
  }

 
  // Portfolio Slider
  var swiper = new Swiper(".portfolio-Swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: "",
      clickable: true,
    },
  });


  // Thumb Slider
$(document).ready(function(){

  overlayMenu();

   var swiper = new Swiper(".thumb-swiper", {
      loop: false,
      slidesPerView: 1,
      freeMode: false,
      watchSlidesProgress: true,
      touchRatio: 0,
    });

    var swiper2 = new Swiper(".large-swiper", {
      loop: true,
      effect: 'fade',
      speed: 400,
      thumbs: {
        swiper: swiper,
      },
    });

  });


// window load
  $(window).load(function() {
    $(".preloader").fadeOut("slow");
  })


})(jQuery);