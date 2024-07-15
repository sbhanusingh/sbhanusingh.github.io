 $(function(){

      $("#demo1").ionCalendar({
lang:"en", // set the language of the calendar. Each additional language requires its own localization file
years:"2020-2021", // Specifies the years range
sundayFirst:true,
onClick:function(date){ // Callback function. 
   $("#result-1").html("onClick:<br/>"+date);
}
});

      $("#demo2").ionCalendar({
lang:"en", // set the language of the calendar. Each additional language requires its own localization file
years:"2020-2021", // Specifies the years range
sundayFirst:true,
onClick:function(date){ // Callback function. 
   $("#result-2").html("onClick:<br/>"+date);
}
});

      $("#demo3").ionCalendar({
lang:"en", // set the language of the calendar. Each additional language requires its own localization file
years:"2020-2021", // Specifies the years range
sundayFirst:true,
onClick:function(date){ // Callback function. 
   $("#result-3").html("onClick:<br/>"+date);
}
});

      $("#demo4").ionCalendar({
lang:"en", // set the language of the calendar. Each additional language requires its own localization file
years:"2020-2021", // Specifies the years range
sundayFirst:true,
onClick:function(date){ // Callback function. 
   $("#result-4").html("onClick:<br/>"+date);
}
});          

      $("#mydate").ionDatePicker();
   });




if(screen.width > 767){
   $(".menu-open").click(function(){
  
  $(".nk-sidebar").animate({
   width: "260px"
});

    $(".nk-wrap").animate({
   paddingLeft: "260px"
});
  
     $(".nk-menu-text").fadeIn(1500);
        $(".nk-header-fixed").animate({
   left: "260px"
});

        $(".menu-open").hide();

        $(".close-btn-menu").show();


        $(".hide-logo").hide();
        $(".logo-img").show();

});



  $(".close-btn-menu").click(function(){
  
  $(".nk-sidebar").animate({
   width: "75px"
});

    $(".nk-wrap").animate({
   paddingLeft: "75px"
});
  
     $(".nk-menu-text").fadeOut(1500);
        $(".nk-header-fixed").animate({
   left: "75px"
});

        $(".menu-open").show();

        $(".close-btn-menu").hide();

         $(".logo-img").hide();
          $(".hide-logo").show();

});
}

if(screen.width <= 767){
   $(".menu-open").click(function(){
     $(".nk-sidebar").animate({
         width: "260px"
      });
     $(".menu-open").hide();

        $(".close-btn-menu").show();
         $(".hide-logo").hide();
        $(".logo-img").show();
   });
 $(".close-btn-menu").click(function(){
       $(".nk-sidebar").animate({
         width: "0"
      });
     $(".menu-open").show();

        $(".close-btn-menu").hide();
         $(".logo-img").hide();
          $(".hide-logo").show();
   });
}




   $(".workout").click(function(){
  $(".worklist-popup").css({
    "display":"inline-block",
  });
  $(".addplans-popup").hide();
});


      $(".workout-plan").click(function(){
  $(".worklist-popup").hide();
  $(".addplans-popup").show();
});