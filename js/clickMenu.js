$(function() {
	const className = 'active';

	$('#nav li').click(function() {
		const isActive = $('.active');
		if(!$(this).hasClass(className)) {
			isActive.removeClass(className);
			$(this).addClass(className);
		}
	});
});