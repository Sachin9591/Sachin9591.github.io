/* ===========================================================
	SACHIN KUMAR B
	SENIOR DATA ENGINEER/DJANGO/DEV./SSE
	Copyrighted by Sachin Kumar B @2026
============================================================== */


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
	
	// $("html").niceScroll({
	// 	scrollspeed: 100,
	// 	mousescrollstep: 38,
	// 	cursorwidth: 5,
	// 	cursorborder: 0,
	// 	cursorcolor: '#333',
	// 	autohidemode: true,
	// 	zindex: 999999999,
	// 	horizrailenabled: false,
	// 	cursorborderradius: 0,
	// });
	

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
        const roles = ["Senior Data Engineer", "Senior Software Engineer", "Independent Consultant"];

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

/*  ==============================================
       Projects Filter Logics
    ============================================ */
    $(document).ready(function() {    
        // 1. Initial State: Hide archive tier items on first page mount
        $('.filter-item[data-tier="archive"]').hide();

        // 2. Core Intelligent Filter Engine
        $('.filter-btn').on('click', function() {
            const $clickedButton = $(this);
            const filterValue = $clickedButton.data('filter');
            
            // 🛠️ FIX: Simply toggle the active class rule; the CSS handles variable variables instantly!
            $('.filter-btn').removeClass('active');
            $clickedButton.addClass('active');
            
            // Stop ongoing loops to prevent visual jumping animations
            $('.filter-item').stop(true, true);

            if (filterValue === 'all') {
                $('.filter-item[data-tier="archive"]').fadeOut(200);
                $('.filter-item[data-tier="featured"]').fadeIn(300);
            } else {
                $('.filter-item').hide();
                $(`.filter-item[data-company="${filterValue}"]`).fadeIn(350);
            }
        });
    });

/*  ==============================================
       Work Experience Sections
    ============================================ */
    $(document).ready(function () {
        const $slides = $('.exp-horizontal-slide');
        const totalSlides = $slides.length;
        let currentSlideIndex = 0;

        // Generate responsive step pagination indicator dots programmatically
        const $dotsContainer = $('.exp-carousel-dots');
        if ($dotsContainer.length) {
            for (let i = 0; i < totalSlides; i++) {
                const activeClass = i === 0 ? 'active' : '';
                $dotsContainer.append(`<span class="exp-dot ${activeClass}" data-goto="${i}"></span>`);
            }
        }

        const $dots = $('.exp-dot');

        function navigateHorizontalSlide(targetIndex) {
            if (targetIndex === currentSlideIndex) return;

            // Set layout transition directions vector arrays
            const directionClass = targetIndex > currentSlideIndex ? '100px' : '-100px';
            
            const $currentSlide = $slides.eq(currentSlideIndex);
            const $nextSlide = $slides.eq(targetIndex);

            // Deactivate current slide view nodes safely
            $currentSlide.removeClass('active');
            
            // Step activate incoming target slide metrics frame
            $nextSlide.css('transform', `translateX(${directionClass})`);
            
            // Force rendering tree validation context refresh line execution
            $nextSlide.get(0).offsetHeight; 

            $nextSlide.addClass('active').css('transform', 'translateX(0)');

            // Sync interactive dots pagination state tracking metrics
            $dots.removeClass('active').eq(targetIndex).addClass('active');

            // Update step location reference values
            currentSlideIndex = targetIndex;
        }

        // ACTION EVENT BINDING: Forward Tracking Next Arrow Click Anchor
        $('#next-exp-btn').on('click', function (e) {
            e.preventDefault();
            let nextIndex = currentSlideIndex + 1;
            if (nextIndex >= totalSlides) nextIndex = 0; // Rotates loop cycling fallback cap
            navigateHorizontalSlide(nextIndex);
        });

        // ACTION EVENT BINDING: Reverse Backward Prev Arrow Click Anchor
        $('#prev-exp-btn').on('click', function (e) {
            e.preventDefault();
            let prevIndex = currentSlideIndex - 1;
            if (prevIndex < 0) prevIndex = totalSlides - 1; // Rotates back loop cycling tracking cap
            navigateHorizontalSlide(prevIndex);
        });

        // ACTION EVENT BINDING: Direct Navigation Pips Indicator Node Clicks Hub
        $dots.on('click', function (e) {
            e.preventDefault();
            const targetTargetIndex = parseInt($(this).attr('data-goto'), 10);
            navigateHorizontalSlide(targetTargetIndex);
        });
    });

