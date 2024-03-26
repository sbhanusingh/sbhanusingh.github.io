const tg = new tourguide.TourGuideClient({
  exitOnClickOutside: false,
  dialogPlacement: 'bottom'
})





 setTimeout(()=> {
   tg.start()
}
,1000);
