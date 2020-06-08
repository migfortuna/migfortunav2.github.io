$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100){
            $(".navbar-fade").css({"opacity": "0.2"})
        }
        else{
            $(".navbar-fade").css({"opacity": "1"})
        }
    })
});