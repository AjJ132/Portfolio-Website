import { initCarousel } from "./caraouselModule.js";

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbarItemsContainer = document.querySelector(
    ".navbar-items-container"
  );
  const bars = document.querySelectorAll(".bar"); // Selecting all bars inside menu-toggle
  const navbarItems = document.querySelectorAll(".navbar-item"); // Assuming individual items have the class "navbar-item"

  menuToggle.addEventListener("click", function () {
    navbarItemsContainer.classList.toggle("active");
    this.classList.toggle("clicked");

    bars.forEach((bar) => {
      bar.classList.toggle("clicked");
    });
  });

  navbarItems.forEach((item) => {
    item.addEventListener("click", function () {
      navbarItemsContainer.classList.remove("active");

      menuToggle.classList.remove("clicked"); // Also toggle the menu button back to original state
      bars.forEach((bar) => {
        bar.classList.remove("clicked"); // Reset the bar color when an item is clicked
      });
    });
  });
});

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
  initCarousel("proserv-carousel");
  initCarousel("superweather-carousel");
};

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
