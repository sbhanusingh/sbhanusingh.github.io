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


