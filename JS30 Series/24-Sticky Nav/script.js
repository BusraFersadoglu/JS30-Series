const navigationBar = document.querySelector("#navigation-bar");
const topPositionNav = navigationBar.offsetTop;

function fixNav(){
    if (window.scrollY >= topPositionNav) {
        document.body.style.paddingTop = navigationBar.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
      } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
      }}

window.addEventListener("scroll", fixNav);