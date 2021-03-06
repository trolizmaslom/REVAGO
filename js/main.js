function days() {
  var def =7;
  $('#days').append(def);
  var a = $("#date-from").datepicker('getDate'),
      b = $("#date-to").datepicker('getDate'),
      c = 24*60*60*1000,
      diff = 7;
  diff = Math.round(Math.abs((a - b)/(c)));
  $('#days').empty().append(diff);
  var price = 350,
      pay = price * diff;
  $('#pay').empty().append("= $ " + pay);
};
$(document).ready(function() {

    // Directions show
    $('.show-direction').click(function(){
        $('.hidden-blocks').show('200');
        $(this).hide();
    });

    // About project show
    $('.show-project').click(function(){
        $('.hidden').show('200');
        $(this).hide();
    });

    // Currency
    var $currency = $('.currency');
    $('.currency span').click(function(){
        $(this).next('ul').addClass('show');
    });

    $('body').click(function() {
      var even = $(event.target).parents('.currency');
      if ($('.currency ul').hasClass('show')) {
        if (!even.length) {
          $('.currency ul').removeClass('show');
        }
      }
    });

    $('.currency li').click(function(){
        $('.currency li').removeClass('active');
        $(this).addClass('active');
        $currency.find('span').html($(this).html());
        $currency.find('ul').removeClass('show');
    });

    // Autocomplete field
    var availablePlaces = [
        "Аликанте",
        "Андалусия",
        "Балеарские острова",
        "Барселона",
        "Бенидорм",
        "Бильбао",
        "Валенсия",
        "Город Ибица",
        "Гран-Канария",
        "Гранада",
        "Жирона",
        "Ибица",
        "Кадис",
        "Канарские острова",
        "Каталония",
        "Кордова",
        "Коста-Бланка",
        "Коста-Брава",
        "Коста-Дорада",
        "Коста-дель-Соль",
        "Лансароте",
        "Ллорет-де-Мар",
        "Мадрид",
        "Майорка",
        "Малага",
        "Марбелья",
        "Пальма-де-Майорка",
        "Реус",
        "Салоу",
        "Санта-Крус-де-Тенерифе",
        "Сарагоса",
        "Севилья",
        "Ситжес",
        "Сьерра-Невада",
        "Таррагона",
        "Тенерифе",
        "Толедо",
        "Фигерас"
    ];
    $("#place").autocomplete({
        source: availablePlaces,
        appendTo: '#place-wrapper'
    });

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



    // Datepicker
    var minDays = 7;

    $('#date-from').datepicker({
      dateFormat: 'dd.mm.yy',
      numberOfMonths: 2,
      minDate: 0,
      onClose: function date() {
          if($('#date-from').datepicker('getDate')) {
              $('#date-to').removeClass('hasDatepicker');
                var date1 = $('#date-from').datepicker('getDate');
                var tod = new Date();
                var start = new Date(date1);

                var end = new Date(date1.setDate(date1.getDate() + minDays));
                var diff = Math.round((start - tod) / (1000 * 60 * 60 * 24)) + 1 + Math.round((end - start) / (1000 * 60 * 60 * 24));
                $('#date-to').removeAttr('disabled').datepicker({
                    minDate: diff,
                    dateFormat: 'dd.mm.yy',
                    numberOfMonths: 2,
                    onClose: function () {
                        days();
                    }
                });
                $('#date-to').val('');
          }
        return false;
      }
    });

  $.datepicker.setDefaults($.datepicker.regional["ru"]);

    //fix for IE7 and IE8
    $.support.placeholder = ('placeholder' in document.createElement('input'));
    if (!$.support.placeholder) {
        $("[placeholder]").focus(function () {
            if ($(this).val() == $(this).attr("placeholder")) $(this).val("");
        }).blur(function () {
            if ($(this).val() == "") $(this).val($(this).attr("placeholder"));
        }).blur();

        $("[placeholder]").parents("form").submit(function () {
            $(this).find('[placeholder]').each(function() {
                if ($(this).val() == $(this).attr("placeholder")) {
                    $(this).val("");
                }
            });
        });
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
