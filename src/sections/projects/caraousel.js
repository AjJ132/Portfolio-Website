export function initCarousel(carouselSelector) {
    var currentImageIndex = 0;
    var container = document.querySelector(`[data-carousel="${carouselSelector}"]`);
    var images = container.querySelectorAll(".carousel-image");
    var indicatorsContainer = container.querySelector(".carousel-indicators");
    var timer;
  
    for (var i = 0; i < images.length; i++) {
      var indicator = document.createElement("div");
      indicator.className = "indicator";
  
      indicator.addEventListener(
        "click",
        (function (index) {
          return function () {
            // Clear existing timer
            clearInterval(timer);
  
            // Remove active classes
            images[currentImageIndex].classList.remove("active");
            indicators[currentImageIndex].classList.remove("active");
  
            // Update current image index
            currentImageIndex = index;
  
            // Add active classes
            images[currentImageIndex].classList.add("active");
            indicators[currentImageIndex].classList.add("active");
  
            // Restart timer
            timer = setInterval(updateCarousel, 8000);
          };
        })(i)
      );
  
      indicatorsContainer.appendChild(indicator);
    }
  
    var indicators = indicatorsContainer.querySelectorAll(".indicator");
  
    function updateCarousel() {
      // Remove active classes
      images[currentImageIndex].classList.remove("active");
      indicators[currentImageIndex].classList.remove("active");
  
      // Increment index
      currentImageIndex = (currentImageIndex + 1) % images.length;
  
      // Add active classes
      images[currentImageIndex].classList.add("active");
      indicators[currentImageIndex].classList.add("active");
    }
  
    updateCarousel(); // Show first image
    timer = setInterval(updateCarousel, 8000); // Change image every 8 seconds
  };