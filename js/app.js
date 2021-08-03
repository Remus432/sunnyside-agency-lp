const menu = document.querySelector(".header__nav-menu")
const hamburgerBtn = document.querySelector(".header__nav-hamburger")

hamburgerBtn.addEventListener("click", e => {
  menu.classList.contains("visible") ? menu.classList.remove("visible") : menu.classList.add("visible")
})