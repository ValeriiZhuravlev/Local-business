  
const sliderScreen = function() {
  let slide = $('.carousel__slide');
  let indexSlide = 0;
  let slideCenter;
  let slideNextNear;
  let slideNextMiddle;
  let slideNextFar;
  let slidePrevNear;
  let slidePrevMiddle;
  let slidePrevFar;
  let flag = true;

  let firstSlide = $('.carousel__slide:first');
  let lastSlide = $('.carousel__slide:last');

  function validButton() {
    if(firstSlide.hasClass('carousel__slide_center')) {
      $('#prev').attr('disabled', true);
    }else {
      $('#prev').attr('disabled', false);
    }

    if(lastSlide.hasClass('carousel__slide_center')) {
      $('#next').attr('disabled', true);
    }else {
      $('#next').attr('disabled', false);
    }
  }

  validButton();
  

  function cheangeSlide(n) {
    if(flag) {
      flag = false;
      slide.each((i, item) => {
        if(slide.eq(i).hasClass('carousel__slide_center')) {
          indexSlide = i + n;
        }
        $(item).removeClass('carousel__slide_center')
             .removeClass('carousel__slide_next-near')
             .removeClass('carousel__slide_next-middle')
             .removeClass('carousel__slide_next-far')
             .removeClass('carousel__slide_prev-near')
             .removeClass('carousel__slide_prev-middle')
             .removeClass('carousel__slide_prev-far');
      });

      if(indexSlide >= slide.length) {
        indexSlide = 0;
      }else if(indexSlide < 0) {
        indexSlide = slide.length - 1;
      }
      slideCenter = slide.eq(indexSlide).addClass('carousel__slide_center');

      slideNextNear = slideCenter.next().hasClass('carousel__slide') ? slideCenter.next('.carousel__slide') : $('.carousel__slide:first'); 
      slideNextMiddle = slideNextNear.next().hasClass('carousel__slide') ? slideNextNear.next('.carousel__slide') : $('.carousel__slide:first');
      slideNextFar = slideNextMiddle.next().hasClass('carousel__slide') ? slideNextMiddle.next('.carousel__slide') : $('.carousel__slide:first');
      slidePrevNear = slideCenter.prev().hasClass('carousel__slide') ? slideCenter.prev('.carousel__slide') : $('.carousel__slide:last');
      slidePrevMiddle = slidePrevNear.prev().hasClass('carousel__slide') ? slidePrevNear.prev('.carousel__slide') : $('.carousel__slide:last');
      slidePrevFar = slidePrevMiddle.prev().hasClass('carousel__slide') ? slidePrevMiddle.prev('.carousel__slide') : $('.carousel__slide:last');

    
      slideNextNear.addClass('carousel__slide_next-near');
      slideNextMiddle.addClass('carousel__slide_next-middle');
      slideNextFar.addClass('carousel__slide_next-far');
      slidePrevNear.addClass('carousel__slide_prev-near');
      slidePrevMiddle.addClass('carousel__slide_prev-middle');
      slidePrevFar.addClass('carousel__slide_prev-far');

      validButton();
    }
  }


  $('.carousel__slide').bind('transitionend', function() {
    flag = true;
  })

  $('#prev').bind('click', function(e){
    cheangeSlide(-1);
  });

  $('#next').bind('click', function(e){
    cheangeSlide(1);
  });
}();

module.exports = sliderScreen;