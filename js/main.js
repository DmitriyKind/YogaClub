$(document).ready(() => {

    new WOW({
        animateClass: 'animate__animated',
    }).init();

    $('#main-slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                }

            },
            {
                breakpoint: 424,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                }
            },

        ]
    });


    $('.open-popup').click(() => {
        $('#client-name').value = 0;
        $('#phone-number').value = 0;
        $('#popup').css('display', 'flex')
    });


    $('#popup-close, #popup').click((e) => {
        if (e.target.id === 'popup' || e.target.id === 'popup-close') {
            $('#form-hide').css('display', 'block');
            $('#form-text').css('display', 'none');
            $('#popup').hide()
        }
    });


    $('.open-popup-call').click(() => {
        $('#popup-call-fon').css('display', 'flex')
    });


    $('#close, #popup-call-fon').click((e) => {
        if (e.target.id === 'popup-call-fon' || e.target.id === 'close') {
            $('#popup-form-hide').css('display', 'block');
            $('#call-text').css('display', 'none');
            $('#popup-call-fon').hide()
        }
    });


    type = "text/javascript" >
        // Создает обработчик события window.onLoad
        YMaps.jQuery(function () {
            // Создает экземпляр карты и привязывает его к созданному контейнеру
            var map = new YMaps.Map(YMaps.jQuery("#map"));

            // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
            map.setCenter(new YMaps.GeoPoint(37.57, 55.75), 12);
            // map.addControl(new YMaps.Zoom());
            map.addControl(new YMaps.SmallZoom());


            var s = new YMaps.Style();
            s.balloonContentStyle = new YMaps.BalloonContentStyle(
                new YMaps.Template("<div style = color:#7e0836\>$[description]</div>"),

                s.iconStyle = new YMaps.IconStyle(),
                s.iconStyle.href = "images/maps-and-flags.png",
                s.iconStyle.size = new YMaps.Point(34, 47),
                s.iconStyle.offset = new YMaps.Point(-20, -40),
            );

            var placemark = new YMaps.Placemark(new YMaps.GeoPoint(37.592000, 55.7670000), {
                hideIcon: false,
                style: s,
            });
            placemark.name = "YogaClub";
            placemark.description = "Йога для тела и души ))) ";

            map.addOverlay(placemark);
        })

    $(function () {
        $("#tabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
        $("#tabs li").removeClass("ui-corner-top").addClass("ui-corner-left");
    });


    $('#popup-call-button').click(() => {
        let clientName = $('#client-name');
        let phoneNumber = $('#phone-number');

        let error = false;

        if (!clientName.val()) {
            $('#for-client-name').css('display', 'block')
            clientName.css('border-color', 'red');
            error = true;
        } else {
            clientName.css('border-color', 'white');
            $('#for-client-name').css('display', 'none')

        }

        if (!phoneNumber.val()) {
            $('#for-phone-number').css('display', 'block')
            phoneNumber.css('border-color', 'red');
            error = true;
        } else {
            phoneNumber.css('border-color', 'white');
            $('#for-phone-number').css('display', 'none')
        }

        if (!error) {
            let loader = $('#loader');
            loader.css('display', 'flex');

            $.ajax({
                type: 'post',
                url: 'call-mail.php',
                data: 'clientName=' + clientName.val() + 'phoneNumber=' + phoneNumber.val(),
                success: () => {
                    loader.hide();


                    $('#popup-form-hide').hide();
                },
                error: () => {
                    setTimeout(function () {
                        loader.hide();

                        $('#popup-form-hide').css('display', 'none');
                        $('#call-text').css('display', 'block');
                    }, 4000);
                }
            })
        }
    })


    $('.popup-button').click(() => {
        let clientName = $('#client');
        let phoneNumber = $('#number');

        let error = false;

        if (!clientName.val()) {
            $('#for-name').css('display', 'block')
            clientName.css('border-color', 'red');
            error = true;
        } else {
            clientName.css('border-color', '#be5171');
            $('#for-name').hide()

        }

        if (!phoneNumber.val()) {
            $('#for-number').css('display', 'block')
            phoneNumber.css('border-color', 'red');
            error = true;
        } else {
            phoneNumber.css('border-color', '#BE5171');
            $('#for-number').hide()
        }

        if (!error) {
            let loader = $('#loader');
            loader.css('display', 'flex');

            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'clientName=' + clientName.val() + 'phoneNumber=' + phoneNumber.val(),
                success: () => {
                    loader.hide();


                    $('#form-hide').hide();
                },
                error: () => {
                    setTimeout(function () {
                        loader.hide();

                        $('#form-hide').css('display', 'none');
                        $('#form-text').css('display', 'block');
                    }, 4000);
                }
            })
        }
    });


    $('.btn-form').click(() => {
        let clientName = $('#footer-name');
        let phoneNumber = $('#footer-number');

        let error = false;

        if (!clientName.val()) {
            $('#form-footer-name').show()
            clientName.css('border-color', 'red');
            error = true;
        } else {
            clientName.css('border-color', '#3A0413');
            $('#form-footer-name').hide()

        }

        if (!phoneNumber.val()) {
            $('#form-footer-number').css('display', 'block')
            phoneNumber.css('border-color', 'red');
            error = true;
        } else {
            phoneNumber.css('border-color', '#3A0413');
            $('#form-footer-number').hide()
        }

        if (!error) {
            let loader = $('#loader');
            loader.css('display', 'flex');

            $.ajax({
                type: 'post',
                url: 'footer-mail.php',
                data: 'clientName=' + clientName.val() + 'phoneNumber=' + phoneNumber.val(),
                success: () => {
                    loader.hide();
                },
                error: () => {
                    setTimeout(function () {
                        loader.hide();

                        $('#footer-form-hide').css('display', 'none');
                        $('#footer-form-show').css('display', 'block');
                    }, 4000);
                }
            })
        }
    })

    $('#burger').click(() => {
        $('#header-menu').css('display', 'flex')
    })
    $('#header-close').click(() => {
        $('#header-menu').css('display', 'none')
    })


});

