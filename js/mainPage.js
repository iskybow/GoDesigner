// tab switcher for project examples
function openExamples(evt, buttonName) {
    // Declare all variables
    var i, item_project, btn_project;
    // Get all elements with class="item-project" and hide them
    item_project = document.getElementsByClassName("item_project");
    for (i = 0; i < item_project.length; i++) {
        item_project[i].style.display = "none";
    }
    // Get all elements with class="btn-project" and remove the class "active"
    btn_project = document.getElementsByClassName("btn_project");
    for (i = 0; i < btn_project.length; i++) {
        btn_project[i].className = btn_project[i].className.replace(" activeBut", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(buttonName).style.display = "flex";
    evt.currentTarget.className += " activeBut";
}

$(function () {
    document.getElementById("defaultOpen").click();
});

$(function () {
    // theme switcher
    $(document).on('click', '.js_themeSwitcher', function () {
        var themeBody = $('.js_themeBody');
        if(themeBody.hasClass('site-bg_white')) {
            // Переключаем на темную тему
            themeBody.toggleClass('site-bg_white');
            themeBody.toggleClass('site-bg_black');
            $('.js_select2').select2({
                placeholder: "Что вам нужно?",
                width: '150px',
                dropdownCssClass: "site-bg_black-select2"
            });
            $('#ui-datepicker-div').addClass('site-bg_black-datepicker');
        } else {
            // Переключаем на светлую тему
            themeBody.toggleClass('site-bg_white');
            themeBody.toggleClass('site-bg_black');
            $('.js_select2').select2({
                placeholder: "Что вам нужно?",
                width: '150px'
            });
            $('#ui-datepicker-div').removeClass('site-bg_black-datepicker');
        }
    });

    // calendar
    $(".datepicker").datepicker();

    // first slider
    $('.experts').slick({
        dots: true,
        dotsClass: 'dots-experts',
        prevArrow: '<button type="button" class="slick-prev slick-prev_experts"></button>',
        nextArrow: '<button type="button" class="slick-next slick-next_experts"></button>',
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    // second slider with feedbacks
    $('.reviews_block').slick({
        dots: true,
        dotsClass: 'dots-review',
        prevArrow: '<button type="button" class="slick-prev slick-prev_review"></button>',
        nextArrow: '<button type="button" class="slick-next slick-next_review"></button>',
        vertical: true,
        speed: 500,
        cssEase: 'linear',
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    // centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    // text truncate for slider with feedbacks
    $(".review").dotdotdot({
        // Options go here
        callback: function (isTruncated) {
        },
        /* Function invoked after truncating the text.
                         Inside this function, "this" refers to the wrapper. */

        ellipsis: "\u2026 ",
        /* The text to add as ellipsis. */

        height: 150,
        /* The (max-)height for the wrapper:
                         null: measure the CSS (max-)height ones;
                         a number: sets a specific height in pixels;
                         "watch": re-measures the CSS (max-)height in the "watch". */

        keep: null,
        /* jQuery-selector for elements to keep after the ellipsis. */

        tolerance: 0,
        /* Deviation for the measured wrapper height. */

        truncate: "word",
        /* How to truncate the text: By "node", "word" or "letter". */

        watch: true,
        /* Whether to update the ellipsis:
                         true: Monitors the wrapper width and height;
                         "window": Monitors the window width and height. */
    });

    $(document).on('click', '.js_clickSelect', function () {
        var parent = $(this).closest(".select-block");
        parent.addClass('select-block-active');
        parent.find($('.selectUl')).fadeIn();
    });

    $(document).on('change', '.js_inputVal', function () {
        var inputVal = $('.js_inputVal');
        var counter = 0;
        inputVal.each(function () {
            if ($(this).val()!== "") {
                counter++;
            }
        });
        if (counter === inputVal.length) {
           $('.js_submitVal').removeAttr('disabled').addClass('active');

        }
    });



});

$(document).on('click', '.selectLi', function (e) {
    e.stopPropagation();
    var parent = $(this).closest('.select-block');
    parent.find('.select-text').val($(this).text());
    parent.removeClass('select-block-active');
    parent.find($('.selectUl')).fadeOut();
    console.log(parent.find('.select-text').val())
});



// $(document).click(function (event) {
//     if ($(event.target).closest('.select-block').length) return;
//     $('.selectUl').hide("slow");
//     event.stopPropagation();
// });


$.datepicker.setDefaults($.datepicker.regional["ru"]);


$(document).ready(function() {
    $('.js_select2').select2({
        placeholder: "Что вам нужно?",
        width: '150px'
    });
    $('.js_select2').on('select2:open', function (e) {
        $('.select2-dropdown').hide();
        $('.select2-dropdown').slideDown(300);
    });
});

$(document).on("select2:open", "select", function() {
    $('.select2-results').mCustomScrollbar();
});

$(document).on('click', '.mobile-hamburger', function (e) {
    var hamburgerMobile = $('.mobile-hamburger');
    var mobileOpenMenu = $('.mobile-menu');
    hamburgerMobile.toggleClass('mobile-hamburger-open');
    // mobileOpenMenu.toggleClass('mobile-menu-open');
    if ( hamburgerMobile.hasClass("mobile-hamburger-open") ) {
        mobileOpenMenu.fadeIn("slow");
    } else {
        mobileOpenMenu.fadeOut("slow");
    }
});