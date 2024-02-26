	$(function(){
		var slide = false;
		var height = $('#footer_content').height();
		$('#footer_button').click(function() {
			var docHeight = $(document).height();
			var windowHeight = $(window).height();
			var scrollPos = docHeight - windowHeight + height;
			$('#footer_content').animate({ height: "toggle"}, 300);
			if(slide == false) {
				if($.browser.opera) {
					$('html').animate({scrollTop: scrollPos+'px'}, 300);
				} else {
					$('html, body').animate({scrollTop: scrollPos+'px'}, 300);
				}
				slide = true; $(this).css("background-position","right");
			} else {
				slide = false; $(this).css("background-position","left");
			}
		});
	});
	
$(function()
{	$('.scroll-pane').jScrollPane({
	showArrows: false,
	arrowScrollOnHover: false,			
	verticalDragMinHeight: 200,
	verticalDragMaxHeight: 400
	});  
$('.but_close').click(function(){
	if( $(this).parent().not(':hidden') ) { 
		$(this).parent().slideUp();
	}
	return false;
});
});

$(function(){
$('.news_text').hide();
$('.news_trigger:first').addClass('active').next().show(); 
$('.news_trigger').click(function(){

	if( $(this).next().is(':hidden') ) { 
		$('.news_trigger').removeClass('active').next().slideUp(); 
		$(this).toggleClass('active').next().slideDown(); 
    }
	return false;
});

});

$(function() {
    $('.button').each(function(){
        $(this).after(unescape('%3Cspan class="button"%3Eaa%3C/span%3E'));
        $(this).hide();
        $(this).next('span.button').text($(this).val()).click(function(){
            $(this).prev('input.button').click();
        });
    });
    Cufon.replace('.button'); 
});

$(function() {
    jQuery('#mycarousel1').jcarousel({
        auto: 5,
        scroll: 1,
		vertical: true,
        wrap: 'circular'
    });
});
