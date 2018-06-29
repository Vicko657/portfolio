$(document).ready(function() {

    var $sec = $("section").hide(),
        current = 0;

    $sec.eq(0).show();

    function showNext() {
        if (current < $sec.length - 1) {
            $sec.eq(current).delay(6000).fadeOut('fast', function() {
                current++;
                $sec.eq(current).fadeIn('fast');
                showNext();
            });
        }
    }
    showNext();

    // $('#fullpage').fullpage({
    // anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthpage', 'fifthpage']
    // });
    $('.main-body').css('display','none');

    $('#enter, #skip').click(function(){
      $('#window').fadeOut("slow");
      // $("#window").css('opacity','0');
      // $('#window').css('display','none');
      $('#fp-nav').css('display','block');
      $('.main-body').css('opacity','1');
      $('.main-body').css('display','block');
    });
});
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
