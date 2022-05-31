const getHamburgerBtn = document.querySelector('.nav-button_hamburger');
const borderRadiusNav = document.querySelector('.nav-sticky');
const mobileNavToggle = document.querySelector(".nav-mobile_open")
const navMenuList = document.querySelectorAll(".nav-mobile_open a")
const hamburgerIcon = document.querySelectorAll(".nav-hamburger_button-line")

//                  end of variable
function toggleNav() {
  borderRadiusNav.classList.toggle('nav-sticky_open');
  mobileNavToggle.classList.toggle('nav-mobile_toggle');
  borderRadiusNav.classList.toggle("nav-sticky_bot-clear")
}
function hamburgerToggle() {
  //styling hamburger
  hamburgerIcon[0].classList.toggle('nav-hamburger_clicked-top')
  hamburgerIcon[1].classList.toggle('nav-hamburger_clicked-middle')
  hamburgerIcon[2].classList.toggle('nav-hamburger_clicked-bottom')
}
//                  end of function
getHamburgerBtn.addEventListener('click', toggleNav);
//===
getHamburgerBtn.addEventListener("click", hamburgerToggle)

navMenuList.forEach(function (e) {
  e.addEventListener("click", function () {
    toggleNav()
    hamburgerToggle()
  })
})
