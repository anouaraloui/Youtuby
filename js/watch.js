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
            $('.sidebar').css({ 'left': '-17rem' });
            $('body').css({'background': '#fafafa'});
            $('body').css({'transition': 'all 0.5s ease-in-out'});
            $('body').css({'z-index:': '0'});
            $('.layer').fadeOut();
            
            
        }
        else{ 
            $('.sidebar').css({ 'left': '0' });
            $('body').css({'background': '#7d7f82'});
            $('body').css({'transition': 'all 0.5s ease-in-out'});
            $('body').css({'z-index:': '4'});
            $('.layer').fadeIn(); 
        }
    });

    $('.layer').click(function () {
        $('.sidebar').css({ 'left': '-17rem' });
        $('.layer').fadeOut();
    });

});

$(document).ready(function () {
     $("#myBtn").on("click", function(){
         read();
     });
     $(".reply").click(function() {
         $(this).parents("div.row").next("div.card").toggle();
     });
});
function read() {
     var dots = document.getElementById("dots");
     var moreText = document.getElementById("more");
     var btnText = document.getElementById("myBtn");
   
     if (dots.style.display === "none") {
       dots.style.display = "inline";
       btnText.innerHTML = "Read More";
       moreText.style.display = "none";
     } else {
       dots.style.display = "none"; 
       btnText.innerHTML = "Read Less";
       moreText.style.display = "inline"; 
     }
}

