//Search data
$('.search-21').focus(function () {
  $(".data_search_list").css("display", "block");
}).blur(function () {
  $(".data_search_list").css("display", "none");
});

$('.list_tab_viewmore li a').click(function(){
  $(this).parents('li').addClass('active');
  $(this).parents('li').siblings().removeClass('active');
  var tabID =  $(this).attr('data-tab');
  $(`.exe_view .tab-pane`).fadeOut();
  $(`.exe_view div[data-id="${tabID}"`).fadeIn();
})

//More Tab
//$('.view_chage').click(function(){
 // $(`.list_v`).fadeToggle();
  //$(`.grid_v`).fadeToggle();

  // var listV = $(this).attr('data-tab')
  // if($(this).hasClass('grid')){
  //   $(this).removeClass('grid')
  //   $(`.planner_btm_sect .tab-content .tab-pane`).fadeOut();
  //    $(`.planner_btm_sect .tab-content ${listV}`).fadeIn();
  // }
  // else{
  //   $(this).addClass('grid')
  //    $(`.planner_btm_sect .tab-content .tab-pane.active`).fadeIn();
  //    $(`.planner_btm_sect .tab-content ${listV}`).fadeOut();
  // }
//});

//  $('.planner_btm_sect ul>li>a.nav-link').click(function(){
//   var listG = $('.view_chage').attr('data-tab')
//   alert('listG')
//   $('.view_chage').addClass('grid');
//   $(`.planner_btm_sect .tab-content .tab-pane.active`).fadeIn();
//   $(`.planner_btm_sect .tab-content ${listG}`).fadeOut();
// })

//Menu dropdown
  $('.workouts_add_box .menu > a').click(function () {
    $('.workouts_add_box .menu > .drop_down').fadeOut();
    $(this).next('.workouts_add_box .menu > .drop_down').fadeToggle();
  });
  $(document).mouseup(function (e) {
    if ($(e.target).closest(".workouts_add_box .menu").length === 0) {
      $(".workouts_add_box .menu > .drop_down").hide();
    }
  });

  $('.Section_chag').change(function(){
    var CurrImg = $(this).val();
    
    $('.sleect_sect [data-id="'+CurrImg+'"]').show().siblings().hide();
  });

  $('.holiday_slots ul li').click(function(){$('.holiday_slots ul li').removeClass("active");
  $(this).addClass('active');
   });


   //menu dropdown
  $('.edit_add_list .menu > a').click(function () {
    $('.edit_add_list .menu > .drop_down').fadeOut();
    $(this).next('.edit_add_list .menu > .drop_down').fadeToggle();
  });
  $(document).mouseup(function (e) {
    if ($(e.target).closest(".edit_add_list .menu").length === 0) {
      $(".edit_add_list .menu > .drop_down").hide();
    }
  });
  $('.medicine_menu .menu > a').click(function () {
    $('.medicine_menu .menu > .drop_down').fadeOut();
    $(this).next('.medicine_menu .menu > .drop_down').fadeToggle();
  });
  $(document).mouseup(function (e) {
    if ($(e.target).closest(".edit_add_list .menu").length === 0) {
      $(".medicine_menu .menu > .drop_down").hide();
    }
  });
  $('.copy_list_fi .copy_to li').click(function(){$('.copy_list_fi .copy_to li').removeClass("active");
  $(this).addClass('active');
   });
   $('.copy_list_fi .copy_form li').click(function(){$('.copy_list_fi .copy_form li').removeClass("active");
   $(this).addClass('active');
    });

    $('.medicine_list li').click(function(){$('.medicine_list li').removeClass("active");
    $(this).addClass('active');
     });
 
      $('.planner_list_view li').click(function(){
      $(this).toggleClass('active');
       });

   $('.edit_add_list .tab_click').click(function(){
     $(this).toggleClass('active');
    $(this).parents('.day_slots_box').next('.day_slots_body').slideToggle();
    $(this).parents('.list_day_plan').siblings('.list_day_plan').children('.day_slots_body').slideUp();
    $(this).parents('.list_day_plan').siblings('.list_day_plan').find('.tab_click').removeClass('active')
});



 //menu select dropdown
 $('.menu_course > a').click(function () {
  $('.menu_course > .drop_down').fadeOut();
  $(this).next('.menu_course > .drop_down').fadeToggle();
});
$(document).mouseup(function (e) {
  if ($(e.target).closest(".menu_course").length === 0) {
    $(".menu_course > .drop_down").hide();
  }
});








$('body').on('click', '.drag_close', function(){
  $(this).parents('.ui-draggable').remove();
  if($("#list1 li").length > 0) {
    $('#list1').addClass('dropped');
 }
 else{
    $('#list1').removeClass('dropped');
 }
})