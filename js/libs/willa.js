

$(document).ready(function () {
    // Custom Select
    $('.selectius select').each(function () {

        if($(this).attr('id') == 'children'){
            var wraper = $(this).parent();
            $(this).selectmenu({
                appendTo: wraper,
                change: function( event, ui ) {
                   showSelectForChildAge();
                }
            });
        }else{
            var wraper = $(this).parent();
            $(this).selectmenu({
                appendTo: wraper
            });
        }

    });



    //Show more
    $(".more").click(function () {
        $(".facilities .hid").animate({height: "show"}, 1000);
        $(this).hide('slow');
    });
    $(".read-next").click(function () {
        $(this).hide('slow').parent().find('.hid').animate({height: "show"}, 200);
    });
    $('.add-review').click(function () {
        $(this).hide();
        $('.feedback-people').show();
    });
    //scroll body
    $(document).ready(function () {
        $('a[href^="#"]').click(function () {
            var el = $(this).attr('href');
            $('html,body').animate({
                scrollTop: $(el).offset().top
            }, 500);
            return false;
        });
    });


});

$(window).bind('load resize', function () {
    if ($(window).width() > 991) {
        $(window).scroll(function () {
            var el = $(window).scrollTop();
            var start = $('#scrolll').offset().top;
            var stop = $('#map').offset().top;
            var heig = $('.wrapper-calc').height() + 90;
            if (el > start) {
                $('.top-nav-fix .top-line').slideDown(200);
                $('.wrapper-calc').addClass('fix');
            }
            else {
                $('.top-nav-fix .top-line').slideUp(200);
                $('.wrapper-calc').removeClass('fix');
            }
            if (el > stop - heig) {
                $('.wrapper-calc').addClass('posit').css('margin-top', stop - heig - heig);
            } else {
                $('.wrapper-calc').removeClass('posit').css('margin-top', '');
            }
        });
    } else {
        $('.top-nav-fix .top-line').slideUp(200);
        $('.wrapper-calc').removeClass('fix');
    }
});

function showSelectForChildAge(){

    var val = $('#children').val();

    switch(val) {
        case "0":
            $('.child01').removeClass('show-select');
            $('.child02').removeClass('show-select');
            $('.child03').removeClass('show-select');
            break;
        case "1":

            $('.child01').addClass('show-select');
            $('.child02').removeClass('show-select');
            $('.child03').removeClass('show-select');
            break;
        case "2":

            $('.child01').addClass('show-select');
            $('.child02').addClass('show-select');
            $('.child03').removeClass('show-select');
            break;
        case "3":

            $('.child01').addClass('show-select');
            $('.child02').addClass('show-select');
            $('.child03').addClass('show-select');
            break;
        default:
            return false;
    }
}
