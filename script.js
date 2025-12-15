const scrollUp = document.querySelector(".scroll-up");

window.onscroll = () => {
  if (window.scrollY > 500) {
    scrollUp.classList.add("scroll-active");
  } else {
    scrollUp.classList.remove("scroll-active");
  }
};

const toggle = document.querySelector(".dark-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  } else {
    toggle.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  }
});

const navPoni = document.querySelector(".nav-poni");
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    navPoni.classList.add("nav-active");
  } else {
    navPoni.classList.remove("nav-active");
  }
});
