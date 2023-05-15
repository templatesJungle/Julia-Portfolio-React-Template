
(function($) {

  "use strict";


  $(document).ready(function(){

    // Params
    let mainSliderSelector = '.main-slider',
        interleaveOffset = 0.5;

    // Main Slider
    let mainSliderOptions = {
          loop: true,
          speed:1000,
          autoplay:{
            delay:3000
          },
          loopAdditionalSlides: 10,
          grabCursor: true,
          watchSlidesProgress: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          on: {
            init: function(){
              this.autoplay.stop();
            },
            imagesReady: function(){
              this.el.classList.remove('loading');
              this.autoplay.start();
            },
            slideChangeTransitionEnd: function(){
              let swiper = this,
                  captions = swiper.el.querySelectorAll('.sub-title');
              for (let i = 0; i < captions.length; ++i) {
                captions[i].classList.remove('show');
              }
              swiper.slides[swiper.activeIndex].querySelector('.sub-title').classList.add('show');
            },
            progress: function(){
              // console.log('ok');
              let swiper = this;
              for (let i = 0; i < swiper.slides.length; i++) {
                let slideProgress = swiper.slides[i].progress,
                    innerOffset = swiper.width * interleaveOffset,
                    innerTranslate = slideProgress * innerOffset;
               
                swiper.slides[i].querySelector(".slide-image").style.transform =
                  "translateX(" + innerTranslate + "px)";
              }
            },
            touchStart: function() {
              let swiper = this;
              for (let i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
              }
            },
            setTransition: function(speed) {
              let swiper = this;
              for (let i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = speed + "ms";
                swiper.slides[i].querySelector(".slide-image").style.transition =
                  speed + "ms";
              }
            }
          }
        };
    let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);


   });
  // $(document).ready

})(jQuery);
