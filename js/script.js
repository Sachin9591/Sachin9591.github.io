/*
	Cosmix by TEMPLATE STOCK
	templatestock.co @templatestock
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/


 /* ==============================================
  	 Main-Slider
  	=============================================== */ 
    $(document).ready(function() {
    
        var owl = $("#owl-slider");
        
        owl.owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
            singleItem : true,
            transitionStyle : "fade"
        });
    
    });


 /* ==============================================
  	  Progress Bar
  	=============================================== */ 
    $('.experience').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$.each($('div.progress-bar'),function(){
				$(this).css('width', $(this).attr('aria-valuemax')+'%');
			});
			$(this).unbind('inview');
		}
	});
	
 /* ==============================================
  	 Preloader
  	=============================================== */ 

	(function () {
	    $(window).load(function() {
	        $('#pre-status').fadeOut();
	        $('#preloader').delay(350).fadeOut('slow');
	    });
	}());

/* ==============================================
  	 Pretty Photo
  	=============================================== */

     $("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});
 
 /* ==============================================
  	  WOW Javascripts 
  	=============================================== */ 

    new WOW().init();

 /* ==============================================
  	  Testimonials
  	=============================================== */ 

    $(document).ready(function() {
    
        var owl = $("#owl-testi");
        
        owl.owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            singleItem : true,
            transitionStyle : "fade"
        });
    
    });
 
 
 /* ==============================================
  	  Smooth Scroll
  	=============================================== */ 
	
	
    $(function() {
        $('a.scroll').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top -50
                    }, 1000);
                    return false;
                }
            }
        });
    });
	


 /* ==============================================
  	  Navbar-Fixed-Top
  	=============================================== */ 
	
	
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar').addClass('on');
        } else {
            $('.navbar').removeClass('on');
        }
    });


 /* ==============================================
  	 ToolTip
  	=============================================== */ 
	
	$(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
	

 /* ==============================================
  	  Nice Scroll 
  	=============================================== */ 
	
	$("html").niceScroll({
		scrollspeed: 100,
		mousescrollstep: 38,
		cursorwidth: 5,
		cursorborder: 0,
		cursorcolor: '#333',
		autohidemode: true,
		zindex: 999999999,
		horizrailenabled: false,
		cursorborderradius: 0,
	});
	

/* ==============================================
  	  Count
  	=============================================== */ 

    $('#fun-facts').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$(this).find('.timer').each(function () {
				var $this = $(this);
				$({ Counter: 0 }).animate({ Counter: $this.text() }, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
			});
			$(this).unbind('inview');
		}
	});
	
	
	/* ==============================================
  	  Clients
  	=============================================== */
	
	
    var owl = $("#client-slider");

    owl.owlCarousel({

        itemsCustom: [
            [0, 2],
            [450, 3],
            [600, 3],
            [700, 4],
            [1000, 5],
            [1200, 5],
            [1400, 5],
            [1600, 5]
        ],
        pagination: false,
        autoPlay: 3000, //Set AutoPlay to 3 seconds

    });
	

	/*====================================
    Portfolio Isotope Filter
    ======================================*/
	
	$(window).load(function(){'use strict';
		var $portfolio_selectors = $('.portfolio-filter >li>a');
		var $portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows'
		});
		
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});
	
	
    /*====================================
        Fullscreen burger menu
    ======================================*/
    $(".menu-trigger, .mobilenav").click(function () {
        $(".mobilenav").fadeToggle(500);
    });
    $(".menu-trigger, .mobilenav").click(function () {
        $(".top-menu").toggleClass("top-animate");
        $(".mid-menu").toggleClass("mid-animate");
        $(".bottom-menu").toggleClass("bottom-animate");
    });


    /* ========================================================================
        On click menu item animate to the section
    ========================================================================== */
    $(".mobilenav li, .back-to-top").on('click', function() {
        var target = $(this).data('rel');
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing');
    });


	/*====================================
       Index-03-Main-Slider
    ======================================*/
	
    $(document).ready(function() {
    
        $("#owl-main-slider").owlCarousel({
        
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true
        
            // "singleItem:true" is a shortcut for:
            // items : 1, 
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false
        
        });
    
    });


    /*=======================================
        Role Text Slider
    ========================================*/
    $(document).ready(function () {
        const roles = ["Data Scientist", "Senior Software Engineer", "Freelancer"];

        let roleIndex = 0;
        let charIndex = roles[0].length; // start from existing text
        const typingSpeed = 80;
        const pauseAfterTyping = 2000;

        function eraseRole() {
            if (charIndex > 0) {
                $("#role-text").text(
                roles[roleIndex].substring(0, charIndex - 1)
                );
                charIndex--;
                setTimeout(eraseRole, 50);
            } else {
                roleIndex = (roleIndex + 1) % roles.length;
                typeRole();
            }
        }

        function typeRole() {
            if (charIndex < roles[roleIndex].length) {
                $("#role-text").text(
                roles[roleIndex].substring(0, charIndex + 1)
                );
                charIndex++;
                setTimeout(typeRole, typingSpeed);
            } else {
                setTimeout(eraseRole, pauseAfterTyping);
            }
        }

        setTimeout(eraseRole, pauseAfterTyping); // start cycle
    });	
	
	 /* ==============================================
  	    //  Parallex-javascript
  	=============================================== */
	
    /*$('#testimonials').stellar();
    $('#slider-parallax').stellar();


    $(function(){

        $.stellar({

        horizontalScrolling: false,

        verticalOffset: 40

        });

    });*/

/*  ===============================================
  	      Index-05-text-Slider
  	=============================================== */
	$(document).ready(function() {
 
        $("#owl-text-slider").owlCarousel({
        
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true
        
            // "singleItem:true" is a shortcut for:
            // items : 1, 
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false
        
        });
    });

/*  ===========================================
      Contact Form - Submission
    =========================================== */
// $(document).ready(function () {
//   // Handle form submission
//   $('#main-contact-form').on('submit', function (e) {
//     e.preventDefault(); // Prevent default form submission

//     // Get form values
//     const contactFormData = {
//       name: $('input[name="name"]').val(),
//       email: $('input[name="email"]').val(),
//       subject: $('input[name="subject"]').val(),
//       message: $('textarea[name="message"]').val(),
//       to_email: 'skumar10031993@gmail.com'
//     };

//     // Form validation
//     if (contactFormData.name === '' || contactFormData.email === '' || contactFormData.subject === '' || contactFormData.message === '') {
//       alert('Please fill all the fields.');
//       return;
//     }

//     $.ajax({
//       url: '/submit-form-endpoint', // Replace with your backend endpoint
//         type: 'POST',
//         data: contactFormData,
//         success: function (response) {
//           // If form is valid, display a success message (you can customize this further)
//           alert('Your message has been sent successfully!');

//           // Clear form after submission (optional)
//           $('#main-contact-form')[0].reset();
//         },
//         error: function (error) {
//           // Handle error response
//           alert('There was an error sending your message. Please try again later.');
//         }
//     });    
//   });
// });

/*  =============================================
      Settings Panel
    =========================================== */
    // Open panel
    function openSettingsPanel() {
        $("#settings-panel").css("right", "0");
        $("#overlay").show();
    }

    // Close panel
    function closeSettingsPanel() {
        $("#settings-panel").css("right", "-300px");
        $("#overlay").hide();
    }

    function hexToRGB(hex) {
        hex = hex.replace("#", "");

        var r = parseInt(hex.substring(0, 2), 16);
        var g = parseInt(hex.substring(2, 4), 16);
        var b = parseInt(hex.substring(4, 6), 16);

        return r + ", " + g + ", " + b;
    }
    
    function isDarkColor(hexColor) {
        // Remove '#' if present
        hexColor = hexColor.replace('#', '');

        // Convert 3-digit hex to 6-digit using jQuery $.map
        if (hexColor.length === 3) {
            hexColor = $.map(hexColor.split(''), function(c) {
            return c + c;
            }).join('');
        }

        // Parse RGB values
        var r = parseInt(hexColor.substr(0, 2), 16);
        var g = parseInt(hexColor.substr(2, 2), 16);
        var b = parseInt(hexColor.substr(4, 2), 16);

        // Calculate brightness
        var brightness = (r * 299 + g * 587 + b * 114) / 1000;

        // Return true if dark
        return brightness < 128;
    }

    function applyThemeFromStorage(bgColor) {
        if (!bgColor) return;

        const themes = {
            "#0B2661": { "--primary-color": "#0B2661" },

            "#000000": {
                "--primary-color": "#000000",
                "--secondary-color": "color-mix(in srgb, var(--primary-color), white 15%)",
                "--background-color": "var(--primary-color)",
                "--hover-color": "#1F2937",
                "--gray-neutral-color": "#9CA3AF",
                "--overlay-dark-color": "rgba(0,0,0,0.85)",
                "--shadow-color": "rgba(0,0,0,0.40)",
                "--primary-dark-transparent-color": "rgba(0,0,0,0.6)"
            },

            "#E73131": { 
                "--primary-color": "#E73131",
                "--hover-exit-color": "#000000"
             },
            "#4F46E5": { "--primary-color": "#4F46E5" },
            "#059669": { "--primary-color": "#059669" },
            "#D67FAF": { "--primary-color": "#D67FAF" },
            "#2563EB": { "--primary-color": "#2563EB" }
        };

        const selectedTheme = themes[bgColor];
        if (!selectedTheme) return;

        $.each(selectedTheme, function (variable, value) {
            document.documentElement.style.setProperty(variable, value);
        });
    }

    // Handle Theme Swatch clicks
    $(".theme_swatch").on("click", function() {
        var bgColor = $(this).data("color");
        
        // Storage the chosen color in localStorage
        // localStorage.setItem("themeSelectedColor", bgColor);
        
        applyThemeFromStorage(bgColor);
    });

    // On page load, restore saved swatch
    // var savedThemeColor = localStorage.getItem("themeSelectedColor");
    // if(savedThemeColor) {
    //     applyThemeFromStorage(savedThemeColor);
    // }

    // Animation Effects
    // $(document).ready(function () {
    //     let savedAnimation = localStorage.getItem('selectedAnimation');

    //     if(savedAnimation){
    //         $(".animate_target").each(function () {
    //         $(this).css('animation', 'none');
    //         this.offsetWidth;
    //         $(this).css('animation', `${savedAnimation} 1s ease-in-out`);
    //         });
    //     }
    // });

    $(".animate_swatch").on("click", function () {
        var animationName = $(this).data("animate");

        // Store the chosen color in localStorage
        // localStorage.setItem("selectedAnimation", animationName);

        $(".animate_target").each(function () {
            $(this).css('animation', 'none');
            this.offsetWidth;
            $(this).css('animation', `${animationName} 1s ease-in-out`);
        });
    });

/* ===============================================
        Experience Projects
    ============================================== */
    $(document).ready(function () {
        $(".toggle-projects").click(function () {

            const container = $(this).closest(".timeline-content");
            const projects = container.find(".experience-projects");
            const headerTitle = container.find(".projects-header h4");
            const isOpen = projects.is(":visible");

            $(".experience-projects").slideUp(300);
            $(".projects-header h4").fadeOut(200);
            $(".toggle-projects").text("View Key Projects");

            if (!isOpen) {
                projects.slideDown(300);
                headerTitle.fadeIn(200);
                $(this).text("Hide Projects");
            }
        });
    });

/* ===============================================
        Experience Modal Projects
    ============================================== */
    $(document).ready(function () {
        const $modal = $("#projectModal");
        const $modalTitle = $("#modalTitle");
        const $modalBody = $("#modalBody");

        $(".case-study-btn, .architecture-btn").on("click", function (e) {
            e.preventDefault();
            $modalTitle.html($(this).attr("data-title"));
            $modalBody.html($(this).attr("data-content"));
            $modal.css("display", "flex");
        });

        $(".close-modal").on("click", function () {
            $modal.css("display", "none");
        });

        $(window).on("click", function (e) {
            if ($(e.target).is("#projectModal")) {
                $modal.css("display", "none");
            }
        });
    });

 /* ==============================================
        Donut Chart
    ============================================ */
    $(document).ready(function () {
        $('.donut-chart').each(function () {
            const value = parseInt($(this).find('span').text(), 10);
            // IMPORTANT: native style API
            this.style.setProperty('--value', value);
        });
    });

/* ==============================================
       Spoken Language Star Ratings
    ============================================ */
    $(document).ready(function() {
        $('.stars-inner').each(function() {
            var $inner = $(this);
            var $percentSpan = $inner.find('span');
            // Get percentage value
            var percent = parseInt($percentSpan.text());
            // Set width of stars-inner
            $inner.css('width', percent + '%');
            // Optional: hide the percentage text
            $percentSpan.hide();
        });
    });



