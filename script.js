$(document).ready(function(){
    $(".toggle-button").click(function(){
        $("nav ul").slideToggle(300);
    })
    var scrollLink = $('.scroll');
    scrollLink.click(function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        },1000);
    })
    $(window).scroll(function(){
        var scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function(){
            var sectionOffset = $(this.hash).offset().top;
            
            if(sectionOffset <= scrollbarLocation){
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })
    })
})