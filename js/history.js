$(document).ready(function() {
    $(".first-list-element").addClass("active");
    $(".nav-item").click(function () {
        $("nav-item").removeClass("active");
        $(this).addClass("active");
    });

    $("#toggler").click(function(event) {
        $('#wrap').toggleClass('toggler');
        
        var left = $('.sidebar').css("left");
        if (left == '0px') 
        {
            $('.history-page').css({'margin-left': '0px'});
            $('.sidebar').css({ 'left': '-17rem' });  
        }
        else{ 
            $('.sidebar').css({ 'left': '0' });
            $('.history-page').css({'margin-left': '260px'});
            $('.history-page').css({'transition': 'all 0.5s ease-in-out'});
            
        }
    });
    $(".search-icon").click(function () {
        $(".search-input").slideToggle("slow"); 
    }); 

});

$(document).ready(function() {
    $(".remove").click(function () {
        $(this).parents('.card').hide(); 
    });
});
