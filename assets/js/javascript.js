/* -------------- Javascript for my website -------------- */

/* Set the header to match the height of the window */
function configureHeader()
{
	visibleWindowHeight = window.innerHeight - 50;
	$('#home')        .css('height', visibleWindowHeight + 'px');
	$('#header-image').css('height', visibleWindowHeight + 'px');
	$('#header')      .css('padding-top', visibleWindowHeight / 5);
}
window.onresize = configureHeader;

$(document).ready(function() {
	$('#home').removeClass('no-js');
	$('#home').css('padding-top', '0px');
	configureHeader();
})

/* jQuery hack to display the header image when the user is at the top, and hide it when they're at the bottom */
/* (so they can see the contact image).  For more info, see https://github.com/arnaudbreton/background-fixed-chrome-rendering-issue */
$(document).scroll(function() {
	if($(this).scrollTop() > window.innerHeight) {
		$('#header-image').hide();
	}

	if($(this).scrollTop() < window.innerHeight) {
		$('#header-image').show();
	}
})

/* Smooth scrolling between sections */
/* Thanks to one Devin Sturgeon (https://css-tricks.com/snippets/jquery/smooth-scrolling/) */
$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 50			// - 50 is for the 50px high sticky navbar
				}, 700);
			return false;
		}
	}
});

/* Enlarge the contact icons when they are hovered over */
$('.contact-icon').hover(function() {
	$(this).addClass('enlarge');
}, function() {
	$(this).removeClass('enlarge');
});


