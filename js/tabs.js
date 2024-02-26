(function($) {
$(function() {

	$('ul.tabs').delegate('li:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('div.box').find('div.tabs_content').eq($(this).index()).fadeIn(150).siblings('div.tabs_content').hide();
	})

})
})(jQuery)