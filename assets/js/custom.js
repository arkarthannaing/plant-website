$("#loader").removeClass("d-flex").fadeOut(1000);
$("#main").fadeIn(3000);

$(document).scroll(function () {
  var nav = $("#mainNavbar");
  var topBtn = $("#topBtn");
  // console.log($(this).scrollTop());
  nav.toggleClass("scrolled", $(this).scrollTop() > nav.height());
  topBtn.toggleClass("d-none", $(this).scrollTop() < 200);

  // if (
  //   document.body.scrollTop > nav.height() ||
  //   document.documentElement.scrollTop > nav.height()
  // ) {
  //   topBtn.style.display = "block";
  // } else {
  //   topBtn.style.display = "none";
  // }
});

function topFunction() {
  document.documentElement.scrollTop = 0;
}

function navBgChange() {
  $("#mainNavbar").toggleClass("primary-bg");
}

$("#best-sellers .carousel .carousel-item").each(function () {
  var minPerSlide = 5;

  var next = $(this).next();

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }

    next.children(":first-child").clone().appendTo($(this));
  }
});

$("#feedback .carousel .carousel-item").each(function () {
  var minPerSlide = 1;

  var next = $(this).next();

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }

    next.children(":first-child").clone().appendTo($(this));
  }
});
