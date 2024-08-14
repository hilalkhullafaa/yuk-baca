// add event on element
const addEventOnElement = function (el, type, callback) {
  if (el.length > 1) {
    for (let i = 0; i < el.length; i++) {
      el[i].addEventListener(type, callback);
    }
  } else {
    el.addEventListener(type, callback);
  }
};

// active animation header ketika scroll down 100px & bac top btn
const header = document.getElementById("header");
const backTopBtn = document.querySelector(".back-top-btn");
const scrollActive = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

addEventOnElement(window, "scroll", scrollActive);

// navbar toggle
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");

const toggleNavbar = () => {
  navbar.classList.toggle("active");
};

addEventOnElement(navToggler, "click", toggleNavbar);

// filter function
const filterBtn = document.querySelectorAll(".filter-btn");
const filterItems = document.querySelectorAll(".scrollbar-item");
let lastClickBtn = filterBtn[0];

const filter = function () {
  lastClickBtn.classList.remove("active");
  this.classList.add("active");
  lastClickBtn = this;

  for (let i = 0; i < filterItems.length; i++) {
    for (let j = 0; j < i; j++) {
      if (filterItems[j].dataset.all === this.dataset.filterBtn) {
        filterItems[j].style = "product-list .scrollbar";
      }
    }
    if (filterItems[i].dataset.filter === this.dataset.filterBtn) {
      filterItems[i].style.display = "block";
    } else {
      filterItems[i].style.display = "none";
    }
  }
  return;
};

addEventOnElement(filterBtn, "click", filter);
