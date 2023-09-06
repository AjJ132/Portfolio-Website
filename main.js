import { initCarousel } from "./caraouselModule.js";

document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector("#mobile-menu");
  const menuLinks = document.querySelector(".navbar-items-container");

  menu.addEventListener("click", function () {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
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
