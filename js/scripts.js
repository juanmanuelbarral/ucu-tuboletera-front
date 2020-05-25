/* Template: Tivo - SaaS App HTML Landing Page Template
   Author: Inovatik
   Created: Sep 2019
   Description: Custom JS file
*/


(function ($) {
  "use strict";

  $(window).on('load', function () {
    if (window.location.href.match('index.html') != null) {
      $.ajax({
        url: "https://nxqit5y348.execute-api.us-east-1.amazonaws.com/dev/pageVisit/test",
        type: "POST",
        success: function(result) {
          console.log("Page visit!");
        },
        error: function(error) {
          console.log("Page visit error :(");
        }
      });
    }
  });

  $(window).on('load', function () {
    if (window.location.href.match('thanks-screen.html') != null) {
      $.ajax({
        url: "https://nxqit5y348.execute-api.us-east-1.amazonaws.com/dev/knowMore/test",
        type: "POST",
        success: function(result) {
          console.log("Know more!");
        },
        error: function(error) {
          console.log("Know more error :(");
        }
      });
    }
  });

  /* Preloader */
  $(window).on('load', function () {
    var preloaderFadeOutTime = 500;
    function hidePreloader() {
      var preloader = $('.spinner-wrapper');
      setTimeout(function () {
        preloader.fadeOut(preloaderFadeOutTime);
      }, 500);
    }
    hidePreloader();
  });


  /* Navbar Scripts */
  // jQuery to collapse the navbar on scroll
  $(window).on('scroll load', function () {
    if ($(".navbar").offset().top > 60) {
      $(".fixed-top").addClass("top-nav-collapse");
    } else {
      $(".fixed-top").removeClass("top-nav-collapse");
    }
  });

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function () {
    $(document).on('click', 'a.page-scroll', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 600, 'easeInOutExpo');
      event.preventDefault();
    });
  });

  // closes the responsive menu on menu item click
  $(".navbar-nav li a").on("click", function (event) {
    if (!$(this).parent().hasClass('dropdown'))
      $(".navbar-collapse").collapse('hide');
  });


  /* Image Slider - Swiper */
  var imageSlider = new Swiper('.image-slider', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    breakpoints: {
      // when window is <= 580px
      580: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window is <= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window is <= 992px
      992: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      // when window is <= 1200px
      1200: {
        slidesPerView: 4,
        spaceBetween: 20
      },

    }
  });


  /* Text Slider - Swiper */
  var textSlider = new Swiper('.text-slider', {
    autoplay: {
      delay: 6000,
      disableOnInteraction: false
    },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });


  /* Details Lightbox - Magnific Popup */
  $('.popup-with-move-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: false, /* keep it false to avoid html tag shift with margin-right: 17px */
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });


  /* Move Form Fields Label When User Types */
  // for input and textarea fields
  $("input, textarea").keyup(function () {
    if ($(this).val() != '') {
      $(this).addClass('notEmpty');
    } else {
      $(this).removeClass('notEmpty');
    }
  });


  /* Sign Up Form */
  $("#signUpForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
      // handle the invalid form...
      sformError();
      ssubmitMSG(false, "Please fill all fields!");
    } else {
      // everything looks good!
      event.preventDefault();
    }
  });

  function sformError() {
    $("#signUpForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      $(this).removeClass();
    });
  }

  function ssubmitMSG(valid, msg) {
    if (valid) {
      var msgClasses = "h3 text-center tada animated";
    } else {
      var msgClasses = "h3 text-center";
    }
    $("#smsgSubmit").removeClass().addClass(msgClasses).text(msg);
  }


  /* Log In Form */
  $("#logInForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
      // handle the invalid form...
      lformError();
      lsubmitMSG(false, "Please fill all fields!");
    } else {
      // everything looks good!
      event.preventDefault();
    }
  });

  function lformSuccess() {
    $("#logInForm")[0].reset();
    lsubmitMSG(true, "Log In Submitted!");
    $("input").removeClass('notEmpty'); // resets the field label after submission
  }

  function lformError() {
    $("#logInForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      $(this).removeClass();
    });
  }

  function lsubmitMSG(valid, msg) {
    if (valid) {
      var msgClasses = "h3 text-center tada animated";
    } else {
      var msgClasses = "h3 text-center";
    }
    $("#lmsgSubmit").removeClass().addClass(msgClasses).text(msg);
  }


  /* Newsletter Form */
  $("#newsletterForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
      // handle the invalid form...
      nformError();
      nsubmitMSG(false, "Please fill all fields!");
    } else {
      // everything looks good!
      event.preventDefault();
    }
  });

  function nformError() {
    $("#newsletterForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      $(this).removeClass();
    });
  }

  function nsubmitMSG(valid, msg) {
    if (valid) {
      var msgClasses = "h3 text-center tada animated";
    } else {
      var msgClasses = "h3 text-center";
    }
    $("#nmsgSubmit").removeClass().addClass(msgClasses).text(msg);
  }


  /* Privacy Form */
  $("#privacyForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
      // handle the invalid form...
      pformError();
      psubmitMSG(false, "Please fill all fields!");
    } else {
      // everything looks good!
      event.preventDefault();
    }
  });

  function pformError() {
    $("#privacyForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      $(this).removeClass();
    });
  }

  function psubmitMSG(valid, msg) {
    if (valid) {
      var msgClasses = "h3 text-center tada animated";
    } else {
      var msgClasses = "h3 text-center";
    }
    $("#pmsgSubmit").removeClass().addClass(msgClasses).text(msg);
  }


  /* Back To Top Button */
  // create the back to top button
  $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
  var amountScrolled = 700;
  $(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
      $('a.back-to-top').fadeIn('500');
    } else {
      $('a.back-to-top').fadeOut('500');
    }
  });


  /* Removes Long Focus On Buttons */
  $(".button, a, button").mouseup(function () {
    $(this).blur();
  });

})(jQuery);