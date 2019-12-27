const sliderReview = function() {
    let reviews = $('.reviews__list');
    let review = $('.review'); 
    let reviewsWidth = parseInt(reviews.css('width')) - parseInt(reviews.css('padding-left'));
    let reviewMargin  = parseInt(review.css('margin-right'));
    let reviewWidth = parseInt(review.css('width'));
    let widthSlider;
    let indexSlide = 0;
    let left = 0;

    function reviewsSlide(n) {
        left += (reviewWidth + reviewMargin)*n;
        reviews.css('left', left);
        changeActive(n);
        buttonDisabled();
    }

    function changeActive(n) {
        review.each((i, item) => {
            if(review.eq(i).hasClass('review_active')) {
                indexSlide = i + -(n);
            }
            $(item).removeClass('review_active');
        });
        review.eq(indexSlide).addClass('review_active');
    }

    function buttonDisabled() {
        widthSlider = $('.reviews__slider').width();
        if(left == 0) {
            $('#prevReview').attr('disabled', true);
        }else {
            $('#prevReview').attr('disabled', false);
        }
        if(left <= (widthSlider - reviewsWidth)) {
            $('#nextReview').attr('disabled', true);
        }else {
            $('#nextReview').attr('disabled', false);
        }
        
    }

    buttonDisabled();

    $(window).resize(() => {
        if($('.review:last').hasClass('review_active')) {
            reviews.css('left', '0px');
            reviewsSlide(1);
        }
        buttonDisabled();
    });


    $('#nextReview').bind('click', function(e) {
        reviewsSlide(-1);
    });

    $('#prevReview').bind('click', function(e) {
        reviewsSlide(1);
    });
}();

