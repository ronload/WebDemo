(function($) {
	var	$window = $(window),
		$body = $('body');
	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});
	// Touch mode.
		if (browser.mobile)
			$body.addClass('is-touch');
	// Nav.
		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});
	// Parallax.
	// Disabled on IE (choppy scrolling) and mobile platforms (poor performance).
		if (browser.name == 'ie'||	browser.mobile) {
			$.fn._parallax = function() {

				return $(this);

			};
		}else {
			$.fn._parallax = function() {
				$(this).each(function() {
					var $this = $(this), on, off;

					on = function() {
						$this
							.css('background-position', 'center 0px');
						$window
							.on('scroll._parallax', function() {
								var pos = parseInt($window.scrollTop()) - parseInt($this.position().top);
								$this.css('background-position', 'center ' + (pos * -0.15) + 'px');
							});
					};

					off = function() {

						$this
							.css('background-position', '');

						$window
							.off('scroll._parallax');

					};
					breakpoints.on('<=medium', off);
					breakpoints.on('>medium', on);
				});
				return $(this);
			};
		}
})(jQuery);