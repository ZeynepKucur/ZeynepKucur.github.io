//figuring out which page is currently being viewed
const activePage = window.location.pathname;
console.log(activePage);

// const headerLinks = document.querySelectorAll('nav ul li a').
//   forEach(link => {
//     if (link.href.includes(`${activePage}`)) {
//       link.parentElement.classList.add('headerLinkActive');
//     }
//   })

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

const hamburger = document.getElementById('hamburger')
const sidebar = document.getElementById('sidebarLinks')
const overlay = document.getElementById('overlay')

let menuOpen = false

function openMenu() {
  menuOpen = true
  overlay.style.display = 'block'
  sidebar.style.width = '250px'
}

function closeMenu() {
  menuOpen = false
  overlay.style.display = 'none'
  sidebar.style.width = '0px'
}

hamburger.addEventListener('click', function () {
  if (!menuOpen) {
    openMenu()
  }
})

overlay.addEventListener('click', function () {
  if (menuOpen) {
    closeMenu()
  }
})
