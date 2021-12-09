//BXSlider JQuery Plugin
$(document).ready(function() {
    $("#slideshow").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        pause: 3000,
    });
});

$(document).ready(function(){
});

//AJAX
window.onload = function() {
	setTimeout(function() {
        var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://webpages.uncc.edu/bshabani/itis3135/project/flavors-of-palestine-home-page.html');
		xhr.send('');
        var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://webpages.uncc.edu/bshabani/itis3135/project/flavors-of-palestine-breakfast-page.html');
		xhr.send('');
        var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://webpages.uncc.edu/bshabani/itis3135/project/flavors-of-palestine-Appetizer-and-salad-page.html');
		xhr.send('');
        var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://webpages.uncc.edu/bshabani/itis3135/project/flavors-of-palestine-dinner-page.html');
		xhr.send('');
        var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://webpages.uncc.edu/bshabani/itis3135/project/flavors-of-palestine-dessert-page.html');
		xhr.send('');
	}, 1000);
};