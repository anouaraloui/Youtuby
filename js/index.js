$(document).ready(function() {
    $(".first-list-element").addClass("active");
    $(".nav-item").click(function () {
        $("nav-item").removeClass("active");
        $(this).addClass("active");
    });
    $("#toggler").click(function(event) {
        $('#wrap').toggleClass('toggler');
        // add a black layer
        var left = $('.sidebar').css("left"); 
        if (left == '0px') 
        {
            $('.accueil').css({'margin-left': '0px'});
            $('.suggested').css({'padding-left': '0px'});
            $('.sidebar').css({ 'left': '-17rem' });
            $('.layer').fadeOut();
            
            
        }
        else{
            $('.sidebar').css({ 'left': '0' });
            $('.accueil').css({'margin-left': '220px'});
            $('.accueil').css({'transition': 'all 0.5s ease-in-out'});
            $('.suggested').css({'padding-left': '30px'});
            $('.suggested').css({'transition': 'all 0.5s ease-in-out'});
            $('.layer').fadeIn();
        }
    });


    $('.layer').click(function () {
        $('.sidebar').css({ 'left': '-17rem' });
        $('.layer').fadeOut();
    });

    $(".search-icon").click(function () {
        $(".search-input").slideToggle("slow"); 
    }); 

});


