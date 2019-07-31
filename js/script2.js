$(document).ready(function(){
redirect();
});

var es = document.getElementById("enter");
$(document).ready(function(){
  $('.main-body').css('display','none');
  $('#enter').click(function(){
  $("#window").css('opacity','0');
  $('#window').css('display','none');
  $('.main-body').css('opacity','1');
  $('.main-body').css('display','block');
  });
});
es.onclick = function(){
  $('#window').fadeOut("slow");
};

function redirect(){
  if(screen.width <= 680){
    document.location = "mobile.html";

  }
}
