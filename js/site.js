
buttonCloudEl = $("#button");

buttonCloudEl.append("<button id='button1'>What Mood Are You In?</button>");



$("#button1").hover(function(){
  $("#button1").toggleClass("hoverOne");
})
$("#button1").click(function(){
  buttonCloudEl.toggleClass("changeOne");
  $("#button1").toggleClass("buttonOne");
})
