// Menu transition
$(document).ready(function(){

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            $(".navbar")
                .removeClass("bg-white")
                .addClass("navbar-scroll");
        } else {
            $(".navbar").removeClass("navbar-scroll");
        }

        if (scroll > 450) {
            $(".navbar")
                .removeClass("bg-white navbar-light")
                .addClass("bg-primary navbar-dark");
            $("#logo").attr("src","./img/whiteLogo.png");
            $("#estimate")
                .removeClass("btn-outline-secondary")
                .addClass("btn-secondary");
        } else {
            $(".navbar")
                .removeClass("bg-primary navbar-dark")
                .addClass("bg-white navbar-light");
            $("#logo").attr("src","./img/apaturaLogo.png");
            $("#estimate")
                .removeClass("btn-secondary")
                .addClass("btn-outline-secondary");
        }
    })

});