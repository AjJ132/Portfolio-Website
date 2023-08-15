document.querySelectorAll("[data-tooltip]").forEach((el) => {
  el.addEventListener("mouseover", function () {
    this.setAttribute(
      "data-tooltip",
      this.getAttribute("data-tooltip")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
    );
  });
});

window.onload = function () {
  var currentImageIndex = 0;
  var images = document.querySelectorAll(".carousel-image");
  var indicatorsContainer = document.getElementById("carousel-indicators");
  var timer;

  // Initialize indicators and images
  for (var i = 0; i < images.length; i++) {
    var indicator = document.createElement("div");
    indicator.className = "indicator";

    // Add a click event listener to each indicator
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

  var indicators = document.querySelectorAll(".indicator");

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
  timer = setInterval(updateCarousel, 8000); // Change image every 2 seconds
};

var button = document.getElementById("learn-more-proserv");

button.addEventListener("click", function () {
  window.location.href = "ProServ/";
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    document
      .querySelectorAll(".tab")
      .forEach((innerTab) => innerTab.classList.remove("active"));
    tab.classList.add("active");

    document.querySelectorAll(".content-section").forEach((section) => {
      section.setAttribute("hidden", "true"); // Hide all content sections
    });

    var tabId = tab.getAttribute("data-tab");
    document.getElementById(`content-${tabId}`).removeAttribute("hidden"); // Show the corresponding content section
  });
});
