/* Jovi Zhan */
/*! 
* Mail:hxyinsan@gmail.com
* Website:justwe.github.com
* Date: July 16 14:00:00 2014 -0000
*/
(function($){

    $(document).ready(function(){

    	"use strict";

    	$('#sidebar').append('<span class="open-close cog" style="background-color:transparent"></span>');

    	var $btnNormal = $('.open-close.lines'),
    		$btnCustomizer = $('.open-close.cog'),
    		$sidebarNormal = $('#theme-sidebar'),
    		$sidebarCustomizer = $('#theme-customizer'),
    		customizerShown = false;

            if("ontouchstart" in window) {
                $btnCustomizer.remove();
            }

    	$('#sidebar').find('.open-close').click(function(){

            if(!customizerShown) {

                customizerShown = true;

                $btnNormal.css('backgroundColor', 'transparent');
                $btnCustomizer.css('backgroundColor', '');

                $sidebarNormal.stop().fadeOut(150);
                $sidebarCustomizer.stop().delay(150).fadeIn(150);

            } else {

                customizerShown = false;

                $btnNormal.css('backgroundColor', '');
                $btnCustomizer.css('backgroundColor', 'transparent');

                $sidebarCustomizer.stop().fadeOut(150);
                $sidebarNormal.stop().delay(150).fadeIn(150);

            }

            return false;

        });

   		// Some functions are inside the main scripts file for technical reasons

   		var $content = $('#content');

    	$('#blog-layout').change(function(){

    		$content.removeClass('left-sidebar')
    			.removeClass('right-sidebar')
    			.removeClass('no-sidebar')
    			.addClass($(this).find('option:selected').val());

    	});

    	$('.form-field.checkbox').each(function(){

    		$(this).append('<span></span>')
    			.click(function(){
    				$(this).find('input').trigger('click');
    			});

    	});

    	function hex2rgb(hex) {
			if (hex[0]=="#") hex=hex.substr(1);
			if (hex.length==3) {
				var temp=hex; hex='';
				temp = /^([a-f0-9])([a-f0-9])([a-f0-9])$/i.exec(temp).slice(1);
				for (var i=0;i<3;i++) hex+=temp[i]+temp[i];
			}
			var triplets = /^([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i.exec(hex).slice(1);
			return {
				red:   parseInt(triplets[0],16),
				green: parseInt(triplets[1],16),
				blue:  parseInt(triplets[2],16)
			}
		}

    	var $selectedColor = $('#customizer-colors').find('li.selected'),
    		$customizerColorsStyle = null,
    		firstColorChange = true;

    	$('#customizer-colors').find('li').each(function(){

    		$(this).append('<span style="background-color:' + $(this).data('one') + '"></span><span style="background-color:' + $(this).data('two') + '"></span>');

    		$(this).click(function(){

    			var rgb = hex2rgb($(this).data('one')),
                    rgb2 = hex2rgb($(this).data('two'));

    			var customColorString = '#sidebar .button, .mCS-me-2 .mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar, .mCS-me-2 .mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar { background-color: ' + $(this).data('two') + '; } a:hover, h1 a:hover, h2 a:hover, h3 a:hover, h4 a:hover, h5 a:hover, h6 a:hover, .post-meta a:hover { color: ' + $(this).data('two') + '; } .post-format-link a:hover, .me-buttons-alt > a, .krown-accordion h5:hover, .krown-tabs .titles li:hover h5, input[type="submit"], .widget a:hover, .krown-button, .krown-tabs.vertical .titles li:hover h5:before, .krown-twitter li a:hover, .krown-twitter .time:hover, .krown-twitter > a:hover span { color: ' + $(this).data('one') + '; } .me-buttons a, .me-buttons-alt > a, .krown-accordion, .krown-accordion h5, .krown-accordion .opened h5, .krown-tabs .titles li.opened, .krown-tabs .contents, input, textarea, input[type="submit"], .krown-button, .krown-box, .krown-testimonial blockquote:before, .krown-testimonial blockquote, pre, .krown-tabs.vertical .titles, .krown-tabs.vertical .titles li { border-color: ' + $(this).data('three') + '; } .post-format-link a:hover, .widget a:hover { border-color: ' + $(this).data('one') + '; } .no-touch .me-buttons a:hover, .no-touch .swiper-nav a:not(.swiper-no):hover, .no-touch .project-horizontal .nav a:hover, .no-touch .me-buttons-alt > a:hover, .mCS-me-2 .mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar, input[type="submit"]:hover, #sidebar .content, .open-close, .folio-cube .bottom, .mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current, .mejs-controls .mejs-time-rail .mejs-time-current, .mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-current, .gallery-meta .me-buttons a:hover, .krown-button:hover, .video-embedded .mejs-overlay-button:hover, .video-embedded .close-iframe:hover { background-color: ' + $(this).data('one') + '; } .swiper-nav a, .project-horizontal .nav a, .mCS-me-2 .mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mejs-overlay:hover .mejs-overlay-button, .fancybox-nav span:hover, .fancybox-close:hover, .gallery-meta .me-buttons a, .gallery-caption, .video-embedded .close-iframe { background-color: ' + $(this).data('one') + '; background-color: rgba(' + rgb.red + ', ' + rgb.green + ', ' + rgb.blue + ', .5); } .me-buttons.white a:before, .me-buttons.white span:before, .me-buttons.white span:after { color: rgba(' + rgb.red + ', ' + rgb.green + ', ' + rgb.blue + ', .6); } .no-touch .me-buttons-alt > a:before, .comment-reply-link:hover:before, .krown-accordion h5:hover:before, .krown-tabs.vertical .titles li:hover:before { color: ' + $(this).data('one') + '; } .no-3deffects .folio-item .bottom { background-color: ' + $(this).data('two') + ' !important; background-color: rgba(' + rgb2.red + ', ' + rgb2.green + ', ' + rgb2.blue + ', .9) !important; } #menu li a, #menu .top-menu li:before { opacity:' + $(this).data('four') + '; }';

    			if(firstColorChange){
    				firstColorChange = false;
    				$('head').append('<style type="text/css" id="customizer-colors">' + customColorString + '</style>');
    				$customizerColorsStyle = $('#customizer-colors');
    			} else {
    				$customizerColorsStyle.html(customColorString)
    			}

    			$selectedColor.removeClass('selected');
    			$selectedColor = $(this);
    			$selectedColor.addClass('selected');

    		})

    	});

	});

})(jQuery);