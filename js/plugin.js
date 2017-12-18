jQuery(document).ready(function($) {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop(),
        navbar = $('.navbar-inverse');

    if (scrollPos > 20) {
      navbar.addClass('change-color');
    } else {
      navbar.removeClass('change-color');
    }
  });
});

$('body').scrollspy({ target: '#navbar-example' })

// collapse navbar after clicking link
$(".navbar-collapse li a").click(function (event) {
    $(".navbar-collapse").collapse('hide');
});


//type like a typewriter
var text = $('.typewriter').text();

var length = text.length;
var timeOut;
var character = 0;


(function typeWriter() {
    timeOut = setTimeout(function() {
        character++;
        var type = text.substring(0, character)+" _";
        $('.typewriter').text(type);
        typeWriter();

        if (character == length) {
            clearTimeout(timeOut);
        }

    }, 60);
}());
