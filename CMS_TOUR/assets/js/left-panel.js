$(function () {


    if (screen.width <= 991) {
        $(".menu-open").click(function() {
            $(".nk-sidebar").animate({
                width: "180px"
            },"fast");
            $(".menu-open").hide();
            $('.hide-logo').show();
            $(".close-btn-menu").show();
        });
        $(".close-btn-menu").click(function() {
            $(".nk-sidebar").animate({
                width: "0"
            },"fast");
            $(".menu-open").show();
            $('.hide-logo').hide('slow');
            $(".close-btn-menu").hide();
        });

        $(".nk-sidebar").animate({
            width: "180px"
        },"fast");
        $(".menu-open").hide();
        $('.hide-logo').show();
        $(".close-btn-menu").show();
    }

});


$(document).on('click', '.user-dropdown .dropdown-menu', function (e) {
    e.stopPropagation();
});


$('body').on('click', '.nk-sidebar .nk-menu li.menu_toggle a', function(){

    if($(this).next('.nk-menu-sub').is(":visible")){
        $(this).parent('li').removeClass('menu_open nav-active');
        $(this).next('.nk-menu-sub').slideUp();
    }
    else{
        $(this).parent('li').addClass('menu_open nav-active');
        $(this).next('.nk-menu-sub').slideDown();
        $(this).parent('li').siblings('li').removeClass('menu_open nav-active');
        $(this).parent('li').siblings('li').children('.nk-menu-sub').slideUp();
    }
})
$('.nk-menu li.menu_open').children('.nk-menu-sub').slideDown();
