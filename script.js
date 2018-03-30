$(document).ready(function () {
        //Smooth scrolling when click to nav
        $('#navbar-collapse > ul > li > a').click(function (e) {
            e.preventDefault();
            var curLink = $(this);
            var scrollPoint = $(curLink.attr('href')).position().top;
            $('body,html').animate({
                scrollTop: scrollPoint
            }, 200);
        })

        $(window).scroll(function () {
            onScrollHandle();
        });

        function onScrollHandle() {
            
            //Get current scroll position
            var currentScrollPos = $(document).scrollTop();

            //Iterate through all node
            $('#navbar-collapse > ul > li > a').each(function () {
                var curLink = $(this);
                var refElem = $(curLink.attr('href'));
                //Compare the value of current position and the every section position in each scroll
                if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
                    //Remove class active in all nav
                    $('#navbar-collapse > ul > li').removeClass("active"); 
                    //Add class active
                    curLink.parent().addClass("active");
                }
                else {
                    curLink.parent().removeClass("active");
                }
            });
        }
    });



$("#navbar-collapse > ul > li> a").click(function(){
$(this).siblings().removeClass('current');
});



$(window).scroll(function(e) {
  parallax();
})


function parallax() {
  var scroll = $(window).scrollTop();
  var screenHeight = $(window).height();

  $('.parallax').each(function() {
    var offset = $(this).offset().top;
    var distanceFromBottom = offset - scroll - screenHeight
    
    if (offset > screenHeight && offset) {
      $(this).css('background-position', 'center ' + (( distanceFromBottom  ) * 0.5) +'px');
    } else {
      $(this).css('background-position', 'center ' + (( -scroll ) * 0.5) + 'px');
    }
  })
}


//FADE IN 'I'M DARYNA KARATNIUK' WHEN THE USER SCROLLS TO THE SECOND SECTION

$(window).scroll(function() {
   var hT = $('.aboutme-head').offset().top,
       hH = $('.aboutme-head').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
    $('.aboutme-head').fadeIn(2000);
   }
});
