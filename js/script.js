  
/*===========================================
preloader
===========================================*/
$(window).on('load',function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
   
})

/*===========================================
navigation
===========================================*/

$(function () {
    showHideNav();
    $(window).scroll(function (){

        showHideNav();
    })


    function showHideNav() {

        if ( $(window).scrollTop() >50){

            //show white nav
            $("nav").addClass("white-nav-top");
    
            // Show dark logo
            $(".navbar-brand a").css("color", "black");

             // Show back to top button
             $("#back-to-top").fadeIn();
            
        } else{

             //show white nav
             $("nav").removeClass("white-nav-top");
            //  $("nav").removeClass("ul.navbar-nav > li > a");
    
             // Show dark logo
             $(".navbar-brand a").css("color", "#fff");

              // Hide back to top button
            $("#back-to-top").fadeOut();
        }



    }
})
 

 // Smooth Scrolling
 $(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get section id like #about, #servcies, #work, #team and etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 40
        }, 1250, "easeInOutExpo");

    });

});
 
 
 
 
 
 /*===========================================
typed js
===========================================*/
    
var typed2 = new Typed('#typed2', {
    strings: ['developer', 'designer', 'programmer'],
    typeSpeed: 100,
    backSpeed: 100,
    // fadeOut: true,
    loop: true
  });



 /*===========================================
portfolio
===========================================*/

$(window).on('load', function() {
    $('#isotope-container').isotope({

    });
    $("#isotope-filters").on('click','button', function() {
       // get filter value
       var filtervalue = $(this).attr('data-filter');

       //filter portfolio
       $(' #isotope-container').isotope({
            filter : filtervalue
    });

    // active button
    $("#isotope-filters").find(".active").removeClass("active")
    $(this).addClass("active")

    });
});


 /*===========================================
Magnifer
===========================================*/

$(function () {

    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
            enabled: true
          },
      });
})


 /*===========================================
counter
===========================================*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
})


 /*===========================================
testimonial
===========================================*/

$(function() {
    $("#textimonial-slider").owlCarousel({
        items : 2,
        autoplay : true,
        loop : true,
        autoplayHoverPause : true,
        nav : false,
        dots : true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items : 1, 
            },
            // breakpoint from 480 up
            768 : {
                items : 1,
            },
            
        }
        // navText: ['<i class="fa fa-angle-left fa-2x"></i>', '<i class="fa fa-angle-right fa-2x"></i>']
    })

});

 
