/*============== Main Js Start ========*/

(function ($) {
    "use strict";
/*============ header menu show hide =========*/
$(".sidebar-menu-show-hide").on("click", function () {
    $(".sidebar-menu-wrapper").addClass("show");
    $(".sidebar-overlay").addClass("show");
});

$(".sidebar-overlay, .close-hide-show").on("click", function () {
    $(".sidebar-menu-wrapper").removeClass("show");
    $(".sidebar-overlay").removeClass("show");
});


/*======= Button Effect  Js ========*/
$('.btn').on('mouseenter', function (e) {
	var parentOffset = $(this).offset(),
		relX = e.pageX - parentOffset.left,
		relY = e.pageY - parentOffset.top;
	$(this).find('span').css({ top: relY, left: relX })
}).on('mouseout', function (e) {
	var parentOffset = $(this).offset(),
		relX = e.pageX - parentOffset.left,
		relY = e.pageY - parentOffset.top;
	$(this).find('span').css({ top: relY, left: relX })
});


$('.theme-btn').on('mouseenter', function (e) {
	var parentOffset = $(this).offset(),
		relX = e.pageX - parentOffset.left,
		relY = e.pageY - parentOffset.top;
	$(this).find('span').css({ top: relY, left: relX })
}).on('mouseout', function (e) {
	var parentOffset = $(this).offset(),
		relX = e.pageX - parentOffset.left,
		relY = e.pageY - parentOffset.top;
	$(this).find('span').css({ top: relY, left: relX })
});



/* ==========================================
  *     Start Document Ready function
  ==========================================*/
  $(document).ready(function () {


    // Check if there's a language saved in localStorage
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        $('.selected-lan').contents().filter(function() {
            return this.nodeType === 3; // Node type 3 is a text node
        }).first().replaceWith(savedLanguage + ' '); // Update the text with saved language
    }

    // Language Dropdown
    $('.selected-lan').on('click', function() {
        $('.language-box').toggleClass('open');
    });

    const languageOptions = $('.option-lan');

    languageOptions.each(function() {
        $(this).on('click', function() {
            const selectedText = $(this).text();
            // Update only the text node inside the .selected-lan span
            $('.selected-lan').contents().filter(function() {
                return this.nodeType === 3; // Node type 3 is a text node
            }).first().replaceWith(selectedText + ' '); // Adding a space to keep the formatting

            // Save the selected language to localStorage
            localStorage.setItem('selectedLanguage', selectedText);

            $('.language-box').removeClass('open');
        });
    });
    

    /** Forum card dropdown top menu */

        // Handle dropdown icon click
        $('.dropdown-icon').on('click', function(event) {
            event.stopPropagation();
            const $menu = $(this).siblings('.right-dropdown-menu');
            
            // Hide all social dropdown menus
            $('.social-dropdown-menu').removeClass('show');
            
            // Toggle current dropdown menu
            if ($menu.hasClass('show')) {
                $menu.removeClass('show');
            } else {
                $('.right-dropdown-menu').removeClass('show'); // Hide other right dropdown menus
                $menu.addClass('show'); // Show the clicked dropdown menu
            }
        });
    
        // Handle share button click
        $('.share-button').on('click', function(event) {
            event.stopPropagation();
            const $menu = $(this).siblings('.social-dropdown-menu');
            
            // Hide all right dropdown menus
            $('.right-dropdown-menu').removeClass('show');
            
            // Toggle current dropdown menu
            if ($menu.hasClass('show')) {
                $menu.removeClass('show');
            } else {
                $('.social-dropdown-menu').removeClass('show'); // Hide other social dropdown menus
                $menu.addClass('show'); // Show the clicked dropdown menu
            }
        });
    
        // Handle document click to hide dropdowns
        $(document).on('click', function(event) {
            if (!$(event.target).closest('.right-dropdown-menu, .dropdown-icon, .social-dropdown-menu, .share-button').length) {
                $('.right-dropdown-menu, .social-dropdown-menu').removeClass('show');
            }
        });

    /** Forum card social dropdown menu */

    /** Comment dropdown menu start */
    $(document).ready(function() {
        $('.comment-dropdown-icon').on('click', function(event) {
            event.stopPropagation();
            const $menu = $(this).siblings('.comment-dropdown-menu');
            
            $('.comment-dropdown-menu').not($menu).removeClass('show');
   
            $menu.toggleClass('show');
        });
    
        // Handle document click to hide comment dropdowns
        $(document).on('click', function(event) {
            if (!$(event.target).closest('.comment-dropdown-menu, .comment-dropdown-icon').length) {
                $('.comment-dropdown-menu').removeClass('show');
            }
        });
    });
    
    /** Comment dropdown menu end*/


    /*================== tooltipJs ==========*/
    $('[data-bs-toggle="tooltip"]').tooltip();

    /*================== Password Show Hide Js ==========*/
    $(".toggle-password-change").click(function () {
        var targetId = $(this).data("target");
        var target = $("#" + targetId);
        var icon = $(this);
        if (target.attr("type") === "password") {
            target.attr("type", "text");
            icon.removeClass("fa-eye-slash");
            icon.addClass("fa-eye");
        } else {
            target.attr("type", "password");
            icon.removeClass("fa-eye");
            icon.addClass("fa-eye-slash");
        }
    });


    /*============** Mgnific Popup **============*/
    $(".image-popup").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
    });

    $(".popup_video").magnificPopup({
        type: "iframe",
    });

    /*============== Slick Slider Js Start ==============*/

    // Team Slider
    $(".team-slider-active").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 1500,
        dots: true,
        pauseOnHover: false,
        arrows: true,
        prevArrow:
            '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></i></button>',
        nextArrow:
            '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    dots: true,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 667,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 424,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                },
            },
        ],
    });


    /*========= Mouse hover Js Start =========*/
    $(".demo-class").on("mouseover", function () {
        $(".service-item").removeClass("active");
        $(this).addClass("active");
    });

    /*============ Sidebar Menu Js Start ============ */
    // Sidebar Dropdown Menu Start
    $(".has-dropdown > a").click(function () {
        $(".sidebar-submenu").slideUp(200);
        if ($(this).parent().hasClass("active")) {
            $(".has-dropdown").removeClass("active");
            $(this).parent().removeClass("active");
        } else {
            $(".has-dropdown").removeClass("active");
            $(this).next(".sidebar-submenu").slideDown(200);
            $(this).parent().addClass("active");
        }
    });

    /*==================== Sidebar Icon & Overlay js ===============*/
    $(".dashboard-body__bar-icon").on("click", function () {
        $(".sidebar-menu").addClass("show-sidebar");
        $(".sidebar-overlay").addClass("show");
    });
    $(".sidebar-menu__close, .sidebar-overlay").on("click", function () {
        $(".sidebar-menu").removeClass("show-sidebar");
        $(".sidebar-overlay").removeClass("show");
    });

/*============ odometer Js Start ============ */
    if ($(".odometer").length) {
        var odo = $(".odometer");
        odo.each(function () {
            $(this).appear(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
            });
        });
        }

    /* =========== User Profile Upload Photo Js ========== */
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $("#imagePreview").css(
                    "background-image",
                    "url(" + e.target.result + ")"
                );
                $("#imagePreview").hide();
                $("#imagePreview").fadeIn(650);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function () {
        readURL(this);
    });
});

/*========= End Document Ready function ==========*/

    /*=========== Preloader Js Start ===========*/

    $(window).on("load", function () {
        $("#loading").fadeOut();
    });

    /*========= Header Sticky Js Start =======*/
    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= 1) {
            $(".header").addClass("fixed-header");
        } else {
            $(".header").removeClass("fixed-header");
        }
    });

    /*======== Scroll To Top Icon Js Start =========*/
    var btn = $(".scroll-top");
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass("show");
        } else {
            btn.removeClass("show");
        }
    });

    btn.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "300");
    });

    /*========== header menu show hide =========*/
    $(".sidebar-menu-show-hide").on("click", function () {
        $(".sidebar-menu-wrapper").addClass("show");
        $(".sidebar-overlay").addClass("show");
    });

    $(".sidebar-overlay, .close-hide-show").on("click", function () {
        $(".sidebar-menu-wrapper").removeClass("show");
        $(".sidebar-overlay").removeClass("show");
    });

    /*========== Search input show hide =========*/
    $("#search-input-show").on("click", function () {
        $(".search-input-wrap").toggleClass("show");
    });

    $("#search-input-show").on("click", function () {
        $(".search-input-wrap").addClass("show");
    });
    $(document).on("click", function (event) {
        if (
            !$(event.target).closest(".search-input-wrap, #search-input-show")
                .length
        ) {
            $(".search-input-wrap").removeClass("show");
        }
    });
    /*========== Dashboard Menu show hide =========*/
    $(".dashboard-show-hide").on("click", function () {
        $(".dashboard_profile").addClass("show");
        $(".sidebar-overlay").addClass("show");
    });

    $(".sidebar-overlay, .close-hide-show").on("click", function () {
        $(".dashboard_profile").removeClass("show");
        $(".sidebar-overlay").removeClass("show");
    });

})(jQuery);