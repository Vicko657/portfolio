$(document).ready(function(){
redirect();
});

$(document).ready(function() {

    var $sec = $("section").hide(),
        current = 0;

    $sec.eq(0).show();

    function showNext() {
        if (current < $sec.length - 1) {
            $sec.eq(current).delay(4000).fadeOut('fast', function() {
                current++;
                $sec.eq(current).fadeIn('fast');
                showNext();
            });
        }
    }
    showNext();

});

var es = document.getElementById("enter");
$(document).ready(function(){
  $('.main-body').css('display','none');
  $('#enter, #skip').click(function(){
  $("#window").fadeOut("slow");
  $('.main-body').css('opacity','1');
  $('.main-body').css('display','block');
  });
});
es.onclick = function(){
  $('#window').fadeOut("slow");
};

$(document).ready(function(){function isScrolledIntoView(elem){
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));

}
$(window).scroll(function(){
  $('.scroll-animations .animated').each(function(){
    if(isScrolledIntoView(this)=== true){
      $(this).addClass('fadeInLeft');
      }
    });
  });
});
