//figuring out which page is currently being viewed
const activePage = window.location.pathname;
console.log(activePage);

const headerLinks = document.querySelectorAll('nav ul li a').
  forEach(link => {
    if (link.href.includes(`${activePage}`)) {
      link.parentElement.classList.add('headerLinkActive');
    }
  })
const sidebarLinks = document.querySelectorAll(".sidebar a").
  forEach(link => {
    if (link.href.includes(activePage)) {
      link.classList.add('active');
      link.classList.add('liactive');
      link.parentElement.classList.add('liactive');
      link.parentElement.classList.add('sidebarActiveHover');
    }
  })


const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})
