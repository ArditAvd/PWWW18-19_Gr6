(function() {
    var s = document.getElementById('bodybg').style,
        f = false,
        c1 = '#934341',
        c2 = '#ffffff',
		c3 = '#626262',
		c4 = '#000000';

    setInterval(function() {
        s.backgroundColor = f ? c1 : c2;
        s.color = f ? c4 : c3;
        f = !f;
    }, 3500);
})();




var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

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

