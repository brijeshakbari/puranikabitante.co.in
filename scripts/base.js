var winHeight;
var winWidth;
var menuBtn;
var header;
var scrollTop;
var isResponsive = false;
var loadingID;
$(document).ready(function () {
    loadVariables();
    smoothScroll();

    //Loading animation for splash screen
    loadingLogo();
    loadingID = setInterval(function () {
        loadingLogo();
    }, 2000);
    //Lookbook Functions
});
$(window).resize(function () {

});

$(window).load(function () {
    //Stop loading animation for splash screen
    $('.loading-main-wrapper').delay(1500).fadeOut();
    clearInterval(loadingID);
});

function loadVariables() {
    winHeight = $(window).height();
    winWidth = $(window).width();
    if (winWidth < 600)
        isResponsive = true;
    else
        isResponsive = false;

    //Hide Modal on Escape or BG Click
    //Action on ESC key pressed
    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            closeModal();
            $('.modal video').get(0).pause();
        } // escape key maps to keycode `27`
    });

    //Action on clicking outside popup
    $('.bg-overlay').on('click', function (e) {
        if (e.target == this) {
            closeModal();
            $('.modal video').get(0).pause();
        }
    });
}

function smoothScroll() {
    var headerHt;
    var currLiIndex, currLiWidth, totalHeaderWidth, tempWidth, i;
    $('.smooth-scroll').click(function () {
        headerHt = $('header').outerHeight();
        var scrollID = '.' + $(this).attr('data-id');
        var offsetVal = $(this).attr('data-scroll-offset');
        $('html, body').animate({
            scrollTop: $(scrollID).offset().top - headerHt
        }, 500);

        $('#main-header li').removeClass('selected');
        $(this).closest('li').addClass('selected');
        currLiIndex = $('#main-header li.selected').index() + 1;
        currLiWidth = $('#main-header li.selected')[0].getBoundingClientRect().width;
        totalHeaderWidth = 0;
        for (i = 0; i < currLiIndex - 1; i++) {
            tempWidth = $('#main-header li:nth-child(' + (i + 1) + ')')[0].getBoundingClientRect().width;
            totalHeaderWidth += tempWidth;
        }
        totalHeaderWidth += currLiWidth / 2;
        $('.header-pointer').css('left', totalHeaderWidth + 'px');

        return false;
    });
}

var loadingFlag = false;

function loadingLogo() {
    if (loadingFlag == false) {
        $('.loading-line-inner').addClass('loading-line-inner-wide');
        loadingFlag = true;
    } else {
        $('.loading-line-inner').removeClass('loading-line-inner-wide');
        loadingFlag = false;
    }
}


//START: Lookbook Scroll
$(function () {
    if ($('.thumbs-block').length) {
        var $bl = $(".thumbs-block"),
            $th = $(".thumbs"),
            blW = $bl.outerWidth(),
            blSW = $bl[0].scrollWidth,
            wDiff = (blSW / blW) - 1, // widths difference ratio
            mPadd = 60, // Mousemove Padding
            damp = 50, // Mousemove response softness
            mX = 0, // Real mouse position
            mX2 = 0, // Modified mouse position
            posX = 0,
            mmAA = blW - (mPadd * 2), // The mousemove available area
            mmAAr = (blW / mmAA); // get available mousemove fidderence ratio

        $bl.mousemove(function (e) {
            mX = e.pageX - this.offsetLeft;
            mX2 = Math.min(Math.max(0, mX - mPadd), mmAA) * mmAAr;
        });

        setInterval(function () {
            posX += (mX2 - posX) / damp; // zeno's paradox equation "catching delay"	
            $th.css({
                marginLeft: -posX * wDiff
            });
        }, 10);
    }
});

//END: Lookbook Scroll

//START: Lookbook Cover Scroll
$(function () {
    if ($(".hero-cover").length) {
        var $hc = $(".hero-cover"),
            $caption = $('.caption'),
            $people = $('.people-bg'),
            blW = $hc.outerWidth(),
            mPadd = 60, // Mousemove Padding
            damp = 50, // Mousemove response softness
            mX = 0, // Real mouse position
            mX2 = 0, // Modified mouse position
            mY = 0,
            mY2 = 0,
            posX = 0,
            mmAA = blW - (mPadd * 2), // The mousemove available area
            mmAAr = (blW / mmAA); // get available mousemove fidderence ratio

        $hc.mousemove(function (e) {
            mX = e.pageX;
            mX2 = (mX - (winWidth / 2)) * .02;
            mY = e.pageY;
            mY2 = (mY - (winHeight / 2)) * .02;
        });
        setInterval(function () {
            $caption.css({
                marginLeft: -mX2 * 2.3 + 'px',
                marginTop: -mY2 * 1.3 + 'px'
            }, 300);
        }, 100);
    }
});

//END: Lookbook Cover Scroll

//START: Show Modal 
function showModal(modalID) {
    modalID = '#' + modalID;
    $(modalID + ', .bg-overlay').fadeIn();
}

function closeModal() {
    $('.modal, .bg-overlay').fadeOut();
}


//END: Show Modal

function playVideo(vidID) {
    vidID = '#' + vidID;
    $(vidID + ' video').get(0).play();
}

function pauseVideo(vidID) {
    vidID = '#' + vidID;
    $(vidID + ' video').get(0).pause();
}