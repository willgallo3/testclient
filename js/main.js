$(document).ready(function() {

	//Scroll

	jQuery.scrollSpeed(100, 800);


	//Animate

	new WOW().init();


	//Parallax

	var parLogo = document.getElementById('parLogo');
	var parallax = new Parallax(parLogo);


	// Owl Carousel

	$(".owl-carousel").owlCarousel({
		margin: 20,
		loop: true,
		center: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 3000,
		smartSpeed: 800,
		video:true,
		videoWidth: 300, 
		videoHeight: 250,
    responsive: {
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
	});



	//Popover

    $('[data-toggle="popover"]').popover();   


    // Team Section

    $('.raja-div').hide();
    $('.zaw-div').hide();
    $('.hire-div').hide();
    $('#willPic').css({
      "-webkit-box-shadow": "0px 0px 10px 6px rgba(0,0,0,0.30)",
      "-moz-box-shadow": "0px 0px 10px 6px rgba(0,0,0,0.30);",
      "box-shadow": "0px 0px 10px 6px rgba(0,0,0,0.30)",
      "transition": "all .25s ease",
      "border": "3px solid white"
    });

    $('.will').click(function(){ 
      $('.will-div').fadeIn("slow").show();
      $('.zaw-div').hide();
      $('.hire-div').hide();
      $('.raja-div').hide();
      $('#willPic').css({
        "-webkit-box-shadow": "0px 0px 10px 6px rgba(0,0,0,0.30)",
        "-moz-box-shadow": "0px 0px 10px 6px rgba(0,0,0,0.30);",
        "box-shadow": "0px 0px 10px 6px rgba(0,0,0,0.30)",
        "transition": "all .25s ease",
        "border": "3px solid white"
      });
      $('#rajaPic').css({
        "-webkit-box-shadow": "none",
        "-moz-box-shadow": "none;",
        "box-shadow": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#zawPic').css({
        "-webkit-box-shadow": "none",
        "-moz-box-shadow": "none;",
        "box-shadow": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#hirePic').css({
        "-webkit-box-shadow": "none",
        "-moz-box-shadow": "none;",
        "box-shadow": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
  	});

	$('.raja').click(function(){ 
      $('.will-div').hide();
      $('.zaw-div').hide();
      $('.hire-div').hide();
      $('.raja-div').fadeIn("slow").show();
      $('#rajaPic').css({
        "-webkit-box-shadow": "0px 0px 10px 6px rgba(0,0,0,0.30)",
        "-moz-box-shadow": "0px 0px 10px 6px rgba(0,0,0,0.30);",
        "box-shadow": "0px 0px 10px 6px rgba(0,0,0,0.30)",
        "transition": "all .25s ease",
        "border": "3px solid white"
      });
      $('#willPic').css({
        "-webkit-box-shadow": "none",
        "-moz-box-shadow": "none;",
        "box-shadow": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#zawPic').css({
        "-webkit-box-shadow": "none",
        "-moz-box-shadow": "none;",
        "box-shadow": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#hirePic').css({
        "-webkit-box-shadow": "none",
        "-moz-box-shadow": "none;",
        "box-shadow": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
  	});

  	$('.zaw').click(function(){ 
      $('.will-div').hide();
      $('.zaw-div').fadeIn("slow").show();
      $('.hire-div').hide();
      $('.raja-div').hide();
      $('#zawPic').css({
        "-webkit-box-shadow": "0px 0px 10px 6px rgba(0,0,0,0.30)",
        "-moz-box-shadow": "0px 0px 10px 6px rgba(0,0,0,0.30);",
        "box-shadow": "0px 0px 10px 6px rgba(0,0,0,0.30)",
        "transition": "all .25s ease",
        "border": "3px solid white"
      });
      $('#willPic').css({
        "-webkit-box-shadow": "none",
        "-moz-box-shadow": "none;",
        "box-shadow": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#rajaPic').css({
        "-webkit-box-shadow": "none",
        "-moz-box-shadow": "none;",
        "box-shadow": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#hirePic').css({
        "-webkit-box-shadow": "none",
        "-moz-box-shadow": "none;",
        "box-shadow": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
  	});

  	$('.hire').click(function(){ 
      $('.will-div').hide();
      $('.zaw-div').hide();
      $('.hire-div').fadeIn("slow").show();
      $('.raja-div').hide();
      $('#hirePic').css({
        "-webkit-box-shadow": "0px 0px 10px 6px rgba(0,0,0,0.30)",
        "-moz-box-shadow": "0px 0px 10px 6px rgba(0,0,0,0.30);",
        "box-shadow": "0px 0px 10px 6px rgba(0,0,0,0.30)",
        "transition": "all .25s ease",
        "border": "3px solid white"
      });
      $('#willPic').css({
        "-webkit-box-shadow": "none",
        "-moz-box-shadow": "none;",
        "box-shadow": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#zawPic').css({
        "-webkit-box-shadow": "none",
        "-moz-box-shadow": "none;",
        "box-shadow": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
      $('#rajaPic').css({
        "-webkit-box-shadow": "none",
        "-moz-box-shadow": "none;",
        "box-shadow": "none",
        "transition": "all .25s ease",
        "border": "none"
      });
  	});


    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });

    // Particles JS

    var count_particles, stats, update;
    stats = new Stats;
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    count_particles = document.querySelector('.js-count-particles');
    update = function() {
      stats.begin();
      stats.end();
      if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
      }
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);

    $(".test-badge").click(function(){
      $(".timeline-badge").css({
        "-webkit-box-shadow": "0px 0px 10px 6px rgba(0,0,0,0.30)",
        "-moz-box-shadow": "0px 0px 10px 6px rgba(0,0,0,0.30);",
        "box-shadow": "0px 0px 10px 6px rgba(0,0,0,0.30)",
        "transition": "all .25s ease",
        "border": "3px solid white"
      });
    });

});