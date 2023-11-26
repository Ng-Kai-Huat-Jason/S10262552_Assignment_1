
// navbar
function myFunction() {
  var x = document.getElementById("myNavbar");
  var slideshowContainer = document.getElementsByClassName('slideshow-container')[0];

  if (x.classList.contains("responsive")) {
    x.classList.remove("responsive");
    slideshowContainer.style.marginTop = x.offsetHeight + 'px';
  } else {
    x.classList.add("responsive");
    slideshowContainer.style.marginTop = '0';
  }
}


  //slideshow-banner
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
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
  
  // Add automatic slideshow functionality
  let autoSlideIndex = 0;
  
  function autoShowSlides() {
    plusSlides(1);
  }
  
  // Set interval for automatic slideshow (change the time interval as needed)
  let autoSlideInterval = setInterval(autoShowSlides, 2000); // Change slideshow every 2 seconds
  
  // Pause the automatic slideshow when the user clicks on a dot
  document.querySelectorAll('.dot').forEach(function(dot) {
    dot.addEventListener('click', function() {
      clearInterval(autoSlideInterval);
    });
  });

/* If dropdown menu open margin is 0, if close margin = navbar + pixel */
  window.onload = function() {
    var navbar = document.getElementsByClassName('navbar')[0];
    var navbarHeight = navbar.offsetHeight;
    var slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
  
    // Get the computed value of the 'display' property of the navbar menu
    var navbarMenuDisplay = window.getComputedStyle(navbar).getPropertyValue('display');
  
    // Check if the responsive class is applied to the navbar
    var isMenuOpen = navbar.classList.contains('responsive');
  
    // Adjust the condition in the if statement as needed
    if (isMenuOpen) {
      slideshowContainer.style.marginTop = '0';
    } else {
      slideshowContainer.style.marginTop = navbarHeight + 'px';
    }
  };

