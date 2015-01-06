// ========== TABLE OF CONTENTS =========== //
//
// 1. PAGE LOADER 
// 2. ACTIVE CLASS
// 3. STYLE SWITCHER
// 4. BOOTSTRAP CAROUSEL SLIDER
// 5. SCROLL TO TOP BUTTON
// 6. TEAM DISPLAY DROP DOWNS
// 7. FADE IN NAVIGATION
// 8. POST PAGE - FORCE MAIN IMAGE TO 75% OF SCREEN HEIGHT
// 9. SCROLL TO SCRIPT USED FOR ONE PAGE THEME
// 10. PARALLAX BACKGROUNDS
// 11. BOOTSTRAP ACCORDION
// 12. OWL SLIDER
// 13. SCROLL TO REPLY SECTION ON POST PAGES
// 14. CLOSE MOBILE MENU ON SELECT
//
// ======================================= //

// ========== 1. START PAGE LOADER ========== //
 (function($) { "use strict";

$(window).load(function() {
	$(".loader-img").delay(500).fadeOut();
	$("#pageloader").delay(1000).fadeOut("slow");
	var hash = window.location.hash;
	if(!hash) { 
	// Do nothing //
	} else {
	$(document).scrollTop( $(hash).offset().top -78); 
}
});
 })(jQuery);
 // ========== END PAGE LOADER ========== //


    // ========== 2. ADDS "active" CLASS TO ANY CLICKED BUTTONS ========== //
    (function($) { "use strict";
 $(document).ready(function(){
  $('a.btn').click(function(){
  $('a.btn').removeClass('active');
  $(this).addClass('active');
  });
});
 })(jQuery);
   // ========== END ACTIVE CLASS ========== // 
	

    // ========== 3. START STYLE SWITCH ========== //
    (function($) { "use strict";
 $(document).ready(function(){
  $('.style-switch-button').click(function(){
  $('.style-switch-wrapper').toggleClass('active');
  });
  $('a.close-styler').click(function(){
  $('.style-switch-wrapper').removeClass('active');
  });
});
 })(jQuery);
   // ========== END STYLE SWITCH ========== //

	   // ========== 4. START BOOTSTRAP CAROUSEL ========== //
	 (function($) { "use strict";
$('.carousel').carousel({
  interval: 5000,
  pause: "hover",
});
 })(jQuery);
		   // ========== END BOOTSTRAP CAROUSEL ========== //
	
 // ========== 5. START SCROLL TO TOP ========== //
 // Button
 (function($) { "use strict";
$(document).ready(function() {
     $(".scrollup").hide();
     $(window).scroll(function() {
         if ($(this).scrollTop() > 400) {
             $('.scrollup').fadeIn();
         } else {
             $('.scrollup').fadeOut();
         }
     });
 });
 })(jQuery);
 // Action
   (function($) { "use strict";
$("a.scrolltotop[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').stop().animate({scrollTop:0}, 1000, 'easeOutExpo');

});
 })(jQuery);
  // ========== END SCROLL TO TOP ========== //
 
// ========== 7 START FADE IN NAVIGATION ========== //
 (function($) { "use strict";
$(document).ready(function() {
     $(".nav-fadein").hide();
     $(window).on('scroll load', function() {
         if ($(this).scrollTop() > 400) {
             $('.nav-fadein').fadeIn();
         } else {
             $('.nav-fadein').fadeOut();
         }
     });
 });
 })(jQuery);
// ========== END FADE IN NAVIGATION ========== //

 // ========== 8. POST PAGE - MAKE IMAGE 75% OF SCREEN HEIGHT ========== //
  (function($) { "use strict";
$(document).ready(function() {
     $(window).on('resize load', function() {
       var newheight = $(window).height() * .75;
	   $('.post-img-lg').height(newheight);
     });
 });
 })(jQuery);
 
// ========== 9. START SCROLLTO SCRIPT ========== //
     (function($) { "use strict";
$("a.scrollto[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').stop().animate({
       scrollTop: $(hash).offset().top -78}, 1200, 'easeInOutExpo');

});
 })(jQuery);
 // ========== END SCROLL TO SCRIPT ========== //

  // ========== 10. START PARALLAX SETTINGS ========== //
 (function($) { "use strict";
				$('.parallax').stellar();
			$.stellar({
				horizontalScrolling: false,
				verticalOffset: 0
			});
		 })(jQuery);
		  (function($) { "use strict";
				$('.parallax-repeat').stellar();
			$.stellar({
				horizontalScrolling: false,
				verticalOffset: 0
			});
		 })(jQuery);
  // ========== END PARALLAX SETTINGS ========== //
  
    // ========== 11. BOOTSTRAP ACCORDION SETTINGS ========== //
(function($) { "use strict";
var $accordion = $('#accordion .panel a');
$accordion.click(function(){
   $accordion.removeClass('selected');
   $(this).addClass('selected');
});
$('#accordion .panel a').on('click',function(e){
    if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
     $accordion.removeClass('selected');
    }
});
})(jQuery);

(function($) { "use strict";
var $accordion1 = $('#accordion1 .panel a');
$accordion1.click(function(){
   $accordion1.removeClass('selected');
   $(this).addClass('selected');
});
$('#accordion1 .panel a').on('click',function(e){
    if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
     $accordion1.removeClass('selected');
    }
});
})(jQuery);
// ========= END BOOTSTRAP ACCORDION SETTINGS ========== //

// ========== 12. START OWL SLIDER SETTINGS ========== //
$(document).ready(function() {   
  $("#team-slider").owlCarousel({
    items: 4,
    itemsScaleUp: true,
    autoPlay: 3000,
    stopOnHover: true
    });
});
// ========== END OWL SLIDER SETTINGS ========== //
 
// ========== 13. SCROLL TO REPLY SECTION ON BLOG ========== // 
  (function($) { "use strict";
		$(".go-to-reply").click(function() {
     $('html, body').animate({
         scrollTop: $("#reply").offset().top -60 }, 600);
 });
 })(jQuery);
// ========== SCROLL TO REPLY SECTION ON BLOG ========== //

    // ========== 14. CLOSE MOBILE MENU ON SELECT ========== //
    (function($) { "use strict";
 $(document).ready(function(){
  $('.nav li a').click(function(){
  $('.navbar-collapse').removeClass('in');
  });
   $('.nav li.dropdown a').click(function(){
  $('.navbar-collapse').addClass('in');
  });
});
 })(jQuery);
   // ========== END CLOSE MOBILE MENU ON SELECT ========== //
   // ========== START PARALLAX SLIDER SETTINGS ========== //
   (function($) { "use strict";
$(document).ready(function() {
    $('#slides').superslides({
      animation: 'fade',
	   play: 7000,
	   pagination: true,
    });
			});	 })(jQuery);

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

jQuery(document).ready(function(){
  //$(window).data('plugin_stellar').destroy(); 
  if( isMobile.any() )
  $(function(){
      $(window).data('plugin_stellar').destroy();
      $('#slide1').backstretch('img/pictures/sauvabelin.jpg');
      $('#slide2').backstretch('img/pictures/leman.jpg');
      $('#slide3').backstretch('img/pictures/laus.jpg');      
      $('#image1').backstretch('img/pictures/Lausanne.jpg');         
  });




});      
    // ========== END PARALLAX SLIDER SETTINGS ========== //
   