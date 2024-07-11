
$(document).ready(function () {
   $('.select_dev .dev > li >a.android').click(function(){
      $(this).parents('.select_dev').slideUp().next('.android_dev').slideDown();
   });
   $('.android_dev .save_app').click(function(){
      $(this).parents('.android_dev').slideUp().next('.pub_app').slideDown();
   });
   $('.menu_toggle').click(function(){
      $('.web_header .menmu').addClass('show_menu');
      $('body').append('<div class="modal-backdrop show"></div>');
   });

   $('body').on('click', '.modal-backdrop', function(){
      $(this).remove();
      $('.web_header .menmu').removeClass('show_menu');
   });


//Add plan box
   $('body').on('click', '.add_plan_box', function(){
      $('.plan_carousel').append('<div class="item"> '+
      '<div class="pln_box edit_box">'+
         '<div class="icon">'+
            '<i class="fa fa-dashboard"></i>'+
            '<div class="form-group">'+
               '<label for="" class="mb-0 text-left d-block">Icon Name</label>'+
               '<input type="text" value="fa fa-dashboard" class="form-control">'+
            '</div>'+
         '</div>'+
         '<div class="edittext">'+
            '<h4 class="edit_input">'+
              ' Lorem ipsum dolor sit amet'+
           ' </h4>'+
         '</div>'+
         '<div class="edittext">'+
            '<p class="websec_desc edit_input">'+
            '   Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'+
           ' </p>'+
         '</div>'+
         '<div class="edittext ">'+
          '  <a href="#" class="edit_input rounded-0 btn btn_blue btn_outline">'+
              ' Know more'+
           ' </a>'+
        ' </div>'+
       '  <a href="javascript:void(0)" class="edit edit_pen">'+
         '   <em class="icon ni ni-pen2"></em>'+
        ' </a>'+
        ' <a href="javascript:void(0)" class="edit edit_remove">'+
           ' <em class="icon ni ni-cross"></em>'+
        ' </a>'+
      '</div>'+
   '</div>')
   });

   //add team
   $('body').on('click', '.add_team_box', function(){
      $('.team_carousel').append('<div class="item">'+
      '<div class="edit_box team_box">'+
         '<figure class="edit_img">'+
           ' <img src="./images/author.png" alt="">'+
            '<a href="#" class="change_img">'+
              ' <em class="icon ni ni-camera-fill"></em>'+
           ' </a>'+
         '</figure>'+
       ' <div class="edittext ">'+
         '<h4 class="edit_input">'+
           'Jogn Doe'+
        ' </h4>'+
       ' </div>'+
       ' <div class="edittext">'+
        ' <p class="websec_desc edit_input">'+
          '  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eir'+
        ' </p>'+
       ' </div>'+
        ' <a href="javascript:void(0)" class="edit edit_pen">'+
           ' <em class="icon ni ni-pen2"></em>'+
        ' </a>'+
        ' <a href="javascript:void(0)" class="edit edit_remove">'+
           ' <em class="icon ni ni-cross"></em>'+
        ' </a>'+
     ' </div>'+
   '</div>')
   });

   //add testimonail
   $('body').on('click', '.add_testimonail_box', function(){
      $('.testimonial_carousel').append('<div class="item">'+
      '<div class="edit_box testi_box">'+
         '<figure class="edit_img">'+
            '<img src="./images/author.png" alt="">'+
            '<a href="#" class="change_img">'+
               '<em class="icon ni ni-camera-fill"></em>'+
            '</a>'+
         '</figure>'+
         
        '<div class="edittext">'+
      '  <ul class="rating">'+
      '   <li>'+
      '      <a href="#" class="active">'+
      '         <i class="fa fa-star" aria-hidden="true"></i>'+
      '      </a>'+
      '   </li>'+
      '   <li>'+
      '      <a href="#" class="active">'+
      '         <i class="fa fa-star" aria-hidden="true"></i>'+
      '      </a>'+
      '   </li>'+
      '   <li>'+
      '      <a href="#">'+
      '         <i class="fa fa-star" aria-hidden="true"></i>'+
      '      </a>'+
      '   </li>'+
      '   <li>'+
      '      <a href="#">'+
      '         <i class="fa fa-star" aria-hidden="true"></i>'+
      '      </a>'+
      '   </li>'+
      '   <li>'+
      '      <a href="#">'+
      '         <i class="fa fa-star" aria-hidden="true"></i>'+
      '      </a>'+
      '   </li>'+
      '</ul>'+
         '<p class="websec_desc edit_input">'+
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eir'+
         '</p>'+
        '</div>'+
        '<div class="edittext name">'+
         '<h4 class="edit_input">'+
           'Jogn Doe'+
         '</h4>'+
        '</div>'+
         '<a href="javascript:void(0)" class="edit edit_pen">'+
            '<em class="icon ni ni-pen2"></em>'+
         '</a>'+
         '<a href="javascript:void(0)" class="edit edit_remove">'+
            '<em class="icon ni ni-cross"></em>'+
         '</a>'+
      '</div>'+
   '</div>')
   });

   //add event 
   $('body').on('click', '.add_event_box', function(){
      $('.event_carousel').append('<div class="item">'+
      '<div class="edit_box event_box">'+
        '<div class="edittext">'+
         '<p class="date edit_input">'+
            '25'+
         '</p>'+
        '</div>'+
        '<div class="edittext">'+
         '<p class="month edit_input">'+
            'SEP, 2022'+
         '</p>'+
        '</div>'+
        '<div class="edittext">'+
         '<p class="e_name edit_input">'+
            'Fitness Class'+
         '</p>'+
        '</div>'+
        '<div class="edittext">'+
         '<p class="e_desc edit_input">'+
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed '+
         '</p>'+
        '</div>'+
        '<div class="edittext">'+
         '<p class="e_time edit_input">'+
           '<i class="fa fa-clock-o" aria-hidden="true"></i>'+
'06:30 PM'+
         '</p>'+
        '</div>'+
         '<a href="javascript:void(0)" class="edit edit_pen">'+
            '<em class="icon ni ni-pen2"></em>'+
         '</a>'+
         '<a href="javascript:void(0)" class="edit edit_remove">'+
            '<em class="icon ni ni-cross"></em>'+
         '</a>'+
      '</div>'+
   '</div>')
   });


   $('body').on('click', '.edit_remove', function(){
      $(this).parents('.item').remove();
   });

   // $('body').on('click', '.edit_pen', function(){
   //    if($(this).hasClass('save')){
   //       $(this).parents('.edit_box').children('.edittext').children('.edit_input').attr('contenteditable', false)
   //       $(this).removeClass('save').children('.icon').removeClass('ni-check-thick').addClass('ni-pen2')
   //       $(this).parents('.edit_box').children('.edittext').children('.rating').removeClass('r_edit');
   //    }
   //    else{
   //       $(this).parents('.edit_box').children('.edittext').children('.edit_input').attr('contenteditable', true)
   //       $(this).parents('.edit_box').children('.edittext').children('.rating').addClass('r_edit');
   //       $(this).addClass('save').children('.icon').removeClass('ni-pen2').addClass('ni-check-thick')
   //    }
   // });

   $('.web_header .menmu .edit_pen').click(function(){
      $(this).parents('.menmu').toggleClass('change')
   });

   $('.social_box .edit_pen').click(function(){
      $(this).parents('.social_box').children('ul').toggleClass('change')
   });
   $('body').on('click', '.social_box .remove', function(){
      $(this).parents('li').remove();
   });

   $('.web_appcta .edit_pen').click(function(){
      $(this).parents('.edit_box').children('ul.do_btn').toggleClass('change')
   });

   //add social item
   $('.add_socail_item a').click(function(){
      var sitem = $(this).attr('data-value');
      if(sitem == 'facebook'){
         $('.social_box > ul').append('<li>'+
         '<a href="#">'+
            '<i class="fa fa-facebook-f"></i>'+
         '</a>'+
         '<input type="text" class="form-control" value="www.facebook.com">'+
         '<span class="remove">'+
          '<i class="fa fa-times"></i>'+
         '</span>'+
      '</li>');
      }
      else if(sitem == 'twitter'){
         $('.social_box > ul').append('<li>'+
         '<a href="#">'+
            '<i class="fa fa-twitter"></i>'+
         '</a>'+
         '<input type="text" class="form-control" value="www.twitter.com">'+
         '<span class="remove">'+
          '<i class="fa fa-times"></i>'+
         '</span>'+
      '</li>');
      }
      else if(sitem == 'instagram'){
         $('.social_box > ul').append('<li>'+
         '<a href="#">'+
            '<i class="fa fa-instagram"></i>'+
         '</a>'+
         '<input type="text" class="form-control" value="www.instagram.com">'+
         '<span class="remove">'+
          '<i class="fa fa-times"></i>'+
         '</span>'+
      '</li>');
      }
      else if(sitem == 'linkedin'){
         $('.social_box > ul').append('<li>'+
         '<a href="#">'+
            '<i class="fa fa-linkedin"></i>'+
         '</a>'+
         '<input type="text" class="form-control" value="www.linkedin.com">'+
         '<span class="remove">'+
          '<i class="fa fa-times"></i>'+
         '</span>'+
      '</li>');
      }
      else if(sitem == 'youtube'){
         $('.social_box > ul').append('<li>'+
         '<a href="#">'+
            '<i class="fa fa-youtube-play"></i>'+
         '</a>'+
         '<input type="text" class="form-control" value="www.youtube.com">'+
         '<span class="remove">'+
          '<i class="fa fa-times"></i>'+
         '</span>'+
      '</li>');
      }
      else if(sitem == 'pinterest'){
         $('.social_box > ul').append('<li>'+
         '<a href="#">'+
            '<i class="fa fa-pinterest-p"></i>'+
         '</a>'+
         '<input type="text" class="form-control" value="www.pinterest.com">'+
         '<span class="remove">'+
          '<i class="fa fa-times"></i>'+
         '</span>'+
      '</li>');
      }
      else if(sitem == 'whatsapp'){
         $('.social_box > ul').append('<li>'+
         '<a href="#">'+
            '<i class="fa fa-whatsapp"></i>'+
         '</a>'+
         '<input type="text" class="form-control" value="www.whatsapp.com">'+
         '<span class="remove">'+
          '<i class="fa fa-times"></i>'+
         '</span>'+
      '</li>');
      }
   });

   
      $('body').on('click', '.pln_box .edit_pen', function(){
      $(this).parents('.pln_box').children('.icon').toggleClass('change')
   });

   $('body').on('click', '.edit_pen', function(){
      $(this).parents('.edit_box').children('.edit_img').toggleClass('change')
   });

   $('.dv_wd > li >a').click(function(){
      var dWdt = $(this).attr('data-value');
      $('.web_stps3 iframe').addClass(dWdt)
      if(dWdt == 'laptop'){
         $('.web_stps3 iframe').removeClass('mobile')
         $('.web_stps3 iframe').removeClass('tablet')
      }
      else if(dWdt == 'mobile'){
         $('.web_stps3 iframe').removeClass('laptop')
         $('.web_stps3 iframe').removeClass('tablet')
      }
      else{
         $('.web_stps3 iframe').removeClass('laptop')
         $('.web_stps3 iframe').removeClass('mobile')
      }
      $(this).addClass('active').parents('li').siblings().children().removeClass('active');
   });

   // $('.digital_sec .web_stp1 .inv_thmbox:not(.cmn_soon)').click(function () {
   //    $('.digital_sec .web_stp1 .inv_thmbox').removeClass('selected');
   //    $(this).addClass('selected').find('input').prop('checked', true)
   // });

   // $('.digital_sec .web_stp1-1 .inv_thmbox').click(function () {
   //    $('.digital_sec .web_stp1-1 .inv_thmbox').removeClass('selected');
   //    $(this).addClass('selected').find('input').prop('checked', true)
   // });

   // $('.digital_sec .web_stp2 .inv_thmbox:not(.dflt)').click(function () {
   //    if( $(this).find('input').is(':checked')){
   //       $(this).removeClass('selected');
   //       $(this).find('input').prop("checked", false)
   //    }
   //    else{
   //       $(this).addClass('selected');
   //       $(this).find('input').prop("checked", true)
   //    }
   // });

   $('.digital_sec .web_next').click(function(){
      $(this).parents('.stps').slideUp('fast').next('.stps').slideDown('fast');
   });
   $('.digital_sec .web_back').click(function(){
      $(this).parents('.stps').slideUp('fast').prev('.stps').slideDown('fast');
   });

	$('.form-control').blur(function () {
		if ($(this).val()) {
			$(this).addClass('hasvalue');
		} else {
			$(this).removeClass('hasvalue');
		}
	});

	$('.form-control').each(function(index, item){
		// For each element, check if the val is not equal to an empty string.
		if($(item).val() !== '') {
			$(item).addClass('hasvalue value-exists');   
			$(this).parents('.form-group').find('.phone_label').addClass('phone_labelactive');
		}
	});

   $('.app_title a').click(function(){
      $(this).parents('.app_title').toggleClass('edit')
      $(this).children('.icon').toggleClass('ni-pen2').toggleClass('ni-check-thick')
   });
});

$( function() {
   $( "#sortable" ).sortable({
     items: "div:not(.web_banner, .web_footer)",
     handle: ".sec_sortbtn",
   });


   // $( "#sortable > div" ).disableSelection();
 } );

 $( function() {
   $( "#sort_menu" ).sortable({
     items: "li:not(:last-child)",
     handle: ".menu_sortbtn",
   });

 } );

$('.color-picker input').each(function(){
   $(this).change(function(){
      var color = $(this).val()
      $(this).parents('.color-picker').find('span').text(color)
   })
})
   
