/* -------------- Javascript for my website -------------- */

/* Set the header to match the height of the window */
function configureHeader()
{
	document.getElementById('home').style.height = window.innerHeight - 50 +'px';
	$('#home').css('padding-top', window.innerHeight / 5 + 'px');
}
window.onresize = configureHeader;

$(document).ready(function() {
	configureHeader();
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


