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
