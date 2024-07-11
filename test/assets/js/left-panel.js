$(function () {
    if (screen.width > 991) {

        if($('body').find('.nk-sidebar-active').length){
            $('body').addClass('nav-shown');
        }

        $('body').on('click', '.nk-nav-toggle.toggle-active, .nk-sidebar .nk-menu li.menu_toggle a', function(){
            $(".nk-sidebar").animate({
                width: "215px"
            },"fast");
            $('.menu_style2 .nav-active .nk-menu-sub').fadeIn('fast');
            $('.nk-menu-text').fadeIn('fast');

        });
        $('body').on('click', '.nk-sidebar .nk-menu li.menu_toggle a', function(){
            $('body').addClass('nav-shown');
            $('.nk-sidebar').addClass('nk-sidebar-active')
        })
        $('body').on('click', '.nk-nav-toggle:not(.toggle-active)', function(){
            $(".nk-sidebar").animate({
                width: "70px"
            },"fast");
            $('.menu_style2 .nk-menu-sub').slideUp();
            $('.nk-menu-text').fadeOut('slow');
        });
        $(document).ready(function() {
            $('.nk-menu li a.nk-menu-link').each(function() {
                if (typeof $(this).attr('data-original-title') === 'undefined') {
                    $('.nk-menu li a.nk-menu-link').tooltip({
                        tooltipClass: "LeftTooltip",
                        template: '<div class="tooltip LeftTooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                        position :{ my: 'left center', at: 'right+10 center' }
                    });
                }
            });
        });
        $('.nk-menu li a.nk-menu-link').on('inserted.bs.tooltip', function () {
            if($('body').hasClass('nav-shown')){
                var $BsTooltip = $(this);
                var tooltipId = $BsTooltip.attr('aria-describedby');
                var $tooltip = $('#' + tooltipId);
                $tooltip.addClass('d-none');
            }
            else{
                var $BsTooltip = $(this);
                var tooltipId = $BsTooltip.attr('aria-describedby');
                var $tooltip = $('#' + tooltipId);
                $tooltip.removeClass('d-none').addClass('LeftTooltip');
            }
        });
    }
    if (screen.width < 992) {
        $('.nk-sidebar').removeClass('nk-sidebar-active');
        $('body').on('click', '.nk-nav-toggle', function(){
            $(".nk-sidebar").animate({
                width: "215px"
            },"fast");
            $('.menu_style2 .nav-active .nk-menu-sub').fadeIn('fast');
            $('.nk-menu-text').fadeIn('fast'); 
        });

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
$('.nk-sidebar-active .nk-menu li.menu_open').children('.nk-menu-sub').slideDown();


