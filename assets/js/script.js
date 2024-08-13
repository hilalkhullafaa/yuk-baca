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

// navbar toggle
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");

const toggleNavbar = () => {
  navbar.classList.toggle("active");
};

addEventOnElement(navToggler, "click", toggleNavbar);

// filter function
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter]");
let lastClickBtn = filterBtn[0];

const filter = function () {
  lastClickBtn.classList.remove("active");
  this.classList.add("active");
  lastClickBtn = this;

  for (let i = 0; i < filterItems.length; i++) {
    if (filterItems[i].dataset.filter === this.dataset.filterBtn) {
      filterItems[i].style.display = "block";
    } else {
      filterItems[i].style.display = "none";
    }
  }
};

addEventOnElement(filterBtn, "click", filter);
