const showBtn = document.querySelector(".navbtn");
const topNav = document.querySelector(".top-nav");

showBtn.onclick = function () {
  if (topNav.classList.contains("showNav")) {
    topNav.classList.remove("showNav");
    showBtn.innerHTML = '<em class="fa-solid fa-bars"></em>';
  } else {
    topNav.classList.add("showNav");
    showBtn.innerHTML = '<em class="fa-solid fa-xmark"></em>';
  }
};

var lightbox = new SimpleLightbox(".gallery a", {
  /* options */
});
