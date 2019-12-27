const player = function() {
    let video = document.querySelector('#video');

    $('#play').on('click', () => {
            video.play();
            video.style.filter = 'none';
            $('#play').hide();
    })

    $('#video').on('click', () => {
            video.pause();
            $('#play').show();
    })
}();