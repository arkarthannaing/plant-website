$('.carousel .carousel-item').each(function(){
    var minPerSlide = 2;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        
        next.children(':first-child').clone().appendTo($(this));
      }
});

$(function () {
    
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        var topBtn = document.getElementById("topBtn");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());

        if (document.body.scrollTop > $nav.height() || document.documentElement.scrollTop > $nav.height()) {
          topBtn.style.display = "block";
        } else {
          topBtn.style.display = "none";
        }
    });

});

function topFunction() {
    document.documentElement.scrollTop = 0;
}

setTimeout(function () {
  $("#loader").removeClass("d-flex").fadeOut(2000);
  $("#myDiv").fadeIn(2000);
}, 4000);