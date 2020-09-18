$(document).ready(function () {
  // Botton Toggoler

  $(".navbar-toggler").on("click", function () {
    $("nav .one").toggleClass("top");
    $("nav .two").toggleClass("hidden");
    $("nav .three").toggleClass("bottom");
  });
  // Mix it up
  var mixer = mixitup(".gallery");
  //  Veno Box
  $(".venobox").venobox();
  // Smoth Scroll
  $("nav li a").on("click", function () {
    $("html,body").animate({
      scrollTop: $("#" + $(this).data("scroll")).offset().top - 80,
    });
  });
  // add class active
  $("nav li").on("click", function () {
    // $(this).siblings().children().removeClass("active");
    $(this)
      .children()
      .addClass("active")
      .parent()
      .siblings()
      .children()
      .removeClass("active");
  });
  // Up Button
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 1000) {
      $(".up").fadeIn(1000);
    } else {
      $(".up").fadeOut(1000);
    }
  });
  $(".up").on("click", function () {
    $("html,body").animate({
      scrollTop: $("#home").offset().top,
    });
  });
});
