const getHamburgerBtn = document.querySelector('.nav-button_hamburger');
const borderRadiusNav = document.querySelector('.nav-sticky');
const mobileNavToggle = document.querySelector(".nav-mobile_open")
const navMenuList = document.querySelectorAll(".nav-mobile_open a")
//                  end of variable
function toggleNav() {
  borderRadiusNav.classList.toggle('nav-sticky_open');
  mobileNavToggle.classList.toggle('nav-mobile_toggle');
  borderRadiusNav.classList.toggle("nav-sticky_bot-clear")
}
//                  end of function
getHamburgerBtn.addEventListener('click', toggleNav);

navMenuList.forEach(function (e) {
  e.addEventListener("click", toggleNav)
})