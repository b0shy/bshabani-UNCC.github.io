$(document).ready(function(){
    $('.forward').on('click', function(){
        var currentImage = $('.first');
        var nextImage = currentImage.next();

        if(nextImage.length){
            currentImage.removeClass('first').css('z-index', -10);
            nextImage.addClass('first').css('z-index', 10);
        }
    });

    $('.back').on('click', function(){
        var currentImage = $('.first');
        var previousImage = currentImage.prev();

        if(previousImage.length){
            currentImage.removeClass('first').css('z-index', -10);
            previousImage.addClass('first').css('z-index', 10);
        }
    });
});