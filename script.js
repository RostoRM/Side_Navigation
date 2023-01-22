const menuBars = document.getElementById('menu-bars');
const sidebar = document.getElementById('sidebar');
const transparency = document.getElementById('transparency-container');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

const navItems = [nav1, nav2, nav3, nav4, nav5];

//Control Navigation Animation
const navAnimation = (direction1, direction2) => {
  navItems.forEach((nav, i) => {
    nav.classList.replace(
      `slide-${direction1}-${i + 1}`,
      `slide-${direction2}-${i + 1}`
    );
  });
};

const toggleNav = () => {
  // Toggle: Menu Bars Open/Closed
  menuBars.classList.toggle('change');
  // Toggle: transparency of whole container
  transparency.classList.toggle('transparency-container');
  // Toggle: Menu Active
  sidebar.classList.toggle('sidebar-active');
  if (sidebar.classList.contains('sidebar-active')) {
    // Animate In - Overlay
    sidebar.classList.replace('sidebar_hidden', 'sidebar_visible');
    //Animate In- Nav Items
    navAnimation('out', 'in');
  } else {
    // Animate Out - Overlay
    sidebar.classList.replace('sidebar_visible', 'sidebar_hidden');
    //Animate Out- Nav Items
    navAnimation('in', 'out');
  }
};

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener('click', toggleNav);
});
