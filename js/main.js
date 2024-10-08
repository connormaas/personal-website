function main() {


(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
			$('.navbar-collapse').collapse('hide');
            return false;
          }
        }
      });

$('#nav').affix({
      offset: {
        top: $('header').height() 
      }
});	

	// skills chart
	$(document).ready(function(e) {
	var index=0;
	$(document).scroll(function() {
		var top = $('#skills').height()-$(window).scrollTop();
		if(top)
		var width = $(window).width();
		console.log(top)
		if (width > 1500) {
			if(top<450){
				if(index==0){
					$('.chart').easyPieChart({
						barColor: 'rgba(0,0,0,0.65)',
						trackColor: 'rgba(228,244,245,0.65)',
						easing: 'easeOutBounce',
						onStep: function(from, to, percent) {
							$(this.el).find('.percent').text(Math.round(percent));
						}
					});
				
					}
				index++;
			}

		}
		else if (width > 992) {
			if(top<50){
				if(index==0){
				
					$('.chart').easyPieChart({
						barColor: 'rgba(0,0,0,0.65)',
						trackColor: 'rgba(228,244,245,0.65)',
						easing: 'easeOutBounce',
						onStep: function(from, to, percent) {
							$(this.el).find('.percent').text(Math.round(percent));
						}
					});
				
					}
				index++;
			}
		}
		else {
			if(top<900){
				if(index==0){	
				
					$('.chart').easyPieChart({
						barColor: 'rgba(0,0,0,0.65)',
						trackColor: 'rgba(228,244,245,0.65)',
						easing: 'easeOutBounce',
						onStep: function(from, to, percent) {
							$(this.el).find('.percent').text(Math.round(percent));
						}
					});
				
					}
				index++;
			}

		}
	})
	});

  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	
	  	
    // CounterUp
	$(document).ready(function( $ ) {
		if($("span.count").length > 0){	
			$('span.count').counterUp({
					delay: 10, 
			time: 1500 
			});
		}
	});
	
  	// Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	

}());


}
main();