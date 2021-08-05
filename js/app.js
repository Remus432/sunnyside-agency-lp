const menu = document.querySelector(".header__nav-menu")
const hamburgerBtn = document.querySelector(".header__nav-hamburger")
const nav = document.querySelector(".header__nav")

hamburgerBtn.addEventListener("click", e => {
  menu.classList.contains("visible") ? menu.classList.remove("visible") : menu.classList.add("visible")
})

window.addEventListener("scroll", e => {
  const scrollY = window.scrollY
  scrollY > 100 ? nav.classList.add("sticky") : nav.classList.remove("sticky")
})

AOS.init({
  offset: -10,
  duration: 1000
})