const tg = new tourguide.TourGuideClient({
  exitOnClickOutside: false,
  dialogPlacement: 'bottom',
  isVisible: true,
  dialogClass: "MyTourBox"
});



setTimeout(()=> {
   tg.start().then(()=>{
      $('body').addClass('TourStarted');  
    });
   
}
,800);


tg.onAfterExit(()=>{
  $('body').removeClass('TourStarted');  
});


