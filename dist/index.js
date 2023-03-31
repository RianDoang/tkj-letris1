// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Partner 1
const btnPartner1 = document.querySelector("#btn-partner1");
const arrowTop1 = document.querySelector("#arrow-top1");
const btnLihat1 = document.querySelector("#btn-lihat1");

btnPartner1.addEventListener("click", () => {
  arrowTop1.classList.add("arrow-top1");
  btnLihat1.classList.add("btn-lihat1");
});

window.addEventListener("click", (e) => {
  if (e.target != btnPartner1 && e.target != arrowTop1 && e.target != btnLihat1) {
    arrowTop1.classList.remove("arrow-top1")
    btnLihat1.classList.remove("btn-lihat1")
  }
});

// Partner 2
const btnPartner2 = document.querySelector("#btn-partner2");
const arrowTop2 = document.querySelector("#arrow-top2");
const btnLihat2 = document.querySelector("#btn-lihat2");

btnPartner2.addEventListener("click", () => {
  arrowTop2.classList.add("arrow-top2");
  btnLihat2.classList.add("btn-lihat2");
});

window.addEventListener("click", (e) => {
  if (e.target != btnPartner2 && e.target != arrowTop2 && e.target != btnLihat2) {
    arrowTop2.classList.remove("arrow-top2")
    btnLihat2.classList.remove("btn-lihat2")
  }
});

// Partner 3
const btnPartner3 = document.querySelector("#btn-partner3");
const arrowTop3 = document.querySelector("#arrow-top3");
const btnLihat3 = document.querySelector("#btn-lihat3");

btnPartner3.addEventListener("click", () => {
  arrowTop3.classList.add("arrow-top3");
  btnLihat3.classList.add("btn-lihat3");
});

window.addEventListener("click", (e) => {
  if (e.target != btnPartner3 && e.target != arrowTop3 && e.target != btnLihat3) {
    arrowTop3.classList.remove("arrow-top3")
    btnLihat3.classList.remove("btn-lihat3")
  }
});

// Darkmode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
